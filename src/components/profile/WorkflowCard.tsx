import React from 'react';
import { Target, Search, Layout, Box, Paintbrush, ListTodo } from 'lucide-react';

const WorkflowCard = () => {
  const steps = [
    { name: 'Goals & Objectives', icon: <Target className="w-5 h-5 text-white" /> },
    { name: 'Research', icon: <Search className="w-5 h-5 text-white" /> },
    { name: 'Wireframe', icon: <Layout className="w-5 h-5 text-white" /> },
    { name: 'Prototyping', icon: <Box className="w-5 h-5 text-white" /> },
    { name: 'Finalize Design', icon: <Paintbrush className="w-5 h-5 text-white" /> }
  ];

  return (
    <div className="bg-[rgba(16,16,16,1)] border min-h-[369px] grow overflow-hidden w-full pt-2.5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="bg-[rgba(16,16,16,1)] flex w-full flex-col items-center pb-3 border-[rgba(255,255,255,0.06)] border-b">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          <ListTodo className="w-4 h-4 text-[#916CE7]" />
          <span>Work Process</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Workflow Highlights
        </div>
      </div>
      <div className="w-full text-sm text-[rgba(204,204,204,1)] font-medium p-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-[rgba(25,25,25,1)] border flex min-h-[46px] w-full items-center gap-2 whitespace-nowrap ${
              index > 0 ? 'mt-2' : ''
            } px-[7px] py-1.5 rounded-xl border-[rgba(255,255,255,0.02)] border-solid transition-all duration-300 hover:bg-[rgba(30,30,30,1)] hover:border-[rgba(145,108,231,0.2)] animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-[#333333] p-1.5 rounded-lg">
              {step.icon}
            </div>
            <span>{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowCard;