
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

const ChallengesLearnings = () => {
  const challenges = [
    {
      title: "Time Constraint Management",
      description: "Delivering a full-stack game in just 2 weeks required careful scope management and rapid prototyping."
    },
    {
      title: "Game Balance Complexity",
      description: "Balancing active vs. passive income streams while maintaining player engagement proved more complex than anticipated."
    },
    {
      title: "Mobile Optimization",
      description: "Ensuring the game worked seamlessly across different screen sizes and touch interfaces required iterative testing."
    }
  ];

  const learnings = [
    {
      title: "Rapid Prototyping Skills",
      description: "Learned to quickly validate core game mechanics before investing in detailed implementation."
    },
    {
      title: "User Context Awareness",
      description: "Designing for low-attention states challenged my UX instincts and improved empathetic design thinking."
    },
    {
      title: "Full-Stack Integration",
      description: "Gained valuable experience in connecting frontend game logic with backend data persistence systems."
    }
  ];

  const nextSteps = [
    "User testing with casual players to fine-tune engagement pacing",
    "Achievement system or social sharing to increase player retention",
    "Mobile app version for even more intuitive thumb-first interaction",
    "Advanced analytics to understand player behavior patterns"
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
            Challenges & Learnings
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Developing Bob's Big Break within academic constraints provided valuable insights into 
            rapid game development and user-centered design principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Challenges</h3>
            </div>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Learnings</h3>
            </div>
            <div className="space-y-6">
              {learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{learning.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{learning.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary/5 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Future Enhancements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChallengesLearnings;
