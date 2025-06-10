import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Cog, Target } from "lucide-react";

interface GameDesignProcessProps {
  handleImageClick: (imageSrc: string) => void;
}

const GameDesignProcess = ({ handleImageClick }: GameDesignProcessProps) => {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Concept & Whiteboarding",
      description: "Defined user journey and core game mechanics through collaborative whiteboarding sessions",
      details: ["User flow mapping", "Game economy design", "Core loop definition"]
    },
    {
      icon: Users,
      title: "Character Development",
      description: "Created Bob's character identity and visual assets to establish brand personality",
      details: ["Character art creation", "Logo design", "UI iconography"]
    },
    {
      icon: Cog,
      title: "MVP Component Design",
      description: "Designed core components including dashboard, upgrade store, and character profile",
      details: ["Wireframe creation", "Component architecture", "User interface design"]
    },
    {
      icon: Target,
      title: "Balance & Testing",
      description: "Iteratively tested game economy and progression to optimize player engagement",
      details: ["Progression balancing", "Income stream optimization", "User feedback integration"]
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
            Game Design Process
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Our design process focused on creating an engaging idle game experience that would work seamlessly 
            across devices while maintaining player interest through balanced progression mechanics.
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8 text-center">
            Character Design & Branding
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-white rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleImageClick("/images/71cb9624-eeb6-4af5-a137-8a38307549f4.png")}
            >
              <img
                src="/images/71cb9624-eeb6-4af5-a137-8a38307549f4.png"
                alt="Bob's Big Break logo"
                className="w-full h-32 object-contain mb-4"
              />
              <h4 className="font-semibold text-gray-900">Logo Design</h4>
            </div>
            <div 
              className="bg-white rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleImageClick("/images/1b895fd4-28b2-4f60-a662-5e34d47cdccc.png")}
            >
              <img
                src="/images/1b895fd4-28b2-4f60-a662-5e34d47cdccc.png"
                alt="Bob character full body"
                className="w-full h-32 object-contain mb-4"
              />
              <h4 className="font-semibold text-gray-900">Character Design</h4>
            </div>
            <div 
              className="bg-white rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleImageClick("/images/6193fe4b-899f-488a-aa0f-30ace572badd.png")}
            >
              <img
                src="/images/6193fe4b-899f-488a-aa0f-30ace572badd.png"
                alt="Bob character portrait"
                className="w-full h-32 object-contain mb-4"
              />
              <h4 className="font-semibold text-gray-900">Character Portrait</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GameDesignProcess;
