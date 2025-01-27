import React from 'react';

const WorkflowCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border min-h-[369px] grow overflow-hidden w-full pt-2.5 rounded-[20px] border-[rgba(255,255,255,0.06)] border-solid">
      <div className="bg-[rgba(16,16,16,1)] flex w-full flex-col items-center pb-3 border-[rgba(255,255,255,0.06)] border-b">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          Work Process
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Workflow Highlights
        </div>
      </div>
      <div className="w-full text-sm text-[rgba(204,204,204,1)] font-medium p-3">
        {['Goals & Objectives', 'Research', 'Wireframe', 'Prototyping', 'Finalize Design'].map((step, index) => (
          <div
            key={index}
            className={`bg-[rgba(25,25,25,1)] border flex min-h-[46px] w-full items-center gap-2 whitespace-nowrap ${
              index > 0 ? 'mt-2' : ''
            } px-[7px] py-1.5 rounded-xl border-[rgba(255,255,255,0.02)] border-solid`}
          >
            <div className="self-stretch gap-1.5 my-auto">
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowCard;