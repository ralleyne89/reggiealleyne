import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, CheckCircle, Target } from "lucide-react";

const ChallengesLearnings = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Challenges & Learnings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Challenges
              </h3>

              <div className="space-y-4">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h4 className="text-primary font-semibold mb-2">
                    Building User Trust
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Creating a health tool that users would trust with
                    sensitive information required extensive research on trust
                    indicators and transparent design.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h4 className="text-primary font-semibold mb-2">
                    Balancing Detail vs. Clarity
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Finding the right level of medical detail without
                    overwhelming users or oversimplifying conditions was a
                    constant challenge.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <h4 className="text-primary font-semibold mb-2">
                    Avoiding Unused Features
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Initial testing revealed that several planned features
                    were rarely used, requiring a streamlined redesign to
                    focus on core functionality.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Learnings
              </h3>

              <div className="space-y-4">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <h4 className="text-primary font-semibold">
                      Transparency Builds Trust
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Users were far more willing to trust the system when they
                    understood how the AI worked and its limitations.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <h4 className="text-primary font-semibold">
                      Visual Communication is Key
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Visual hierarchy and clear iconography significantly
                    improved user comprehension of medical information.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <h4 className="text-primary font-semibold">
                      Ethical Design is Non-Negotiable
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    In health tech, ethical considerations must be built into
                    every aspect of the design process, not added as an
                    afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Next Steps & Improvements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Telehealth Integration
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Connect users with healthcare providers for follow-up when
                  symptoms warrant medical attention.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Symptom Tracking</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Allow users to monitor symptoms over time to identify
                  patterns and changes for more accurate assessments.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Expanded AI Training
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Further train the AI model on diverse datasets to improve
                  accuracy across different demographics and conditions.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ChallengesLearnings;
