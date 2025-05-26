import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

// Define types for the project data
export interface ProjectDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ToolDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProjectOverviewProps {
  title?: string;
  description: string[];
  projectDetails: ProjectDetail[];
  toolDetails: ToolDetail[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  title = "Project Overview",
  description,
  projectDetails,
  toolDetails,
}) => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
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
          {/* Project Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Project Details
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Tools & Platform
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectOverview;
