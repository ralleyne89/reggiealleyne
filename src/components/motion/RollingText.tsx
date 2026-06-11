import { cn } from "@/lib/utils";

type RollingTextProps = {
  children: string;
  className?: string;
};

/**
 * Link text that rolls up to a duplicate copy on hover (CSS-driven, springy
 * overshoot). Place inside any element with the `rolling-trigger` class —
 * hovering or focusing the trigger rolls the text.
 */
const RollingText = ({ children, className }: RollingTextProps) => (
  <span className={cn("rolling-text", className)}>
    <span className="rolling-text__inner">
      <span className="rolling-text__copy">{children}</span>
      <span className="rolling-text__copy" aria-hidden="true">
        {children}
      </span>
    </span>
  </span>
);

export default RollingText;
