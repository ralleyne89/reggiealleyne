import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, LucideIcon } from "lucide-react";

export interface ResearchItem {
  text: string;
}

export interface ResearchSection {
  title: string;
  description?: string;
  items: ResearchItem[];
}

export interface KeyFinding {
  title: string;
  description: string;
}

export interface StakeholderGoal {
  text: string;
}

export interface ResearchDiscoveryProps {
  title?: string;
  introduction: string;
  researchSections: ResearchSection[];
  keyFindings: KeyFinding[];
  stakeholderGoals?: StakeholderGoal[];
  stakeholderGoalsTitle?: string;
}

const ResearchDiscovery: React.FC<ResearchDiscoveryProps> = ({
  title = "Research & Discovery",
  introduction,
  researchSections,
  keyFindings,
  stakeholderGoals,
  stakeholderGoalsTitle = "Internal Stakeholder Goals"
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
              {introduction}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {researchSections.map((section, index) => (
                <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="text-gray-300 mb-3">
                      {section.description}
                    </p>
                  )}
                  <ul className="space-y-2 text-gray-300">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {keyFindings.map((finding, index) => (
                <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {finding.title}
                  </h3>
                  <p className="text-gray-300">
                    {finding.description}
                  </p>
                </div>
              ))}
            </div>

            {stakeholderGoals && stakeholderGoals.length > 0 && (
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mt-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {stakeholderGoalsTitle}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {stakeholderGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{goal.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResearchDiscovery;
