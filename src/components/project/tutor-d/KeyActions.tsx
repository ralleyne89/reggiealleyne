
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, BarChart, Users, Smartphone, Code, Target } from "lucide-react";

const KeyActions = () => {
  const keyActions = [
    {
      icon: MessageSquare,
      title: "SMS-Based Learning Platform",
      description: "Developed a system that enables teachers to create and send educational content via SMS, reaching students with basic cell phones.",
      impact: "Connected 94% of previously unreachable students"
    },
    {
      icon: BarChart,
      title: "Real-Time Progress Tracking",
      description: "Built dashboard analytics that provide teachers with immediate visibility into student response rates and engagement patterns.",
      impact: "Reduced teacher admin time by 5.3 hours weekly"
    },
    {
      icon: Code,
      title: "Redux State Management",
      description: "Implemented robust state management to handle real-time updates across multiple dashboard components and user interactions.",
      impact: "Ensured seamless user experience and data consistency"
    },
    {
      icon: Users,
      title: "Teacher-Centered UX Design",
      description: "Designed intuitive interfaces that minimize learning curves and integrate seamlessly into existing teacher workflows.",
      impact: "Achieved high adoption rates across 12 school districts"
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
            Key Actions That Moved the Needle
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The success of TutorD was driven by strategic technical decisions and user-centered design choices that directly addressed the core challenges faced by educators in underserved communities.
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
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {action.description}
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">
                        Impact: {action.impact}
                      </p>
                    </div>
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
