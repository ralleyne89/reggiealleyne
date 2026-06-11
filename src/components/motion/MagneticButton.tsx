import {
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { DUR, EASE } from "@/lib/motion";

type MagneticButtonProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** How far the content chases the pointer (0–1 of pointer offset). */
  strength?: number;
};

/**
 * Wrapper that makes its child gently chase the pointer and snap back with an
 * elastic release. No-ops on touch devices and under reduced motion.
 */
const MagneticButton = ({
  children,
  strength = 0.3,
  className,
  ...rest
}: MagneticButtonProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return undefined;
    }

    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!pointerQuery.matches) {
      return undefined;
    }

    const xTo = gsap.quickTo(wrapper, "x", {
      duration: DUR.base,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(wrapper, "y", {
      duration: DUR.base,
      ease: "power3.out",
    });

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = wrapper.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      xTo(offsetX * strength);
      yTo(offsetY * strength);
    };

    const handlePointerLeave = () => {
      gsap.to(wrapper, {
        x: 0,
        y: 0,
        duration: DUR.slow,
        ease: EASE.gsapElastic,
        overwrite: "auto",
      });
    };

    wrapper.addEventListener("pointermove", handlePointerMove);
    wrapper.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      wrapper.removeEventListener("pointermove", handlePointerMove);
      wrapper.removeEventListener("pointerleave", handlePointerLeave);
      gsap.killTweensOf(wrapper);
      gsap.set(wrapper, { x: 0, y: 0 });
    };
  }, [shouldReduceMotion, strength]);

  return (
    <div ref={wrapperRef} className={cn("inline-block will-change-transform", className)} {...rest}>
      {children}
    </div>
  );
};

export default MagneticButton;
