import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface Challenge {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DesignGoal {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProblemSpaceProps {
  title?: string;
  introduction: string;
  challenges: Challenge[];
  designGoals: DesignGoal[];
  challengesTitle?: string;
  designGoalsTitle?: string;
}

const ProblemSpace: React.FC<ProblemSpaceProps> = ({
  title = "Problem Space",
  introduction,
  challenges,
  designGoals,
  challengesTitle = "Challenges Identified",
  designGoalsTitle = "Design Goals",
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

          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Challenges Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
            {challengesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-red-500/10 p-3 rounded-lg">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <h4 className="text-white font-semibold text-lg leading-tight">
                        {challenge.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Design Goals Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
            {designGoalsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-white font-semibold text-lg leading-tight">
                        {goal.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProblemSpace;
