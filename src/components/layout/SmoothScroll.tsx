import { useEffect, useLayoutEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

/** Instant scroll reset (route changes). Falls back to native when Lenis is off. */
export const scrollToTop = () => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  } else {
    window.scrollTo(0, 0);
  }
};

/** Instant scroll to an element (hash navigation). */
export const scrollToElement = (element: HTMLElement) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(element, { immediate: true, force: true });
  } else {
    element.scrollIntoView({ behavior: "auto", block: "start" });
  }
};

/** Pause/resume wheel hijacking while a scroll-locked overlay is open. */
export const stopLenis = () => lenisInstance?.stop();
export const startLenis = () => lenisInstance?.start();

/** Pause Lenis while a scroll-locked overlay (dialog, palette) is open. */
export const useLenisLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) {
      return undefined;
    }

    stopLenis();
    return () => {
      startLenis();
    };
  }, [locked]);
};

/**
 * Inertia smooth scroll via Lenis, driven by the GSAP ticker so ScrollTrigger
 * stays in sync. Not instantiated under reduced motion — the site falls back
 * to native scrolling everywhere via the helpers above.
 */
const SmoothScroll = () => {
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const coarsePointer =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (shouldReduceMotion || coarsePointer) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [shouldReduceMotion]);

  return null;
};

export default SmoothScroll;
