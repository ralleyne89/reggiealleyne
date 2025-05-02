import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, CheckCircle, Briefcase } from "lucide-react";

const OutcomesImpact = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <BarChart className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Outcomes & Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    Telehealth Utilization
                  </h4>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary">
                    +42%
                  </span>
                  <p className="text-gray-300 text-sm ml-3">
                    increase in telehealth utilization among pilot group
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    ER Visit Reduction
                  </h4>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary">
                    -16%
                  </span>
                  <p className="text-gray-300 text-sm ml-3">
                    ER visits for minor symptoms in test region
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">
                    User Satisfaction
                  </h4>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary">94%</span>
                  <p className="text-gray-300 text-sm ml-3">
                    user satisfaction rate from in-app surveys
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-white font-medium">Business Impact</h4>
                </div>
                <p className="text-gray-300">
                  New contracts secured with two national employer groups
                  based on digital capabilities
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default OutcomesImpact;
