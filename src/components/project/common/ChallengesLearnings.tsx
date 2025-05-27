import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, LucideIcon } from "lucide-react";

export interface Challenge {
  title: string;
  description: string;
}

export interface Learning {
  title: string;
  description: string;
}

export interface NextStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChallengesLearningsProps {
  title?: string;
  challenges: Challenge[];
  learnings: Learning[];
  nextSteps: NextStep[];
  challengesTitle?: string;
  learningsTitle?: string;
  nextStepsTitle?: string;
}

const ChallengesLearnings: React.FC<ChallengesLearningsProps> = ({
  title = "Key Insights & Learnings",
  challenges,
  learnings,
  nextSteps,
  challengesTitle = "Insights",
  learningsTitle = "Learnings",
  nextStepsTitle = "Next Steps & Improvements",
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        {/* Challenges and Learnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Challenges/Insights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {challengesTitle}
            </h3>

            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {learningsTitle}
            </h3>

            <div className="space-y-6">
              {learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      {learning.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {learning.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
            {nextStepsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 leading-tight">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ChallengesLearnings;
