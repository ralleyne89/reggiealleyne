
import React from 'react';
import { motion } from 'framer-motion';

const WorksHeader = () => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
        Selected <span className="text-primary">Work</span>
      </h1>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Principal Designer who codes, translating complex healthcare and education challenges into elegant solutions since 2013.
      </p>
    </motion.div>
  );
};

export default WorksHeader;
