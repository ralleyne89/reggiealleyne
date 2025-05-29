
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Trophy } from "lucide-react";

export interface MetricItem {
  title: string;
  value: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface OutcomesImpactProps {
  title?: string;
  description: string | string[];
  metrics: MetricItem[];
  achievements: Achievement[];
}

const OutcomesImpact: React.FC<OutcomesImpactProps> = ({
  title = "Results & Impact",
  description,
  metrics,
  achievements
}) => {
  const descriptionText = Array.isArray(description) ? description.join(' ') : description;

  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-8">
            {descriptionText}
          </p>

          {metrics && metrics.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                    <h4 className="text-white font-medium mb-2">{metric.title}</h4>
                    <p className="text-gray-300 text-sm">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {achievements && achievements.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Trophy className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">{achievement.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default OutcomesImpact;
