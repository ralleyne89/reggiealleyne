
import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, Lightbulb, Palette, Code, Zap, Repeat } from 'lucide-react';

const processes = [
  {
    icon: <SearchIcon className="text-primary h-8 w-8" />,
    title: "Research",
    description: "Thorough discovery and analysis to understand user needs, market trends, and stakeholder requirements."
  },
  {
    icon: <Lightbulb className="text-primary h-8 w-8" />,
    title: "Ideation",
    description: "Collaborative brainstorming to generate innovative concepts and solutions to identified problems."
  },
  {
    icon: <Palette className="text-primary h-8 w-8" />,
    title: "Design",
    description: "Creating intuitive, accessible interfaces with thoughtful interactions and visual hierarchy."
  },
  {
    icon: <Code className="text-primary h-8 w-8" />,
    title: "Development",
    description: "Translating designs into responsive, performant code with attention to detail."
  },
  {
    icon: <Zap className="text-primary h-8 w-8" />,
    title: "Testing",
    description: "Rigorous validation through user testing and quality assurance to refine experiences."
  },
  {
    icon: <Repeat className="text-primary h-8 w-8" />,
    title: "Iteration",
    description: "Continuous improvement based on feedback, data analysis, and evolving user needs."
  }
];

const DesignProcess = () => {
  return (
    <section className="py-20 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            My Design <span className="text-primary">Process</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            A structured yet flexible approach that ensures thoughtful, effective solutions for every project.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-xl p-6 border border-gray-800 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, borderColor: 'rgba(145, 108, 231, 0.3)' }}
            >
              <div className="mb-4 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                {process.icon}
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-white mb-3">{process.title}</h3>
              <p className="text-gray-400 text-sm">{process.description}</p>
              
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
