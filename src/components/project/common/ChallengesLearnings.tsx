import React from "react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface Challenge {
  title: string;
  description: string;
}

export interface Learning {
  title: string;
  description: string;
}

export interface NextStep {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

export interface ChallengesLearningsProps {
  title: string;
  challenges: Challenge[];
  learnings: Learning[];
  nextSteps: NextStep[];
}

const ChallengesLearnings = ({
  title,
  challenges,
  learnings,
  nextSteps,
}: ChallengesLearningsProps) => {
  return (
    <EditorialSection
      eyebrow="Reflection"
      title={title}
      className="border-b border-gray-200"
      tone="soft"
    >
      <ReflectionGroup title="Challenges" items={challenges} />
      <ReflectionGroup title="Learnings" items={learnings} className="mt-10" />

      {nextSteps.length > 0 ? (
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Next steps
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step) => {
              const IconComponent = step.icon;

              return (
                <article
                  key={step.title}
                  className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-gray-950">{step.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

interface ReflectionGroupProps {
  title: string;
  items: Array<Challenge | Learning>;
  className?: string;
}

const ReflectionGroup = ({ title, items, className }: ReflectionGroupProps) => {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      <h3 className="mb-5 text-xl font-semibold text-gray-950">{title}</h3>
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h4 className="font-semibold text-gray-950">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ChallengesLearnings;
