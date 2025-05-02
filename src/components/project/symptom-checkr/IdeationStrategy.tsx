import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const IdeationStrategy = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Ideation & Strategy
            </h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] leading-relaxed mb-6">
            We used a whiteboarding session to map the end-to-end care journey
            and develop the strategy for the symptom checker experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-3">
                Key Insights
              </h3>
              <div className="space-y-3">
                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <p className="text-gray-300">
                    <span className="text-primary font-medium">
                      Users must feel guided and in control.
                    </span>{" "}
                    The interface should provide clear direction while
                    allowing users to feel they're making informed decisions
                    about their health.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <p className="text-gray-300">
                    <span className="text-primary font-medium">
                      Triaging must feel human, not like a form.
                    </span>{" "}
                    The conversational interface should adapt to user
                    responses and feel like a helpful consultation rather than
                    a clinical questionnaire.
                  </p>
                </div>

                <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                  <p className="text-gray-300">
                    <span className="text-primary font-medium">
                      Success hinges on cross-platform consistency.
                    </span>{" "}
                    The experience must be equally effective on mobile and
                    desktop to meet users where they are when symptoms arise.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Interaction Flow
              </h3>
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Symptom Onset → Opens app or mobile web
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        User experiences symptoms and accesses the tool
                        through their health plan portal or direct link
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Conversational Assessment → AI asks adaptive questions
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        The system guides users through relevant questions
                        based on their initial symptom description
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Triaged Recommendation → Actionable next steps
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        User receives personalized care options (self-care,
                        telehealth, in-network clinic)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5 shrink-0">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Optional Follow-up → Share report with PCP
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        Users can save or share their symptom report with
                        healthcare providers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IdeationStrategy;
