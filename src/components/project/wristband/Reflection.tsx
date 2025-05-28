
import React from "react";
import { motion } from "framer-motion";

const Reflection = () => {
  const insights = [
    {
      title: "Creator-Centered Design Philosophy",
      description: "Learned that building platforms around empowering diverse content creators leads to more authentic and engaging user experiences."
    },
    {
      title: "Cultural Authenticity as Quality Metric",
      description: "Discovered that authentic cultural representation requires deep collaboration with creators from those backgrounds, not surface-level aesthetic changes."
    },
    {
      title: "Quality Over Quantity Content Strategy",
      description: "Realized that users strongly prefer fewer, well-crafted stories with deep character development over large volumes of shallow content."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
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
            Working on WRISTBAND deepened my understanding of the importance of authentic representation in digital storytelling and the value of building platforms that genuinely support diverse creators. This project taught me that meaningful user engagement comes from emotional connections to well-developed characters and narratives.
          </p>
        </motion.div>

        {/* Professional Growth Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
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
          className="bg-white rounded-xl p-8 border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Future Enhancements
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Future iterations would focus on expanding the creator mentorship program to support emerging diverse writers, implementing community features for readers to connect with creators, and developing advanced AI-driven personalization that respects cultural nuances in story recommendations.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reflection;
