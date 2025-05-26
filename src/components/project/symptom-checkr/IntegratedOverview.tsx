import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { symptomCheckrOverviewData } from "@/projects/symptom-checkr/data/symptomCheckrData";

const IntegratedOverview = () => {
  const { title, description, projectDetails, toolDetails } =
    symptomCheckrOverviewData;

  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Description */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
            {title}
          </h2>

          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed max-w-4xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              Project Info
            </h3>

            <div className="space-y-6">
              {projectDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="text-gray-900 text-lg">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools & Platform */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 pb-3 border-b border-gray-200">
              Tools & Tech
            </h3>

            <div className="space-y-6">
              {toolDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="text-gray-900 text-lg">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="#final-design"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Final Design
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntegratedOverview;
