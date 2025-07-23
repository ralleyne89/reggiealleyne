import React from "react";
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
  icon: React.ComponentType<{
    className?: string;
  }>;
}
export interface ChallengesLearningsProps {
  title: string;
  challenges: Challenge[];
  learnings: Learning[];
  nextSteps: NextStep[];
}
const ChallengesLearnings = ({
  title,
  challenges,
  learnings,
  nextSteps
}: ChallengesLearningsProps) => {
  return <section className="mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">{challenge.title}</h4>
                <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
              </div>)}
          </div>
        </div>

        {/* Learnings */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Learnings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learnings.map((learning, index) => <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-3">{learning.title}</h4>
                <p className="text-gray-700 leading-relaxed">{learning.description}</p>
              </div>)}
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Next Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((step, index) => {
            const IconComponent = step.icon;
            return <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default ChallengesLearnings;