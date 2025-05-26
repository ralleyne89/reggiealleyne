import React from "react";
import { motion } from "framer-motion";

export interface ResearchItem {
  text: string;
}

export interface ResearchSection {
  title: string;
  description?: string;
  items: ResearchItem[];
}

export interface KeyFinding {
  title: string;
  description: string;
}

export interface StakeholderGoal {
  text: string;
}

export interface ResearchDiscoveryProps {
  title?: string;
  introduction: string;
  researchSections: ResearchSection[];
  keyFindings: KeyFinding[];
  stakeholderGoals?: StakeholderGoal[];
  stakeholderGoalsTitle?: string;
}

const ResearchDiscovery: React.FC<ResearchDiscoveryProps> = ({
  title = "Research & Discovery",
  introduction,
  researchSections,
  keyFindings,
  stakeholderGoals,
  stakeholderGoalsTitle = "Internal Stakeholder Goals",
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

          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Research Sections */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
            Research Methods
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchSections.map((section, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h4>
                  {section.description && (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.description}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
            Key Findings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFindings.map((finding, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {finding.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {finding.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stakeholder Goals */}
        {stakeholderGoals && stakeholderGoals.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              {stakeholderGoalsTitle}
            </h3>

            <motion.div
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stakeholderGoals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ResearchDiscovery;
