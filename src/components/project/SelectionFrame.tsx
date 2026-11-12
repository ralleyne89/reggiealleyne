import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SelectionFrameProps = {
  /** Layer name shown on the frame tag, like a selected frame in a design file. */
  label?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * The site's recurring object: a design-tool selection frame with a layer tag
 * and four handles. It only ever wraps real product screens.
 */
const SelectionFrame = ({
  label,
  children,
  className,
  tone = "light",
}: SelectionFrameProps) => (
  <div className={cn("sel-frame", tone === "dark" && "sel-frame--dark", className)}>
    {label ? (
      <span className="sel-frame__tag" aria-hidden="true">
        {label}
      </span>
    ) : null}
    {children}
    <span className="sel-frame__handle sel-frame__handle--tl" aria-hidden="true" />
    <span className="sel-frame__handle sel-frame__handle--tr" aria-hidden="true" />
    <span className="sel-frame__handle sel-frame__handle--bl" aria-hidden="true" />
    <span className="sel-frame__handle sel-frame__handle--br" aria-hidden="true" />
  </div>
);

export default SelectionFrame;
