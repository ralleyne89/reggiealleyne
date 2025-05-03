import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, LucideIcon } from "lucide-react";

export interface Challenge {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DesignGoal {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProblemSpaceProps {
  title?: string;
  introduction: string;
  challenges: Challenge[];
  designGoals: DesignGoal[];
  challengesTitle?: string;
  designGoalsTitle?: string;
}

const ProblemSpace: React.FC<ProblemSpaceProps> = ({
  title = "Problem Space",
  introduction,
  challenges,
  designGoals,
  challengesTitle = "Challenges Identified",
  designGoalsTitle = "Design Goals"
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
            {introduction}
          </p>
          
          <h3 className="text-xl font-semibold text-white mb-4">{challengesTitle}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">{challenge.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">{designGoalsTitle}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">{goal.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {goal.description}
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

export default ProblemSpace;
