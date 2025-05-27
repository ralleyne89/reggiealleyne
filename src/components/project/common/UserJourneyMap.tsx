
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
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
  return <motion.section className="py-16 bg-white" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} viewport={{
    once: true,
    amount: 0.3
  }}>
      <div className="w-full px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
            {title}
          </h2>

          <p className="text-lg leading-relaxed max-w-4xl mb-8 text-gray-700">
            {introduction}
          </p>

          <div className="text-center">
            
            
          </div>
        </div>

        {/* Journey Map Visual */}
        <motion.div className="bg-gray-50 border border-gray-200 rounded-xl p-8 overflow-x-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} viewport={{
        once: true,
        amount: 0.3
      }}>
          <div className="min-w-[900px] space-y-8">
            {/* Stages Header */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {stages.map((stage, index) => <motion.div key={index} className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true,
              amount: 0.3
            }}>
                  <h4 className="text-primary font-semibold text-lg">
                    {stage.name}
                  </h4>
                </motion.div>)}
            </div>

            {/* User Actions */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {userActions.map((action, index) => {
              const Icon = action.icon;
              return <motion.div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true,
                amount: 0.3
              }}>
                    <div className="flex flex-col items-center text-center">
                      <Icon className="w-6 h-6 text-gray-800 mb-3" />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </motion.div>;
            })}
            </div>

            {/* Connecting Arrows */}
            <div className="grid grid-cols-5 gap-4 mb-6 px-12">
              {[0, 1, 2, 3].map((_, index) => <div key={index} className="flex justify-center items-center">
                  <div className="w-full h-px bg-gray-400"></div>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>)}
              <div></div>
            </div>

            {/* Emotional State */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {emotionalStates.map((state, index) => {
              const Icon = state.icon;
              return <motion.div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true,
                amount: 0.3
              }}>
                    <div className="flex flex-col items-center text-center">
                      <Icon className={`w-6 h-6 ${state.iconColor} mb-3`} />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {state.description}
                      </p>
                    </div>
                  </motion.div>;
            })}
            </div>

            {/* Pain Points */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {painPoints.map((painPoint, index) => <motion.div key={index} className="bg-red-50 border border-red-200 rounded-xl p-4" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true,
              amount: 0.3
            }}>
                  <h5 className="text-red-600 text-sm font-semibold mb-3">
                    Pain Points
                  </h5>
                  <ul className="space-y-2">
                    {painPoint.points.map((point, pointIndex) => <li key={pointIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs leading-relaxed">
                          {point}
                        </span>
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>

            {/* Design Opportunities */}
            <div className="grid grid-cols-5 gap-4">
              {designOpportunities.map((opportunity, index) => <motion.div key={index} className="bg-green-50 border border-green-200 rounded-xl p-4" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true,
              amount: 0.3
            }}>
                  <h5 className="text-green-600 text-sm font-semibold mb-3">
                    Design Opportunities
                  </h5>
                  <ul className="space-y-2">
                    {opportunity.points.map((point, pointIndex) => <li key={pointIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs leading-relaxed">
                          {point}
                        </span>
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>;
};
export default UserJourneyMap;
