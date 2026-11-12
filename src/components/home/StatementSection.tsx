import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { SCRUB } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Point-of-view statement between the lead work and the rest of the page.
 * The headline arcs with scroll speed and settles flat; the paragraph lights
 * up word by word. Under reduced motion both simply sit there.
 */
const StatementSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldReduceMotion) return undefined;

    let cancelled = false;
    let removeTick: (() => void) | null = null;
    const splits: SplitText[] = [];
    const context = gsap.context(() => {}, section);

    document.fonts.ready.then(() => {
      if (cancelled) return;
      const headline = section.querySelector<HTMLElement>("[data-st-headline]");
      const body = section.querySelector<HTMLElement>("[data-st-body]");
      if (!headline || !body) return;

      context.add(() => {
        const bodySplit = SplitText.create(body, { type: "words" });
        splits.push(bodySplit);
        gsap.fromTo(
          bodySplit.words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.08,
            scrollTrigger: {
              trigger: body,
              start: "top 80%",
              end: "bottom 50%",
              scrub: SCRUB.tight,
            },
          },
        );

        const headlineSplit = SplitText.create(headline, { type: "words,chars" });
        splits.push(headlineSplit);
        const chars = headlineSplit.chars as HTMLElement[];
        const setY = chars.map((char) => gsap.quickSetter(char, "y", "px"));
        const setRotation = chars.map((char) =>
          gsap.quickSetter(char, "rotation", "deg"),
        );

        let amplitude = 0;
        let lastScroll = window.scrollY;
        let resting = true;
        let visible = false;

        ScrollTrigger.create({
          trigger: headline,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            visible = self.isActive;
          },
        });

        const tick = () => {
          const scroll = window.scrollY;
          const velocity = scroll - lastScroll;
          lastScroll = scroll;
          if (!visible) return;

          const target = gsap.utils.clamp(-46, 46, velocity * 1.4);
          amplitude += (target - amplitude) * 0.1;

          if (Math.abs(amplitude) < 0.08 && target === 0) {
            if (!resting) {
              chars.forEach((_, index) => {
                setY[index](0);
                setRotation[index](0);
              });
              resting = true;
            }
            return;
          }

          resting = false;
          const last = Math.max(chars.length - 1, 1);
          chars.forEach((_, index) => {
            const t = (index / last) * 2 - 1;
            setY[index](amplitude * (t * t - 0.4));
            setRotation[index](amplitude * t * 0.22);
          });
        };

        gsap.ticker.add(tick);
        removeTick = () => gsap.ticker.remove(tick);
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      removeTick?.();
      splits.forEach((split) => split.revert());
      context.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="st-section" aria-labelledby="st-title">
      <div className="lw-shell">
        <p className="st-eyebrow">How I think about AI tools</p>
        <h2 id="st-title" className="st-headline" data-st-headline>
          Building AI tools people can question
        </h2>
        <p className="st-body" data-st-body>
          Most AI interfaces ask people to trust an answer without showing how
          the system got there. That is a product problem: people cannot rely on
          a tool they cannot inspect.
        </p>
      </div>
    </section>
  );
};

export default StatementSection;
