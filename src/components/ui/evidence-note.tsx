import { FileCheck2 } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EvidenceNoteProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

const EvidenceNote = ({
  children,
  className,
  label = "Evidence",
}: EvidenceNoteProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-sm leading-6 text-slate-600 shadow-sm shadow-slate-200/60",
        className,
      )}
    >
      <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-slate-700">
        <FileCheck2 className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default EvidenceNote;
