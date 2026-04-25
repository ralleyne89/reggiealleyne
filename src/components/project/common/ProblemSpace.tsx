import React from "react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface Challenge {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

export interface DesignGoal {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

export interface ProblemSpaceProps {
  title: string;
  introduction: string;
  challenges: Challenge[];
  designGoals: DesignGoal[];
}

const ProblemSpace = ({
  title,
  introduction,
  challenges,
  designGoals,
}: ProblemSpaceProps) => {
  return (
    <EditorialSection
      eyebrow="Problem space"
      title={title}
      description={introduction}
      className="border-b border-gray-200"
      tone="soft"
    >
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2">
        <ProblemColumn title="What got in the way" items={challenges} />
        <ProblemColumn title="What the design needed to do" items={designGoals} />
      </div>
    </EditorialSection>
  );
};

interface ProblemColumnProps {
  title: string;
  items: Array<Challenge | DesignGoal>;
}

const ProblemColumn = ({ title, items }: ProblemColumnProps) => (
  <div className="min-w-0">
    <h3 className="mb-5 text-xl font-semibold text-gray-950">{title}</h3>
    <div className="grid min-w-0 gap-4">
      {items.map((item) => {
        const IconComponent = item.icon;

        return (
          <article
            key={item.title}
            className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <IconComponent className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h4 className="break-words text-base font-semibold text-gray-950">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </div>
);

export default ProblemSpace;
