import React from "react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface KeyInsight {
  highlight: string;
  description: string;
}

export interface FlowStep {
  number: number;
  title: string;
  description: string;
}

export interface IdeationStrategyProps {
  title: string;
  introduction: string;
  keyInsights: KeyInsight[];
  flowSteps: FlowStep[];
}

const IdeationStrategy = ({
  title,
  introduction,
  keyInsights,
  flowSteps,
}: IdeationStrategyProps) => {
  return (
    <EditorialSection
      eyebrow="Strategy"
      title={title}
      description={introduction}
      className="border-b border-gray-200"
      tone="soft"
    >
      {keyInsights.length > 0 ? (
        <div className="mb-12">
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Strategic insights
          </h3>
          <div className="grid min-w-0 gap-4">
            {keyInsights.map((insight, index) => (
              <article
                key={insight.highlight}
                className="grid min-w-0 gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:grid-cols-[2.5rem_1fr]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-950">
                    {insight.highlight}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {insight.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {flowSteps.length > 0 ? (
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            User flow strategy
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
            {flowSteps.map((step) => (
              <article
                key={`${step.number}-${step.title}`}
                className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-primary">
                  Step {step.number}
                </p>
                <h4 className="mt-2 font-semibold text-gray-950">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default IdeationStrategy;
