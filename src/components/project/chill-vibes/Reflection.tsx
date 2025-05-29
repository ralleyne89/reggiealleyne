
import React from "react";
import { motion } from "framer-motion";

const Reflection = () => {
  const insights = [
    {
      title: "User-Centered Audio Design",
      description: "Learned that prioritizing audio quality and transparent streaming indicators significantly enhances user trust and satisfaction."
    },
    {
      title: "Simplicity in Music Interfaces",
      description: "Discovered that removing visual clutter and focusing on essential features creates a more immersive and enjoyable music experience."
    },
    {
      title: "Performance-Driven Development",
      description: "Realized that optimizing for smooth audio playback from the beginning is crucial for user retention and app success."
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
            Working on Chill Vibes deepened my understanding of user-centered design in the audio streaming space. This project taught me the importance of balancing simplicity with functionality, and how small details in audio quality and interface design can significantly impact user satisfaction.
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
            Future iterations would focus on expanding social features like collaborative playlists, implementing advanced audio analytics for users to understand their listening habits, and exploring AI-driven mood-based recommendations to further personalize the music discovery experience.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reflection;
