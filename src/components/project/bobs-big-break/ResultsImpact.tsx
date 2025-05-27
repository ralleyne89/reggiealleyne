
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Zap, Users } from "lucide-react";

const ResultsImpact = () => {
  const results = [
    {
      icon: Trophy,
      title: "Successful Prototype Delivery",
      description: "Delivered a fully functional game prototype within the 2-week academic deadline",
      metric: "100% completion rate"
    },
    {
      icon: Target,
      title: "Balanced Game Economy",
      description: "Created an engaging progression system that balances active and passive gameplay",
      metric: "Dual income streams"
    },
    {
      icon: Zap,
      title: "Technical Achievement",
      description: "Built a scalable full-stack application with real-time data persistence",
      metric: "MongoDB integration"
    },
    {
      icon: Users,
      title: "User Experience Focus",
      description: "Designed for low-attention moments with immediate gratification mechanics",
      metric: "Mobile-first design"
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
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Bob's Big Break successfully delivered an engaging idle game experience that demonstrated 
            both technical proficiency and user-centered design thinking within academic constraints.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {result.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {result.description}
                    </p>
                    <div className="text-sm font-medium text-primary">
                      {result.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Outcomes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
            Key Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2 weeks</div>
              <div className="text-gray-700">Development timeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Full-stack</div>
              <div className="text-gray-700">Implementation scope</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Live demo</div>
              <div className="text-gray-700">Deployed & playable</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResultsImpact;
