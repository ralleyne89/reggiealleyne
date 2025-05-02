import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const UserPersona = () => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">User Persona</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src="/lovable-uploads/4086d5d5-7778-4d3d-bf84-232e19d977f2.png"
                alt="Sarah Mitchell Persona"
                className="rounded-lg w-full"
              />
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-2">
                Sarah Mitchell
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Age</p>
                  <p className="text-white">38</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Occupation</p>
                  <p className="text-white">
                    Working Parent, Marketing Manager
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Tech Comfort</p>
                  <p className="text-white">Medium-High</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Health Behavior</p>
                  <p className="text-white">
                    Cautious, researches before seeking care
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-primary font-semibold mb-3">Goals</h4>
                  <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Understand symptoms quickly without rushing to urgent
                        care
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Save time and avoid unnecessary appointments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Feel reassured she's making the right call</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-3">
                    Frustrations
                  </h4>
                  <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Medical sites are overwhelming or vague</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Doesn't want to self-diagnose, but needs guidance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Worries about trusting unknown health tools</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-3">Needs</h4>
                  <ul className="space-y-2 text-[rgba(200,200,200,0.9)]">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        A clean, friendly UI that feels trustworthy and
                        private
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Fast results with actionable advice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Transparency about how AI works</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UserPersona;
