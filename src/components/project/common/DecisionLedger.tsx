import {
  ArrowRight,
  CheckCircle2,
  MinusCircle,
  ShieldCheck,
} from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface DecisionLedgerItem {
  decision: string;
  rejected: string;
  evidence: string;
  constraint: string;
  result: string;
}

export interface DecisionLedgerProps {
  title?: string;
  introduction?: string;
  decisions: DecisionLedgerItem[];
}

const DecisionLedger = ({
  title = "Decision ledger",
  introduction,
  decisions,
}: DecisionLedgerProps) => {
  return (
    <EditorialSection
      eyebrow="Decisions"
      title={title}
      description={introduction}
      className="border-b border-gray-200"
      tone="soft"
    >
      <div className="grid min-w-0 gap-4">
        {decisions.map((item) => (
          <article
            key={item.decision}
            className="min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)]">
              <div className="min-w-0 border-b border-gray-200 p-5 lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  Chosen direction
                </div>
                <h3 className="mt-3 break-words text-xl font-semibold leading-7 text-gray-950">
                  {item.decision}
                </h3>
              </div>

              <div className="min-w-0 bg-gray-50 p-5 lg:p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-gray-500">
                  <MinusCircle className="h-4 w-4" />
                  Rejected alternative
                </div>
                <p className="mt-3 break-words text-base font-semibold leading-7 text-gray-500 line-through decoration-gray-300">
                  {item.rejected}
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 border-t border-gray-200 p-5 sm:grid-cols-3 lg:p-6">
              <LedgerDetail
                label="Evidence"
                value={item.evidence}
                icon="evidence"
              />
              <LedgerDetail
                label="Constraint"
                value={item.constraint}
                icon="constraint"
              />
              <LedgerDetail label="Result" value={item.result} icon="result" />
            </div>
          </article>
        ))}
      </div>
    </EditorialSection>
  );
};

interface LedgerDetailProps {
  label: string;
  value: string;
  icon: "evidence" | "constraint" | "result";
}

const LedgerDetail = ({ label, value, icon }: LedgerDetailProps) => {
  const Icon =
    icon === "evidence"
      ? ShieldCheck
      : icon === "constraint"
        ? MinusCircle
        : ArrowRight;

  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-gray-500">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </div>
      <p className="text-sm leading-6 text-gray-700">{value}</p>
    </div>
  );
};

export default DecisionLedger;
