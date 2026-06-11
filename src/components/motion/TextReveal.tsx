import {
  createElement,
  useLayoutEffect,
  useRef,
  type ElementType,
} from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DUR, EASE, STAGGER } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

type TextRevealProps = {
  children: string;
  as?: ElementType;
  split?: "lines" | "words" | "chars";
  trigger?: "scroll" | "mount";
  delay?: number;
  className?: string;
};

/**
 * Masked text reveal. Lines rise with a confident decel; chars get a playful
 * back-out pop with a slight rotation. Splitting waits for fonts so line
 * breaks never settle against fallback metrics.
 */
const TextReveal = ({
  children,
  as = "h2",
  split = "lines",
  trigger = "scroll",
  delay = 0,
  className,
}: TextRevealProps) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    let cancelled = false;
    let splitInstance: SplitText | null = null;
    const ctx = gsap.context(() => undefined, element);

    document.fonts.ready.then(() => {
      if (cancelled) {
        return;
      }

      ctx.add(() => {
        splitInstance = SplitText.create(element, {
          type: split,
          mask: split,
          linesClass: "text-reveal__line",
        });

        const targets =
          split === "lines"
            ? splitInstance.lines
            : split === "words"
              ? splitInstance.words
              : splitInstance.chars;

        const fromVars: gsap.TweenVars =
          split === "chars"
            ? { yPercent: 110, rotate: 6, autoAlpha: 0 }
            : { yPercent: 110 };

        const toVars: gsap.TweenVars =
          split === "chars"
            ? {
                yPercent: 0,
                rotate: 0,
                autoAlpha: 1,
                duration: DUR.slow,
                ease: EASE.gsapBack,
                stagger: STAGGER.chars,
                delay,
              }
            : {
                yPercent: 0,
                duration: DUR.reveal,
                ease: EASE.gsapOut,
                stagger: STAGGER.base,
                delay,
              };

        gsap.fromTo(targets, fromVars, {
          ...toVars,
          ...(trigger === "scroll"
            ? {
                scrollTrigger: {
                  trigger: element,
                  start: "top 85%",
                  once: true,
                },
              }
            : {}),
        });
      });
    });

    return () => {
      cancelled = true;
      ctx.revert();
      splitInstance?.revert();
    };
  }, [children, delay, shouldReduceMotion, split, trigger]);

  return createElement(as, { ref: elementRef, className }, children);
};

export default TextReveal;
