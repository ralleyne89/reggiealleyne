import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow, ArrowRight, LucideIcon } from "lucide-react";

export interface JourneyStage {
  name: string;
}

export interface UserAction {
  icon: LucideIcon;
  description: string;
}

export interface EmotionalState {
  icon: LucideIcon;
  iconColor: string;
  description: string;
}

export interface PainPoint {
  points: string[];
}

export interface DesignOpportunity {
  points: string[];
}

export interface UserJourneyMapProps {
  title?: string;
  introduction: string;
  journeyTitle: string;
  journeyDescription: string;
  stages: JourneyStage[];
  userActions: UserAction[];
  emotionalStates: EmotionalState[];
  painPoints: PainPoint[];
  designOpportunities: DesignOpportunity[];
}

const UserJourneyMap: React.FC<UserJourneyMapProps> = ({
  title = "User Journey Map",
  introduction,
  journeyTitle,
  journeyDescription,
  stages,
  userActions,
  emotionalStates,
  painPoints,
  designOpportunities
}) => {
  return (
    <section className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Workflow className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          <p className="text-[rgba(200,200,200,0.9)] mb-6 leading-relaxed">
            {introduction}
          </p>

          <div className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-6">
            <div className="w-full">
              {/* Journey Map Header */}
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">{journeyTitle}</h3>
                <p className="text-gray-300 text-center max-w-3xl mb-6">
                  {journeyDescription}
                </p>
              </div>

              {/* Journey Map Visual */}
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  {/* Stages Header */}
                  <div className="grid grid-cols-5 gap-4 mb-2">
                    {stages.map((stage, index) => (
                      <div key={index} className="bg-primary/10 rounded-lg p-3 text-center">
                        <h4 className="text-primary font-semibold">{stage.name}</h4>
                      </div>
                    ))}
                  </div>

                  {/* User Actions */}
                  <div className="grid grid-cols-5 gap-4 mb-4">
                    {userActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <div key={index} className="bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                          <div className="flex flex-col items-center text-center">
                            <Icon className="w-5 h-5 text-white mb-2" />
                            <p className="text-gray-300 text-sm">{action.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Connecting Arrows */}
                  <div className="grid grid-cols-5 gap-4 mb-4 px-12">
                    {[0, 1, 2, 3].map((_, index) => (
                      <div key={index} className="flex justify-center items-center">
                        <div className="w-full h-px bg-gray-600"></div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                    <div></div>
                  </div>

                  {/* Emotional State */}
                  <div className="grid grid-cols-5 gap-4 mb-4">
                    {emotionalStates.map((state, index) => {
                      const Icon = state.icon;
                      return (
                        <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                          <div className="flex flex-col items-center text-center">
                            <Icon className={`w-5 h-5 ${state.iconColor} mb-2`} />
                            <p className="text-gray-300 text-sm">{state.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pain Points */}
                  <div className="grid grid-cols-5 gap-4 mb-4">
                    {painPoints.map((painPoint, index) => (
                      <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                        <div className="flex flex-col items-start">
                          <h5 className="text-red-400 text-sm font-medium mb-2">Pain Points</h5>
                          <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                            {painPoint.points.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Design Opportunities */}
                  <div className="grid grid-cols-5 gap-4">
                    {designOpportunities.map((opportunity, index) => (
                      <div key={index} className="bg-[rgba(25,25,25,0.3)] border border-[rgba(255,255,255,0.06)] rounded-lg p-3">
                        <div className="flex flex-col items-start">
                          <h5 className="text-primary text-sm font-medium mb-2">Design Opportunities</h5>
                          <ul className="list-disc pl-4 text-gray-300 text-xs space-y-1">
                            {opportunity.points.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
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

export default UserJourneyMap;
