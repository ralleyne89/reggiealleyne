import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Smartphone, Zap } from "lucide-react";
interface TechnicalImplementationProps {
  handleImageClick: (imageSrc: string) => void;
}
const TechnicalImplementation = ({
  handleImageClick,
}: TechnicalImplementationProps) => {
  const technicalFeatures = [
    {
      icon: Code,
      title: "React Frontend Architecture",
      description:
        "Built modular React components with Bulma CSS framework for rapid prototyping and consistent styling.",
    },
    {
      icon: Database,
      title: "MongoDB Data Persistence",
      description:
        "Implemented real-time save system using MongoDB to persist player progress across sessions.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Designed responsive interfaces optimized for thumb-first interaction and short attention spans.",
    },
    {
      icon: Zap,
      title: "Game Economy Logic",
      description:
        "Developed balanced progression system with both active clicking and passive income generation.",
    },
  ];
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="py-16 rounded-xl bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The game was built using modern web technologies with a focus on
            scalability and user experience optimization.
          </p>
        </motion.div>

        {/* Technical Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
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
export default TechnicalImplementation;
