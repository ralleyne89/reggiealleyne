import React from "react";
export interface Challenge {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}
export interface DesignGoal {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}
export interface ProblemSpaceProps {
  title: string;
  introduction: string;
  challenges: Challenge[];
  designGoals: DesignGoal[];
}
const ProblemSpace = ({
  title,
  introduction,
  challenges,
  designGoals,
}: ProblemSpaceProps) => {
  return (
    <section className="py-8 bg-gray-50 rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </div>

        {/* Side-by-side layout for Challenges and Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
              Key Challenges
            </h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {challenge.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions & Success Criteria */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
              Solutions & Success Criteria
            </h3>
            <div className="space-y-6">
              {designGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {goal.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
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
export default ProblemSpace;
