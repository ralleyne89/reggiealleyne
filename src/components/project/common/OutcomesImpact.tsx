import React from "react";
import { LucideIcon } from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface MetricItem {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface OutcomesImpactProps {
  title?: string;
  metrics: MetricItem[];
}

const OutcomesImpact: React.FC<OutcomesImpactProps> = ({
  title = "Outcomes and impact",
  metrics,
}) => {
  return (
    <EditorialSection
      eyebrow="Impact"
      title={title}
      className="border-b border-gray-200"
    >
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;

          return (
            <article
              key={`${metric.title}-${metric.value}`}
              className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <IconComponent className="h-5 w-5" />
              </div>
              <p className="break-words font-display text-3xl leading-tight text-primary">
                {metric.value}
              </p>
              <h3 className="mt-3 text-base font-semibold text-gray-950">
                {metric.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {metric.description}
              </p>
            </article>
          );
        })}
      </div>
    </EditorialSection>
  );
};

export default OutcomesImpact;
