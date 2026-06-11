import { motion, useReducedMotion } from "framer-motion";
import { DUR, EASE } from "@/lib/motion";

type PullQuoteProps = {
  quote?: string | null;
  attribution?: string | null;
};

/**
 * Oversized editorial pull quote. Currently fed by the case study narrative
 * hook; doubles as the future testimonial slot. Renders nothing when empty.
 */
const PullQuote = ({ quote, attribution }: PullQuoteProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (!quote) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <motion.figure
        className="relative mx-auto max-w-4xl"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: DUR.slow, ease: EASE.out }}
      >
        <span
          aria-hidden="true"
          className="absolute -left-2 -top-10 font-display text-[6rem] leading-none text-primary/15 sm:-left-10"
        >
          “
        </span>
        <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.25] tracking-tight text-text-primary [text-wrap:balance]">
          {quote}
        </blockquote>
        {attribution ? (
          <figcaption className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-text-muted">
            {attribution}
          </figcaption>
        ) : null}
      </motion.figure>
    </section>
  );
};

export default PullQuote;
