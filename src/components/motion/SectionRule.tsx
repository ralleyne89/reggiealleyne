import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DUR, EASE } from "@/lib/motion";

type SectionRuleProps = {
  /** Section numeral, e.g. "01". */
  index: string;
  label: string;
  className?: string;
};

/**
 * Editorial section divider: mono numeral + eyebrow label + expanding rule.
 */
const SectionRule = ({ index, label, className }: SectionRuleProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("flex items-baseline gap-4", className)}>
      <span className="font-mono text-sm font-medium tracking-[0.18em] text-primary">
        {index}
      </span>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-text-muted">
        {label}
      </span>
      <motion.span
        aria-hidden="true"
        className="h-px flex-1 origin-left self-center bg-border"
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: DUR.slow, ease: EASE.out }}
      />
    </div>
  );
};

export default SectionRule;
