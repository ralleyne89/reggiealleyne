import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

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
  title?: string;
  introduction: string;
  keyInsights: KeyInsight[];
  flowTitle?: string;
  flowSteps: FlowStep[];
}

const IdeationStrategy: React.FC<IdeationStrategyProps> = ({
  title = "Ideation & Strategy",
  introduction,
  keyInsights,
  flowTitle = "Interaction Flow",
  flowSteps
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
            {introduction}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-3">
                Key Insights
              </h3>
              <div className="space-y-3">
                {keyInsights.map((insight, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <p className="text-gray-300">
                      <span className="text-primary font-medium">
                        {insight.highlight}
                      </span>{" "}
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {flowTitle}
              </h3>
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="space-y-4">
                  {flowSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                        <span className="text-primary font-bold">{step.number}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {step.title}
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IdeationStrategy;
