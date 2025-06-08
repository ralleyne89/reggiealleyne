
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <motion.div className="mt-8 md:mt-12 flex justify-center" initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }} viewport={{
      once: true,
      amount: 0.3
    }}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-2xl">
        <div className="bg-secondary backdrop-blur-sm rounded-xl p-4 border border-gray-200">
          <div className="text-3xl font-heading font-bold text-text-primary mb-1">
            100+
          </div>
          <div className="text-text-secondary text-sm">Projects</div>
        </div>

        <div className="bg-secondary backdrop-blur-sm rounded-xl p-4 border border-gray-200">
          <div className="text-3xl font-heading font-bold text-text-primary mb-1">
            25+
          </div>
          <div className="text-text-secondary text-sm">Technologies</div>
        </div>

        <div className="bg-secondary backdrop-blur-sm rounded-xl p-4 border border-gray-200">
          <div className="text-3xl font-heading font-bold text-text-primary mb-1">
            10+
          </div>
          <div className="text-text-secondary text-sm">
            Years Experience
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
