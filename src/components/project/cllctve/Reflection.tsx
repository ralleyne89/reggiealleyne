
import React from "react";
import { motion } from "framer-motion";

const Reflection = () => {
  const insights = [
    {
      title: "Frontend Development Excellence",
      description: "Advanced skills in React.js, component architecture, and performance optimization through real-world application."
    },
    {
      title: "User-Centered Development",
      description: "Learned to translate user research insights into technical implementation decisions that drive engagement."
    },
    {
      title: "Scalable Code Practices",
      description: "Developed expertise in writing code that scales with product growth and team expansion while maintaining quality."
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
            Reflection
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            CLLCTVE successfully created a community of creative talent, resulting in numerous brand partnerships and strong user engagement metrics. The platform bridged the gap between young creators and professional opportunities while maintaining an authentic Gen Z digital experience.
          </p>
        </motion.div>

        {/* Professional Growth Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Professional Growth
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-3">{insight.title}</h4>
                <p className="text-gray-700 leading-relaxed">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reflection;
