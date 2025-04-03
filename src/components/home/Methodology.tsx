
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flag, ArrowUp, MessageSquare, Target, Award } from 'lucide-react';

const methodologies = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "User-Centered Design",
    description: "Prioritizing the needs, preferences, and behaviors of actual users throughout the design process."
  },
  {
    icon: <Flag className="h-6 w-6 text-primary" />,
    title: "Design Thinking",
    description: "Approaching complex problems with empathy, ideation, and iteration to create innovative solutions."
  },
  {
    icon: <ArrowUp className="h-6 w-6 text-primary" />,
    title: "Agile Methodology",
    description: "Embracing flexibility, collaboration, and iterative development for efficient project execution."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Collaborative Approach",
    description: "Working closely with stakeholders and cross-functional teams to ensure alignment and shared vision."
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Data-Driven Decisions",
    description: "Using analytics, user testing, and metrics to inform design choices and validate solutions."
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Accessibility First",
    description: "Ensuring designs are inclusive and usable for people of all abilities and backgrounds."
  }
];

const Methodology = () => {
  return (
    <section className="py-20 bg-secondary-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            My <span className="text-primary">Methodology</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Principles and approaches that guide my design thinking and problem-solving process.
          </motion.p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {methodologies.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16 md:order-2'}`}>
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-secondary border-4 border-primary items-center justify-center`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex md:hidden mb-3 w-12 h-12 rounded-full bg-secondary border-4 border-primary items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
