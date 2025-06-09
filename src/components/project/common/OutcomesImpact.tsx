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
  metrics,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        {/* Hard Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card
                key={index}
                className="bg-white border border-gray-200 shadow-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default OutcomesImpact;
