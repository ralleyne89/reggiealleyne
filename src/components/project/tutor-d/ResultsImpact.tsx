import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Smartphone, CheckCircle } from "lucide-react";
const ResultsImpact = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "10 Month Build",
      description:
        "From initial concept to working teacher dashboard with real SMS integration",
    },
    {
      icon: Clock,
      metric: "3 Person Team",
      description:
        "Small but effective team that collaborated closely throughout development",
    },
    {
      icon: Smartphone,
      metric: "SMS-First Approach",
      description:
        "Built specifically for students with basic phones, not just as an afterthought",
    },
    {
      icon: CheckCircle,
      metric: "React + Redux Stack",
      description:
        "Modern frontend connected to MongoDB backend with real-time updates via Redis",
    },
  ];
  const impacts = [
    {
      title: "Educational Equity",
      description:
        "Bridged the digital divide by reaching students with basic cell phones, ensuring no student is left behind in remote learning scenarios.",
    },
    {
      title: "Teacher Efficiency",
      description:
        "Streamlined lesson delivery and progress tracking, allowing educators to focus more on teaching and less on administrative tasks.",
    },
    {
      title: "Student Success",
      description:
        "Improved learning outcomes in underserved communities by providing consistent access to educational content and support.",
    },
    {
      title: "Scalable Solution",
      description:
        "Created a platform that works with existing infrastructure, making it easily adoptable by schools with limited technology budgets.",
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
      className="py-16 bg-gray-50 rounded-xl"
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
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            TutorD successfully addressed the critical gap in educational access
            for underserved communities. The platform enabled teachers to reach
            students who were previously disconnected from digital learning,
            resulting in measurable improvements in engagement and learning
            outcomes.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {results.map((result, index) => {
            const IconComponent = result.icon;
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
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {result.metric}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Areas */}
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
            delay: 0.4,
          }}
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
            Key Impact Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
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
                  delay: 0.5 + index * 0.1,
                }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-3">
                  {impact.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default ResultsImpact;
