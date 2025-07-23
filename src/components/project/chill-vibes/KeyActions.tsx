
import React from "react";
import { motion } from "framer-motion";
import { Music, Zap, Palette, Users } from "lucide-react";

const KeyActions = () => {
  const keyActions = [
    {
      icon: Music,
      title: "Clean Interface Design",
      description: "Developed a minimalist interface that puts music first, removing visual clutter and focusing user attention on the listening experience."
    },
    {
      icon: Zap,
      title: "Smart Recommendation Engine",
      description: "Built an intelligent music discovery system that learns from user preferences and listening patterns to suggest relevant tracks."
    },
    {
      icon: Palette,
      title: "High-Quality Audio Streaming",
      description: "Implemented optimized audio streaming with clear quality indicators, ensuring smooth playback and transparent user experience."
    },
    {
      icon: Users,
      title: "Intuitive Playlist Management",
      description: "Created user-friendly tools for organizing music collections, making playlist creation and management effortless and enjoyable."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Key Actions Taken
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            To create a superior music streaming experience, I focused on four essential areas that directly impact user satisfaction and engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary/5 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {action.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {action.description}
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

export default KeyActions;
