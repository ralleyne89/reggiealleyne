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
  return <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        
      </Card>
    </section>;
};
export default OutcomesImpact;