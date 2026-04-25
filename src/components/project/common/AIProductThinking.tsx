import React from "react";
import { Brain, Database, TrendingUp } from "lucide-react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface AIProductThinkingProps {
  title?: string;
  challenge: string;
  dataStrategy: string;
  successMetric: string;
}

const AIProductThinking: React.FC<AIProductThinkingProps> = ({
  title = "The AI challenge",
  challenge,
  dataStrategy,
  successMetric,
}) => {
  const items = [
    { label: "Challenge", value: challenge, icon: Brain },
    { label: "Data strategy", value: dataStrategy, icon: Database },
    { label: "Success signal", value: successMetric, icon: TrendingUp },
  ];

  return (
    <EditorialSection
      eyebrow="Product thinking"
      title={title}
      className="border-b border-gray-200"
      tone="soft"
    >
      <div className="grid min-w-0 gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="min-w-0 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {item.value}
              </p>
            </article>
          );
        })}
      </div>
    </EditorialSection>
  );
};

export default AIProductThinking;
