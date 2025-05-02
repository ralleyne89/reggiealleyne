import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const ResearchDiscovery = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Research & Discovery
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">
              The research phase began with a comprehensive analysis of how
              users seek care when symptoms arise and a competitive audit of
              existing symptom checker tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  User Research
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Interviewed 8 members (ages 25–60) about how they seek
                      care when symptoms arise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Synthesized data into key personas like "Anxious Googler
                      Anna" and "Busy Parent Ben"
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Reviewed behavioral data on search and care-seeking
                      habits
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Competitive Audit
                </h3>
                <p className="text-gray-300 mb-3">
                  Analyzed tools like Ada, Buoy, Conversa, and K Health. Key
                  findings:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Ada showed the highest accuracy but had a dense UX
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Buoy had a friendly tone but felt impersonal after the
                      first interaction
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Conversa had strong provider integration but lacked
                      visual polish
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Finding 1
                </h3>
                <p className="text-gray-300">
                  Existing tools often provide too much medical jargon without
                  explaining implications clearly.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Finding 2
                </h3>
                <p className="text-gray-300">
                  Users want transparency about how symptom analysis works to
                  build trust in the results.
                </p>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Finding 3
                </h3>
                <p className="text-gray-300">
                  Most competitors lack visual input options, limiting
                  accessibility for certain symptoms.
                </p>
              </div>
            </div>

            <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5 mt-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Internal Stakeholder Goals
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Encourage early engagement with health resources
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Reduce ER visits and medical spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Integrate with existing care resources and analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResearchDiscovery;
