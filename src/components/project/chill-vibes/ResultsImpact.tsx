
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

const ResultsImpact = () => {
  const metrics = [
    {
      title: "User Engagement",
      value: "+73%",
      description: "increase in daily active users and session duration",
      icon: TrendingUp
    },
    {
      title: "User Satisfaction",
      value: "4.8/5",
      description: "average rating from beta users for interface design",
      icon: Users
    },
    {
      title: "Performance",
      value: "2.1s",
      description: "average load time for high-quality music streaming",
      icon: Clock
    },
    {
      title: "Feature Adoption",
      value: "89%",
      description: "of users actively use playlist creation and management",
      icon: CheckCircle
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
            Chill Vibes successfully delivered a streamlined music experience that prioritizes user enjoyment and audio quality, resulting in high user satisfaction and engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {metric.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ResultsImpact;
