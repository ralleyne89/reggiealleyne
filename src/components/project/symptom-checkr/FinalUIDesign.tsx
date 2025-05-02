import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Image, BarChart, Lock } from "lucide-react";

const FinalUIDesign = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Final UI Design</h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
            The final UI design emphasizes clarity, trust, and accessibility.
            A calming color palette with clear visual hierarchies guides users
            through the symptom checking process while minimizing anxiety.
          </p>

          <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              Design Execution Highlights
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Soft color palette for approachability and reduced clinical
                  feel
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Rounded UI elements to reduce clinical stiffness and create
                  a more friendly interface
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Micro-animations signal thinking, responding, and guidance
                  for user state
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Design system aligned with WCAG 2.1 AA accessibility
                  standards
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Text & Image Input
                </h3>
                <p className="text-gray-300 text-sm">
                  Users can choose between text description or image upload
                  for symptoms, increasing accessibility and accuracy.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Dual Input Methods
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Privacy First
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Accessibility
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Likelihood-Based Results
                </h3>
                <p className="text-gray-300 text-sm">
                  Results are clearly organized by likelihood, with actionable
                  next steps for each potential cause.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Clear Hierarchy
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    Actionable Information
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    No Alarmism
                  </span>
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-700 mb-3">
              <img
                src="/lovable-uploads/8faa2a57-61a6-4ad4-a3c4-77c15b8982c8.png"
                alt="SymptomCheckr Final UI"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-400 text-sm text-center">
              Final UI design showcasing the symptom input and results screens
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Key UI Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Image className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Dual Input Options
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Text description or image upload for different types of
                  symptoms and user preferences.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Likelihood Indicators
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Visual scales showing probability of each potential cause
                  based on symptom analysis.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Privacy Controls</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Clear consent flows and options to delete data after each
                  session.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FinalUIDesign;
