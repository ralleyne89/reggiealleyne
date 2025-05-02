import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const Reflection = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Reflection</h2>
          </div>

          <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
              Symptom Checkr taught me how to design for complexity with
              compassion. It pushed my skillset in systems thinking,
              accessibility, and human-centered AI. I'm proud that we not only
              created a better interface but helped people feel more informed
              and supported in a moment of vulnerability.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[rgba(35,35,35,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <span className="text-primary font-medium block mb-2">
                    Healthcare Design Insight
                  </span>
                  Designing for healthcare means balancing clarity and empathy
                  at every click.
                </p>
              </div>

              <div className="bg-[rgba(35,35,35,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <span className="text-primary font-medium block mb-2">
                    Conversational UI
                  </span>
                  Chat-based UIs must manage tone, not just logic.
                </p>
              </div>

              <div className="bg-[rgba(35,35,35,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <span className="text-primary font-medium block mb-2">
                    Collaboration
                  </span>
                  Cross-functional input (especially from clinical partners)
                  is essential early in the design process.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Reflection;
