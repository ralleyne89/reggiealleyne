
import React from "react";
import { motion } from "framer-motion";
import { Layout, Users, Zap, Palette } from "lucide-react";

const KeyActions = () => {
  const keyActions = [
    {
      icon: Layout,
      title: "Intuitive Portfolio Builder",
      description: "Developed a drag-and-drop interface that allows creators to arrange their work exactly as they envision, making portfolio creation effortless and engaging."
    },
    {
      icon: Users,
      title: "Community-Driven Features",
      description: "Built features that encourage interaction, collaboration, and mutual support among creators, fostering a strong sense of community."
    },
    {
      icon: Zap,
      title: "Real-time Engagement System",
      description: "Implemented notification systems and dynamic content updates to keep users engaged with new challenges and opportunities."
    },
    {
      icon: Palette,
      title: "Brand Integration Framework",
      description: "Created a flexible theming system that allows brand customization while maintaining platform design consistency and user experience."
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
            Key Actions Taken
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            To achieve these results, I focused on four critical areas that would directly impact user engagement and platform success.
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
