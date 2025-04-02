
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorksHeader = () => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-4xl font-heading font-bold mt-6 text-white">Works Gallery</h1>
        <p className="text-gray-400 mt-2 max-w-xl">Explore my portfolio of design and development projects, showcasing my skills and expertise in creating beautiful and functional digital experiences.</p>
      </motion.div>
    </div>
  );
};

export default WorksHeader;
