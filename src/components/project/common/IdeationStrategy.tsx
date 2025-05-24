import React from "react";
import { motion } from "framer-motion";

export interface KeyInsight {
  highlight: string;
  description: string;
}

export interface FlowStep {
  number: number;
  title: string;
  description: string;
}

export interface IdeationStrategyProps {
  title?: string;
  introduction: string;
  keyInsights: KeyInsight[];
  flowTitle?: string;
  flowSteps: FlowStep[];
}

const IdeationStrategy: React.FC<IdeationStrategyProps> = ({
  title = "Ideation & Strategy",
  introduction,
  keyInsights,
  flowTitle = "Interaction Flow",
  flowSteps,
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Insights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
              Key Insights
            </h3>

            <div className="space-y-6">
              {keyInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-primary font-semibold">
                      {insight.highlight}
                    </span>{" "}
                    {insight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interaction Flow */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 pb-3 border-b border-gray-800">
              {flowTitle}
            </h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="space-y-6">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg mt-1 flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IdeationStrategy;
