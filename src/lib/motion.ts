/**
 * Motion design tokens — single source of truth for animation timing.
 *
 * Personality rule: reveals use fast confident deceleration (EASE.out /
 * EASE.gsapOut); interactive feedback uses springy overshoot (EASE.overshoot,
 * EASE.gsapBack, SPRING.bouncy) so chips, badges, buttons, and counters land
 * with a wink. Mirrored as CSS vars in index.css (:root --dur-*, --ease-*).
 */

export const EASE = {
  /** Standard deceleration for reveals and transitions (Framer cubic-bezier). */
  out: [0.16, 1, 0.3, 1] as const,
  /** Springy CSS back-out for playful interactive feedback. */
  overshoot: [0.34, 1.56, 0.64, 1] as const,
  /** Symmetric ease for wipes and position swaps. */
  inOut: [0.83, 0, 0.17, 1] as const,
  /** GSAP string eases. */
  gsapOut: "expo.out",
  gsapInOut: "power3.inOut",
  gsapBack: "back.out(1.7)",
  gsapElastic: "elastic.out(1, 0.5)",
} as const;

export const DUR = {
  fast: 0.2,
  base: 0.45,
  slow: 0.8,
  page: 0.6,
  reveal: 0.9,
} as const;

export const STAGGER = {
  chars: 0.018,
  tight: 0.06,
  base: 0.08,
  loose: 0.12,
} as const;

export const SPRING = {
  /** Snappy cursor follow (from SiteCursor). */
  cursor: { stiffness: 620, damping: 32, mass: 0.5 },
  /** Nav pill label expansion (from Navbar). */
  nav: { stiffness: 260, damping: 31, mass: 0.78 },
  /** Playful hover pops — visible bounce. */
  bouncy: { stiffness: 320, damping: 18, mass: 0.9 },
} as const;

export const SCRUB = {
  tight: 0.7,
  base: 1.2,
} as const;
