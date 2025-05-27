
import React from "react";
import { motion } from "framer-motion";

const Reflection = () => {
  const insights = [
    {
      title: "Accessibility-First Design",
      description: "Learned that designing for the most constrained environments often leads to cleaner, more focused solutions that benefit all users."
    },
    {
      title: "Technical Constraint Innovation",
      description: "SMS limitations forced us to distill educational content to its essence, resulting in more effective and concise communication."
    },
    {
      title: "Impact-Driven Development",
      description: "Seeing how our work directly helped teachers support students during challenging times reinforced the value of purpose-driven projects."
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
            Working on TutorD deepened my understanding of accessibility-first design—building for people whose devices, environments, or circumstances are often overlooked. It also sharpened my ability to collaborate in a lean team setting, where each member needed to contribute across multiple areas of expertise.
          </p>
        </motion.div>

        {/* Professional Growth Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Professional Growth & Insights
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

        {/* Next Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white rounded-xl p-8 border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Future Enhancements
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If expanded, I'd explore offline usage logging for teachers with intermittent internet access, enhanced analytics to help identify learning patterns and intervention opportunities, and MMS support for multimedia content delivery where available.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reflection;
