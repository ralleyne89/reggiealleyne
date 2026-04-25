import React from "react";
import { EditorialSection } from "@/components/project/EditorialProjectLayout";

export interface Insight {
  title: string;
  description: string;
}

export interface ReflectionProps {
  title: string;
  content: string;
  insights: Insight[];
}

const Reflection = ({ title, content, insights }: ReflectionProps) => {
  return (
    <EditorialSection
      eyebrow="Reflection"
      title={title}
      description={content}
      className="border-b border-gray-200"
    >
      {insights.length > 0 ? (
        <div>
          <h3 className="mb-5 text-xl font-semibold text-gray-950">
            Professional growth
          </h3>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {insights.map((insight) => (
              <article
                key={insight.title}
                className="min-w-0 rounded-lg border border-primary/20 bg-primary/5 p-5"
              >
                <h4 className="font-semibold text-gray-950">{insight.title}</h4>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {insight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </EditorialSection>
  );
};

export default Reflection;
