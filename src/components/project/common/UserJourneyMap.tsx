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
  designOpportunities,
}) => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {title}
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mb-8">
            {introduction}
          </p>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {journeyTitle}
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {journeyDescription}
            </p>
          </div>
        </div>

        {/* Journey Map Visual */}
        <motion.div
          className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="min-w-[900px] space-y-8">
            {/* Stages Header */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-primary font-semibold text-lg">
                    {stage.name}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* User Actions */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {userActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Icon className="w-6 h-6 text-white mb-3" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connecting Arrows */}
            <div className="grid grid-cols-5 gap-4 mb-6 px-12">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="w-full h-px bg-gray-600"></div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
              <div></div>
            </div>

            {/* Emotional State */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {emotionalStates.map((state, index) => {
                const Icon = state.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/30 border border-gray-700 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Icon className={`w-6 h-6 ${state.iconColor} mb-3`} />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {state.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pain Points */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {painPoints.map((painPoint, index) => (
                <motion.div
                  key={index}
                  className="bg-red-500/5 border border-red-500/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h5 className="text-red-400 text-sm font-semibold mb-3">
                    Pain Points
                  </h5>
                  <ul className="space-y-2">
                    {painPoint.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Design Opportunities */}
            <div className="grid grid-cols-5 gap-4">
              {designOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="bg-primary/5 border border-primary/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h5 className="text-primary text-sm font-semibold mb-3">
                    Design Opportunities
                  </h5>
                  <ul className="space-y-2">
                    {opportunity.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UserJourneyMap;
