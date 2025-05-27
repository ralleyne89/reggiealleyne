
import React from "react";

interface ResearchSection {
  title: string;
  description: string;
  items: { text: string }[];
}

interface KeyFinding {
  title: string;
  description: string;
}

interface ResearchDiscoveryProps {
  title: string;
  introduction: string;
  researchSections: ResearchSection[];
  keyFindings: KeyFinding[];
}

const ResearchDiscovery = ({ title, introduction, researchSections, keyFindings }: ResearchDiscoveryProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Research Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchSections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Findings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFindings.map((finding, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3">{finding.title}</h4>
                <p className="text-gray-700 leading-relaxed">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchDiscovery;
