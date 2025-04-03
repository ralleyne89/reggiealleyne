
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Zap, UserCheck, Sliders, Sparkles } from 'lucide-react';

const principles = [
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Visual Hierarchy",
    description: "Thoughtful organization of elements to guide users through content naturally and enhance comprehension.",
    image: "/lovable-uploads/d2ac6921-78b3-46b5-bbb2-7022018530ad.png"
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Consistent Patterns",
    description: "Creating coherent experiences through repeatable design elements that feel familiar and intuitive.",
    image: "/lovable-uploads/cb582645-1a6e-4846-8a2e-72b2dffd49a8.png"
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Accessibility",
    description: "Ensuring designs are inclusive and usable for people of all abilities through thoughtful implementation.",
    image: "/lovable-uploads/b9b62216-4a0c-4367-bdab-32f608350015.png"
  }
];

const DesignPrinciples = () => {
  return (
    <motion.div
      className="grid grid-cols-2 gap-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {principles.map((principle, index) => (
        <motion.div 
          key={index}
          className={`bg-secondary rounded-xl overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-40 overflow-hidden">
            <img 
              src={principle.image} 
              alt={principle.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
            <div className="absolute top-2 left-2 bg-primary/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              {React.cloneElement(principle.icon, { size: 12 })}
              {principle.title}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center mb-2">
              {React.cloneElement(principle.icon, { className: "text-primary mr-2" })}
              <h3 className="text-white font-medium">
                {principle.title}
              </h3>
            </div>
            {index === 0 && (
              <p className="text-gray-400 text-sm mb-3">{principle.description}</p>
            )}
            <a href="#" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
              Learn more about {principle.title}
              <Sparkles size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesignPrinciples;
