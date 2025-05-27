
import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Code, TestTube } from "lucide-react";

const DetailedProcess = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Research & Discovery",
      description: "Conducted comprehensive user research with Gen Z creators to understand their portfolio and networking needs.",
      details: [
        "Interviewed 15 Gen Z creators aged 18-25",
        "Analyzed 8 major portfolio platforms for competitive insights",
        "Studied Gen Z digital behavior patterns and platform preferences"
      ]
    },
    {
      icon: Lightbulb,
      title: "Strategy & Ideation",
      description: "Developed a hybrid platform approach combining portfolio showcase with discovery and challenge-based opportunities.",
      details: [
        "Created mobile-first design principles",
        "Designed community-driven feature frameworks",
        "Planned brand partnership integration strategy"
      ]
    },
    {
      icon: Code,
      title: "Technical Implementation",
      description: "Built scalable React.js components with performance optimization for visual-heavy content.",
      details: [
        "Developed modular component architecture",
        "Implemented efficient state management",
        "Optimized performance for rich visual content"
      ]
    },
    {
      icon: TestTube,
      title: "Testing & Iteration",
      description: "Continuously refined the platform based on user feedback and performance metrics.",
      details: [
        "Conducted usability testing sessions",
        "Monitored engagement and retention metrics",
        "Iteratively improved user experience"
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Detailed Process
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Here's an in-depth look at how these key actions were achieved through a systematic approach to platform development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
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

export default DetailedProcess;
