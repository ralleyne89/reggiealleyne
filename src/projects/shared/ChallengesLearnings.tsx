import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, CheckCircle, Target, LucideIcon } from "lucide-react";

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
  title = "Key Insights & Learnings",
  challenges,
  learnings,
  nextSteps,
  challengesTitle = "Insights",
  learningsTitle = "Learnings",
  nextStepsTitle = "Next Steps & Improvements"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {challengesTitle}
              </h3>

              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <h4 className="text-primary font-semibold mb-2">
                      {challenge.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {learningsTitle}
              </h3>

              <div className="space-y-4">
                {learnings.map((learning, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <h4 className="text-primary font-semibold">
                        {learning.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {learning.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              {nextStepsTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ChallengesLearnings;
