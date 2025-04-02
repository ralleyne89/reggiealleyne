
import React from 'react';
import { Figma, Framer, PenTool, Layout, Layers } from 'lucide-react';

const TechStack = () => {
  const tools = [
    { name: 'Webflow', icon: <Layout className="w-5 h-5 text-white" /> },
    { name: 'Figma', icon: <Figma className="w-5 h-5 text-white" /> },
    { name: 'Framer', icon: <Framer className="w-5 h-5 text-white" /> },
    { name: 'Adobe XD', icon: <PenTool className="w-5 h-5 text-white" /> }
  ];

  return (
    <div className="glass-card p-6 rounded-xl border-white/10 border-solid transition-all duration-300 hover:border-purple/40 hover:shadow-glow card-hover">
      <div className="flex w-full flex-col items-center mb-6">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(180,180,180,1)] font-medium px-2.5 py-1.5">
          <Layers className="w-4 h-4 text-teal" />
          <span>My Stacks</span>
        </div>
        <div className="gradient-text text-xl font-display font-semibold text-center">
          Tech Arsenal
        </div>
      </div>
      <div className="w-full space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="glass-card bg-gradient-to-r from-charcoal-light/50 to-charcoal/50 flex items-center px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md hover:from-charcoal-light hover:to-charcoal animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-purple/20 to-teal/20 p-2 rounded-lg mr-3 border border-white/10">
                {tool.icon}
              </div>
              <span className="text-[rgba(230,230,230,1)] font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
