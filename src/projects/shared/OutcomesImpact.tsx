import React from "react";
import { Trophy } from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface MetricItem {
  title: string;
  value: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface OutcomesImpactProps {
  title?: string;
  description: string | string[];
  metrics: MetricItem[];
  achievements: Achievement[];
}

const OutcomesImpact: React.FC<OutcomesImpactProps> = ({
  title = "Results and impact",
  description,
  metrics,
  achievements,
}) => {
  const descriptionText = Array.isArray(description)
    ? description.join(" ")
    : description;

  return (
    <EditorialSection
      eyebrow="Impact"
      title={title}
      description={descriptionText}
      className="border-b border-gray-200"
    >
      {metrics && metrics.length > 0 ? (
        <div className="mb-10">
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Key metrics
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={`${metric.title}-${metric.value}`}
                className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 text-left shadow-sm"
              >
                <p className="font-display text-3xl leading-tight text-primary">
                  {metric.value}
                </p>
                <h4 className="mt-3 font-semibold text-gray-950">
                  {metric.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {achievements && achievements.length > 0 ? (
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Key achievements
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Trophy className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-gray-950">
                  {achievement.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {achievement.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default OutcomesImpact;
