
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Zap, Shield } from "lucide-react";

interface TechnicalImplementationProps {
  handleImageClick: (imageSrc: string) => void;
}

const TechnicalImplementation: React.FC<TechnicalImplementationProps> = ({
  handleImageClick
}) => {
  const technicalFeatures = [
    {
      title: "Frontend Architecture",
      description: "Built with React.js and modern JavaScript, ensuring responsive design and smooth user interactions.",
      icon: Code,
      details: [
        "Component-based architecture for maintainability",
        "State management with React hooks",
        "Responsive design with CSS Grid and Flexbox"
      ]
    },
    {
      title: "Audio Streaming",
      description: "Optimized audio streaming pipeline with multiple quality options and seamless playback controls.",
      icon: Zap,
      details: [
        "Web Audio API for high-quality playback",
        "Progressive audio loading and caching",
        "Multiple bitrate options for different connections"
      ]
    },
    {
      title: "Backend Services",
      description: "RESTful API built with Node.js and Express, handling user data and music catalog management.",
      icon: Database,
      details: [
        "User authentication and session management",
        "Music metadata and playlist storage",
        "Recommendation algorithm implementation"
      ]
    },
    {
      title: "Performance & Security",
      description: "Implemented security best practices and performance optimizations for smooth user experience.",
      icon: Shield,
      details: [
        "JWT-based authentication system",
        "Audio streaming optimization",
        "Cross-browser compatibility testing"
      ]
    }
  ];

  return (
    <motion.section 
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The technical foundation of Chill Vibes focuses on delivering high-quality audio streaming with a responsive, user-friendly interface built on modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
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
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TechnicalImplementation;
