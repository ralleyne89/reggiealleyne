import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code2, Layers3, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fitSignals = [
  {
    label: "Best fit",
    value: "AI and complex product teams turning ambiguity into usable flows.",
    Icon: Brain,
  },
  {
    label: "Working style",
    value: "Evidence, prototypes, critique, and clear product tradeoffs.",
    Icon: ShieldCheck,
  },
  {
    label: "Leverage",
    value: "Design systems and React prototypes that make decisions buildable.",
    Icon: Code2,
  },
];

const cascadeNotes = [
  {
    label: "01 / Frame",
    title: "Find the decision the interface has to make easier.",
    text: "The work starts by naming the user, the constraint, and the proof a reviewer should be able to inspect.",
  },
  {
    label: "02 / Shape",
    title: "Turn rough product intent into a visible path.",
    text: "Flows, wireframes, and prototypes make the tradeoffs concrete before the team spends energy building the wrong thing.",
  },
  {
    label: "03 / Build",
    title: "Use code when it clarifies the product.",
    text: "React prototypes and shipped frontends help the design survive real data, responsive behavior, and edge cases.",
  },
  {
    label: "04 / Prove",
    title: "Keep evidence close to every claim.",
    text: "Case studies should show what changed, what shipped, and what can be opened, tested, or inspected.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let media: ReturnType<typeof gsap.matchMedia> | null = null;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-about-cascade-card]");
      const signals = gsap.utils.toArray<HTMLElement>("[data-about-signal]");

      if (reduceMotion) {
        gsap.set([...cards, ...signals, "[data-about-copy]"], {
          autoAlpha: 1,
          clearProps: "clipPath,transform",
        });
        return;
      }

      gsap.from("[data-about-copy]", {
        autoAlpha: 0,
        duration: 0.72,
        ease: "expo.out",
        stagger: 0.08,
        y: 34,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(cards, {
        autoAlpha: 0,
        clipPath: "inset(12% 8% 12% 8% round 0.9rem)",
        duration: 0.86,
        ease: "expo.out",
        stagger: 0.1,
        y: 86,
        scrollTrigger: {
          trigger: section,
          start: "top 66%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(signals, {
        autoAlpha: 0,
        duration: 0.62,
        ease: "power3.out",
        stagger: 0.08,
        x: -20,
        scrollTrigger: {
          trigger: "[data-about-signals]",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        cards.forEach((card, index) => {
          gsap.to(card, {
            ease: "none",
            y: index % 2 === 0 ? -54 : 34,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        });
      });
    }, section);

    return () => {
      media?.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-cascade relative overflow-clip"
    >
      <div className="about-cascade__grid">
        <div className="about-cascade__intro">
          <p data-about-copy className="about-cascade__eyebrow">
            About Reggie
          </p>
          <h2 data-about-copy className="about-cascade__title">
            Product judgment, UX craft, and frontend proof in the same loop.
          </h2>
          <p data-about-copy className="about-cascade__text">
            I design interfaces for AI tools, dashboards, and mobile-first
            platforms, then prototype enough behavior to help teams see what
            works before they overbuild.
          </p>

          <div data-about-copy className="about-cascade__actions">
            <Link to="/about" className="about-cascade__primary">
              Read more about me
              <ArrowRight size={18} />
            </Link>
            <a href="#contact" className="about-cascade__secondary">
              Reach out
            </a>
          </div>
        </div>

        <div className="about-cascade__story">
          <article className="about-cascade__lead" data-about-cascade-card>
            <div className="about-cascade__lead-icon">
              <Layers3 size={24} />
            </div>
            <p>Best work</p>
            <h3>
              Strategy, interface design, and buildable systems moving together.
            </h3>
            <span aria-hidden="true">archive / working method</span>
          </article>

          <div className="about-cascade__stack">
            {cascadeNotes.map((note) => (
              <article key={note.label} data-about-cascade-card>
                <p>{note.label}</p>
                <h3>{note.title}</h3>
                <span>{note.text}</span>
              </article>
            ))}
          </div>

          <div
            data-about-signals
            className="about-cascade__signals"
            aria-label="Working fit signals"
          >
            {fitSignals.map(({ label, value, Icon }) => (
              <article key={label} data-about-signal>
                <Icon className="h-5 w-5" />
                <p>{label}</p>
                <span>{value}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
