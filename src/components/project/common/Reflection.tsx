
import React from "react";

interface Insight {
  title: string;
  description: string;
}

interface ReflectionProps {
  title: string;
  content: string;
  insights: Insight[];
}

const Reflection = ({ title, content, insights }: ReflectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {content}
          </p>
        </div>

        {/* Professional Growth Insights */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Professional Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-semibold text-gray-900 mb-3">{insight.title}</h4>
                <p className="text-gray-700 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
