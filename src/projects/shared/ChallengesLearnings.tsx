import React from "react";
import { CheckCircle, LucideIcon } from "lucide-react";
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
  icon: LucideIcon;
}

export interface ChallengesLearningsProps {
  title?: string;
  challenges: Challenge[];
  learnings: Learning[];
  nextSteps: NextStep[];
  challengesTitle?: string;
  learningsTitle?: string;
  nextStepsTitle?: string;
}

const ChallengesLearnings: React.FC<ChallengesLearningsProps> = ({
  title = "Key insights and learnings",
  challenges,
  learnings,
  nextSteps,
  challengesTitle = "Insights",
  learningsTitle = "Learnings",
  nextStepsTitle = "Next steps and improvements",
}) => {
  return (
    <EditorialSection
      eyebrow="Reflection"
      title={title}
      className="border-b border-gray-200"
      tone="soft"
    >
      <div className="grid min-w-0 gap-8 md:grid-cols-2">
        <SharedGroup title={challengesTitle} items={challenges} />
        <SharedGroup title={learningsTitle} items={learnings} showCheck />
      </div>

      {nextSteps.length > 0 ? (
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            {nextStepsTitle}
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {nextSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
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

interface SharedGroupProps {
  title: string;
  items: Array<Challenge | Learning>;
  showCheck?: boolean;
}

const SharedGroup = ({ title, items, showCheck }: SharedGroupProps) => (
  <div className="min-w-0">
    <h3 className="mb-5 text-xl font-semibold text-gray-950">{title}</h3>
    <div className="grid min-w-0 gap-4">
      {items.map((item) => (
        <article
          key={item.title}
          className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="flex min-w-0 items-start gap-3">
            {showCheck ? (
              <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
            ) : null}
            <div className="min-w-0">
              <h4 className="font-semibold text-gray-950">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                {item.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default ChallengesLearnings;
