
import React from "react";
import ProjectBasicInfo from "@/components/project/details/ProjectBasicInfo";
import { cllctveOverviewData } from "@/projects/cllctve/data/cllctveData";

const IntegratedOverview = () => {
  const { title, description, projectDetails, toolDetails } = cllctveOverviewData;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Information */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Project Information
            </h2>
            <div className="space-y-6">
              {projectDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{detail.label}</h3>
                      <p className="text-gray-700">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Tools & Technologies
            </h2>
            <div className="space-y-6">
              {toolDetails.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{tool.label}</h3>
                      <p className="text-gray-700">{tool.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedOverview;
