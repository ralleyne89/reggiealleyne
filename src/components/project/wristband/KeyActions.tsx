import React from "react";
import { motion } from "framer-motion";
import { Globe, PenTool, Gamepad2, DollarSign } from "lucide-react";

const KeyActions = () => {
  const keyActions = [
    {
      icon: Globe,
      title: "Diverse Content Creator Network",
      description:
        "Established partnerships with freelance writers and artists from various cultural backgrounds to create authentic, diverse storytelling content.",
    },
    {
      icon: PenTool,
      title: "Quality-First Content Curation",
      description:
        "Implemented rigorous content review processes focused on character development and narrative depth rather than quantity-based content production.",
    },
    {
      icon: Gamepad2,
      title: "Intuitive Choice-Based Navigation",
      description:
        "Designed seamless user interface that enhances the storytelling experience without overwhelming the narrative flow.",
    },
    {
      icon: DollarSign,
      title: "Creator-Supportive Monetization",
      description:
        "Developed thoughtful premium content system that fairly compensates creators while providing genuine value to users.",
    },
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
            Key Actions That Moved the Needle
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The success of WRISTBAND was driven by strategic partnerships with
            diverse content creators and user-centered design choices that
            prioritized authentic storytelling over quantity-based content
            production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {keyActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
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
