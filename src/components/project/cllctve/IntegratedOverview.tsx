
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cllctveOverviewData } from "@/projects/cllctve/data/cllctveData";

const IntegratedOverview = () => {
  const { title, description, projectDetails, toolDetails } =
    cllctveOverviewData;

  return (
    <motion.section
      className="mb-14 sm:mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Main Description */}
        <div className="mb-12 min-w-0 sm:mb-16">
          <h2 className="mb-6 break-words font-heading text-3xl font-bold text-gray-900 [text-wrap:balance] md:text-4xl lg:mb-8">
            {title}
          </h2>

          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-4xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Project Info */}
          <motion.div
            className="min-w-0 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 break-words border-b border-gray-200 pb-3 text-2xl font-semibold text-gray-900 sm:mb-8">
              Project Info
            </h3>

            <div className="space-y-6">
              {projectDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex min-w-0 items-start gap-4">
                    <div className="mt-1 shrink-0 rounded-lg bg-primary/10 p-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="break-words text-base text-gray-900 sm:text-lg">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools & Platform */}
          <motion.div
            className="min-w-0 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 break-words border-b border-gray-200 pb-3 text-2xl font-semibold text-gray-900 sm:mb-8">
              Tools & Tech
            </h3>

            <div className="space-y-6">
              {toolDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex min-w-0 items-start gap-4">
                    <div className="mt-1 shrink-0 rounded-lg bg-primary/10 p-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="break-words text-base text-gray-900 sm:text-lg">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="#final-design"
                  className="inline-flex min-h-11 items-center gap-2 text-primary transition-colors hover:text-primary-light"
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
