import { useLayoutEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { DUR, EASE } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  /** Display string, e.g. "85%", "500+", "8 weeks", "Solo". */
  value: string;
  className?: string;
  duration?: number;
};

const NUMERIC_PATTERN = /^([^0-9]*)(\d[\d,]*(?:\.\d+)?)(.*)$/;

const parseValue = (value: string) => {
  const match = value.match(NUMERIC_PATTERN);
  if (!match) {
    return null;
  }

  const [, prefix, numeric, suffix] = match;
  const target = Number(numeric.replace(/,/g, ""));
  if (!Number.isFinite(target)) {
    return null;
  }

  const decimals = numeric.includes(".")
    ? numeric.split(".")[1]?.length ?? 0
    : 0;
  const useGrouping = numeric.includes(",");

  return { prefix, suffix, target, decimals, useGrouping };
};

/**
 * Animated stat counter. Counts the numeric core of the string up on scroll
 * with a playful scale pop. Non-numeric values ("Solo") and reduced motion
 * render the literal string — the graceful-collapse guarantee.
 */
const CountUp = ({ value, className, duration = DUR.reveal }: CountUpProps) => {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const parsed = useMemo(() => parseValue(value), [value]);

  useLayoutEffect(() => {
    if (shouldReduceMotion || !parsed) {
      return undefined;
    }

    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: parsed.decimals,
      maximumFractionDigits: parsed.decimals,
      useGrouping: parsed.useGrouping,
    });

    const ctx = gsap.context(() => {
      const counter = { current: 0 };

      gsap.fromTo(
        element,
        { scale: 0.82, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: DUR.base,
          ease: EASE.gsapBack,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.to(counter, {
        current: parsed.target,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          element.textContent = `${parsed.prefix}${formatter.format(
            parsed.decimals
              ? Number(counter.current.toFixed(parsed.decimals))
              : Math.round(counter.current),
          )}${parsed.suffix}`;
        },
      });
    }, element);

    return () => ctx.revert();
  }, [duration, parsed, shouldReduceMotion]);

  return (
    <span
      ref={elementRef}
      className={cn("font-mono tabular-nums", className)}
    >
      {value}
    </span>
  );
};

export default CountUp;
