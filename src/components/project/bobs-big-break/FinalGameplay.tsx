
import React from "react";
import { motion } from "framer-motion";

interface FinalGameplayProps {
  handleImageClick: (imageSrc: string) => void;
}

const FinalGameplay = ({ handleImageClick }: FinalGameplayProps) => {
  const gameplayFeatures = [
    {
      title: "Tap or Idle Play",
      description: "Earn coins by clicking or passively through investments in hustlers."
    },
    {
      title: "Strategic Progression",
      description: "Choose between active clicking for immediate rewards or passive income for long-term growth."
    },
    {
      title: "Character Customization",
      description: "Outfit Bob with style as his entrepreneurial empire grows."
    },
    {
      title: "Persistent Progress",
      description: "Game state saves automatically, so progress continues even when away."
    }
  ];

  const uiImages = [
    {
      src: "/lovable-uploads/6d034732-5293-42a4-a01b-fef0af194695.png",
      alt: "Bob's Big Break main game interface",
      title: "Main Game Interface"
    },
    {
      src: "/lovable-uploads/40c6444f-3a5c-4327-a0d3-aabd6091463e.png",
      alt: "Bob's Big Break game screens mockup",
      title: "Game Interface Design"
    },
    {
      src: "/lovable-uploads/34473ac0-d26b-48a0-ba58-51bfc4ed23e1.png",
      alt: "Bob's Big Break final mockup screens",
      title: "Final Game Screens"
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
            Interface Design
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The game interface was designed to be intuitive and engaging, with clear visual feedback for all player actions.
          </p>
        </motion.div>

        {/* UI Images */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiImages.map((image, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {image.title}
                </h4>
                <div
                  className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                  onClick={() => handleImageClick(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gameplay Features */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Core Gameplay Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameplayFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalGameplay;
