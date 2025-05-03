import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LucideIcon } from "lucide-react";

export interface MetricItem {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface OutcomesImpactProps {
  title?: string;
  metrics: MetricItem[];
}

const OutcomesImpact: React.FC<OutcomesImpactProps> = ({
  title = "Outcomes & Impact",
  metrics
}) => {
  // Split metrics into two columns
  const halfLength = Math.ceil(metrics.length / 2);
  const leftColumnMetrics = metrics.slice(0, halfLength);
  const rightColumnMetrics = metrics.slice(halfLength);

  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <BarChart className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {leftColumnMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">
                        {metric.title}
                      </h4>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-primary">
                        {metric.value}
                      </span>
                      <p className="text-gray-300 text-sm ml-3">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              {rightColumnMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-white font-medium">
                        {metric.title}
                      </h4>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-primary">
                        {metric.value}
                      </span>
                      <p className="text-gray-300 text-sm ml-3">
                        {metric.description}
                      </p>
                    </div>
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

export default OutcomesImpact;
