
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Smartphone, Zap } from "lucide-react";

interface TechnicalImplementationProps {
  handleImageClick: (imageSrc: string) => void;
}

const TechnicalImplementation = ({ handleImageClick }: TechnicalImplementationProps) => {
  const technicalFeatures = [
    {
      icon: Code,
      title: "Component Architecture",
      description: "Built modular, reusable React components with TypeScript for scalability and maintainability."
    },
    {
      icon: Database,
      title: "State Management",
      description: "Implemented efficient state management patterns for complex portfolio data and real-time updates."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Created responsive, touch-optimized interfaces designed specifically for Gen Z mobile usage patterns."
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimized loading times and interactions for visual-heavy content and dynamic layouts."
    }
  ];

  const images = [
    {
      src: "/images/65856eaa-3e77-4597-a085-470d7bab7736.png",
      alt: "CLLCTVE platform profile interface",
      title: "User Profile Interface"
    },
    {
      src: "/images/64ebd4e8-68f6-4485-b384-d7a200ebce06.png",
      alt: "CLLCTVE platform landing page",
      title: "Platform Landing Page"
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
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The platform was built with modern technologies and best practices to ensure scalability, performance, and an exceptional user experience.
          </p>
        </motion.div>

        {/* Technical Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
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

        {/* Visual Evidence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Visual Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleImageClick(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnicalImplementation;
