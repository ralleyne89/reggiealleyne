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
    <div className="bg-[rgba(16,16,16,1)] border p-4 sm:p-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <Layers className="w-4 h-4 text-[#916CE7]" />
          <span>My Stacks</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Tech Arsenal
        </div>
      </div>
      <div className="w-full mt-[30px] space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-[rgba(25,25,25,1)] flex items-center px-3 py-2 rounded-xl transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:shadow-[0_0_10px_rgba(145,108,231,0.1)] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#333333] p-1.5 rounded-lg mr-2">
                {tool.icon}
              </div>
              <span className="text-sm text-[rgba(204,204,204,1)] font-medium">
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