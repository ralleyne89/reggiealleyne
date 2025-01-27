import React from 'react';
import { Figma, Framer, PenTool, Layout } from 'lucide-react';

const TechStack = () => {
  const tools = [
    { name: 'Webflow', icon: <Layout className="w-5 h-5 text-[#916CE7] mr-2" /> },
    { name: 'Figma', icon: <Figma className="w-5 h-5 text-[#916CE7] mr-2" /> },
    { name: 'Framer', icon: <Framer className="w-5 h-5 text-[#916CE7] mr-2" /> },
    { name: 'Adobe XD', icon: <PenTool className="w-5 h-5 text-[#916CE7] mr-2" /> }
  ];

  return (
    <div className="bg-[rgba(16,16,16,1)] border p-4 sm:p-5 rounded-[20px] border-[rgba(255,255,255,0.05)] border-solid">
      <div className="flex w-full flex-col items-center">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5 text-center">
          My Stacks
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Tech Arsenal
        </div>
      </div>
      <div className="w-full mt-[30px] space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {tools.slice(0, 2).map((tool, index) => (
            <div key={index} className="bg-[rgba(25,25,25,1)] flex items-center px-3 py-2 rounded-xl">
              {tool.icon}
              <span className="text-sm text-[rgba(204,204,204,1)] font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tools.slice(2).map((tool, index) => (
            <div key={index} className="bg-[rgba(25,25,25,1)] flex items-center px-3 py-2 rounded-xl">
              {tool.icon}
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