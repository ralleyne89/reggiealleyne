
import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Code, Palette } from "lucide-react";

const ProjectOverview = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Project Overview
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            CLLCTVE is a digital portfolio platform built to empower Gen Z creators. It provides a space for users to showcase their work, grow their professional network, and connect with brands through creative challenges.
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
          >
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">Role</h3>
            <p className="text-gray-700">Frontend Developer</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
          >
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">Duration</h3>
            <p className="text-gray-700">1 year, 10 months</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
          >
            <Code className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">Tech Stack</h3>
            <p className="text-gray-700">React.js, Styled Components</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
          >
            <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">UI Library</h3>
            <p className="text-gray-700">Ant Design</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectOverview;
