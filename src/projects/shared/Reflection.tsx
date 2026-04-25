
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export interface ReflectionProps {
  title?: string;
  description: string | string[];
  keyTakeaways: string[];
  futureConsiderations: string[];
}

const Reflection: React.FC<ReflectionProps> = ({
  title = "Reflection",
  description,
  keyTakeaways,
  futureConsiderations
}) => {
  const descriptionText = Array.isArray(description) ? description.join(' ') : description;

  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-8">
            {descriptionText}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Takeaways</h3>
              <div className="space-y-3">
                {keyTakeaways && keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Future Considerations</h3>
              <div className="space-y-3">
                {futureConsiderations && futureConsiderations.map((consideration, index) => (
                  <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                    <p className="text-gray-300 text-sm">{consideration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Reflection;
