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
    <section className="rounded-xl bg-gray-50 py-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 min-w-0 sm:mb-12">
          <h2 className="mb-5 break-words font-heading text-3xl font-bold text-gray-900 [text-wrap:balance] md:text-4xl">
            {title}
          </h2>
          <p className="max-w-4xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-relaxed">
            {introduction}
          </p>
        </div>

        {/* Side-by-side layout for Challenges and Solutions */}
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Challenges */}
          <div className="min-w-0">
            <h3 className="mb-6 break-words font-heading text-2xl font-semibold text-gray-900 sm:mb-8">
              Key Challenges
            </h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div
                    key={index}
                    className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 sm:h-12 sm:w-12">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="mb-2 break-words font-semibold text-gray-900">
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
          <div className="min-w-0">
            <h3 className="mb-6 break-words font-heading text-2xl font-semibold text-gray-900 sm:mb-8">
              Solutions & Success Criteria
            </h3>
            <div className="space-y-6">
              {designGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <div
                    key={index}
                    className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 sm:h-12 sm:w-12">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="mb-2 break-words font-semibold text-gray-900">
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
