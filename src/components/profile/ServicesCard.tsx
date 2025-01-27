import React from 'react';
import { Briefcase, Smartphone, Code, Layout } from 'lucide-react';

const ServicesCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border relative flex w-full flex-col overflow-hidden items-stretch pl-3.5 pr-[13px] pt-5 pb-[30px] rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 h-full">
      <div className="z-0 flex w-full flex-col">
        <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1.5">
          <Briefcase size={16} className="text-[rgba(145,108,231,1)]" />
          <span>Services</span>
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold text-center px-2.5">
          Solutions Suite
        </div>
      </div>
      <div className="self-center z-0 w-full text-sm text-[rgba(204,204,204,1)] font-medium mt-[30px] px-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 px-4 py-[7px] rounded-xl transition-all duration-300 hover:bg-[rgba(35,35,35,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner cursor-pointer">
            <Smartphone size={14} className="text-[#916CE7]" />
            <div className="self-stretch gap-1.5 my-auto">
              Mobile App Design
            </div>
          </div>
          <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 px-4 py-[7px] rounded-xl transition-all duration-300 hover:bg-[rgba(35,35,35,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner cursor-pointer">
            <Code size={14} className="text-[#916CE7]" />
            <div className="self-stretch gap-1.5 my-auto">
              No Code development
            </div>
          </div>
          <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 px-4 py-[7px] rounded-xl transition-all duration-300 hover:bg-[rgba(35,35,35,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner cursor-pointer">
            <Layout size={14} className="text-[#916CE7]" />
            <div className="self-stretch gap-1.5 my-auto">
              Web Design
            </div>
          </div>
          <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 px-4 py-[7px] rounded-xl transition-all duration-300 hover:bg-[rgba(35,35,35,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner cursor-pointer">
            <Smartphone size={14} className="text-[#916CE7]" />
            <div className="self-stretch gap-1.5 my-auto">
              Mobile App Design
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[rgba(145,108,231,1)] absolute gap-2.5 text-sm text-white font-medium -translate-x-2/4 translate-y-[0%] px-[30px] py-[13px] rounded-xl border-[rgba(16,16,16,1)] border-solid border-2 left-2/4 bottom-3.5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner max-md:px-5">
        View All Services
      </button>
    </div>
  );
};

export default ServicesCard;