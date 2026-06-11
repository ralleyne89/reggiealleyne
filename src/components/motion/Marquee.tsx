import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type MarqueeProps = {
  children: ReactNode;
  /** Base speed in px/s. */
  speed?: number;
  direction?: 1 | -1;
  className?: string;
  /** Class applied to each repeated group. */
  groupClassName?: string;
  "aria-label"?: string;
};

const GROUP_COUNT = 4;

/**
 * Infinite horizontal marquee. Scroll velocity nudges the playback speed so
 * the strip feels alive; it pauses entirely while offscreen. Reduced motion
 * renders a single static row.
 */
const Marquee = ({
  children,
  speed = 80,
  direction = -1,
  className,
  groupClassName,
  "aria-label": ariaLabel,
}: MarqueeProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const groupWidth = track.scrollWidth / GROUP_COUNT;
      if (!groupWidth) {
        return;
      }

      const duration = groupWidth / speed;
      const tween = gsap.to(track, {
        xPercent: (100 / GROUP_COUNT) * direction,
        duration,
        ease: "none",
        repeat: -1,
      });

      // Scroll velocity leans into the strip; settle back to base speed.
      const proxy = { timeScale: 1 };
      ScrollTrigger.create({
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          if (self.isActive) {
            tween.play();
          } else {
            tween.pause();
          }
        },
        onUpdate: (self) => {
          const velocityBoost = gsap.utils.clamp(
            -3,
            3,
            self.getVelocity() / 700,
          );
          gsap.to(proxy, {
            timeScale: 1 + Math.abs(velocityBoost),
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
            onUpdate: () => tween.timeScale(proxy.timeScale),
            onComplete: () => {
              gsap.to(proxy, {
                timeScale: 1,
                duration: 1.2,
                ease: "power2.out",
                onUpdate: () => tween.timeScale(proxy.timeScale),
              });
            },
          });
        },
      });
    }, track);

    return () => ctx.revert();
  }, [direction, shouldReduceMotion, speed]);

  if (shouldReduceMotion) {
    return (
      <div
        className={cn("overflow-hidden whitespace-nowrap", className)}
        aria-label={ariaLabel}
      >
        <div className={cn("inline-flex items-center", groupClassName)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("overflow-hidden whitespace-nowrap", className)}
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="flex w-max items-center will-change-transform">
        {Array.from({ length: GROUP_COUNT }, (_, index) => (
          <div
            key={index}
            aria-hidden={index > 0}
            className={cn("inline-flex shrink-0 items-center", groupClassName)}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
