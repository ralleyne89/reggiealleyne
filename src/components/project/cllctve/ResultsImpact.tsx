
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const ResultsImpact = () => {
  const results = [
    {
      icon: Users,
      metric: "500+ creators",
      description: "Grew an early creator community around mobile-first portfolios and challenge-based discovery."
    },
    {
      icon: Target,
      metric: "15 partnerships",
      description: "Supported brand collaboration workflows without letting each partner fragment the core product system."
    },
    {
      icon: TrendingUp,
      metric: "85% retention",
      description: "Validated the community-first product bet with a strong return signal from the target creator audience."
    },
    {
      icon: Award,
      metric: "Clear trade-offs",
      description: "Chose mobile behavior fit over desktop feature parity, creating a sharper position against incumbents."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 min-w-0 sm:mb-12"
        >
          <h2 className="mb-5 break-words font-heading text-3xl font-bold text-gray-900 [text-wrap:balance] md:text-4xl">
            Results & Impact
          </h2>
          <p className="max-w-4xl text-base leading-7 text-gray-700 sm:text-lg sm:leading-relaxed">
            CLLCTVE successfully bridged the gap between young creators and professional opportunities while maintaining an authentic Gen Z digital experience. The platform achieved its core mission of empowering creators through community building and brand collaboration.
          </p>
        </motion.div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-0 rounded-xl border border-gray-200 bg-white p-5 transition-shadow duration-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex min-w-0 items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-2 break-words text-lg font-semibold text-gray-900 sm:text-xl">
                      {result.metric}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ResultsImpact;
