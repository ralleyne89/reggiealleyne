
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const ResultsImpact = () => {
  const results = [
    {
      icon: Users,
      metric: "Strong Community",
      description: "Successfully created an engaged community of Gen Z creators with high retention rates"
    },
    {
      icon: Target,
      metric: "Brand Partnerships",
      description: "Facilitated numerous brand partnerships and collaboration opportunities for creators"
    },
    {
      icon: TrendingUp,
      metric: "Platform Growth",
      description: "Achieved significant user engagement metrics and platform adoption"
    },
    {
      icon: Award,
      metric: "Professional Recognition",
      description: "Platform recognized as a successful bridge between creators and professional opportunities"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            CLLCTVE successfully bridged the gap between young creators and professional opportunities while maintaining an authentic Gen Z digital experience. The platform achieved its core mission of empowering creators through community building and brand collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
