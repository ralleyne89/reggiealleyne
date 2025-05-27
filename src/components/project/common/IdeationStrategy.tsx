
import React from "react";

interface KeyInsight {
  highlight: string;
  description: string;
}

interface FlowStep {
  number: number;
  title: string;
  description: string;
}

interface IdeationStrategyProps {
  title: string;
  introduction: string;
  keyInsights: KeyInsight[];
  flowSteps: FlowStep[];
}

const IdeationStrategy = ({ title, introduction, keyInsights, flowSteps }: IdeationStrategyProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Strategic Insights
          </h3>
          <div className="space-y-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{insight.highlight}</h4>
                    <p className="text-gray-700 leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Steps */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            User Flow Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeationStrategy;
