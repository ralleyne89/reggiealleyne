
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, LucideIcon } from "lucide-react";

export interface Strategy {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface IdeationStrategyProps {
  title?: string;
  description: string | string[];
  strategies: Strategy[];
}

const IdeationStrategy: React.FC<IdeationStrategyProps> = ({
  title = "Design Strategy",
  description,
  strategies
}) => {
  const descriptionText = Array.isArray(description) ? description.join(' ') : description;

  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          
          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-8">
            {descriptionText}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies && strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-white font-medium">{strategy.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {strategy.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IdeationStrategy;
