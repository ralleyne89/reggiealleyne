import React from 'react';

const StatsCard = () => {
  return (
    <div className="flex min-h-28 max-w-full w-[463px] items-stretch gap-3 font-medium">
      <div className="bg-[rgba(16,16,16,1)] border flex flex-col items-stretch whitespace-nowrap flex-1 shrink basis-[0%] pt-5 pb-2.5 px-2.5 rounded-[14px] border-[rgba(255,255,255,0.05)] border-solid">
        <div className="self-center flex w-[90px] items-stretch overflow-hidden">
          <div className="text-[55px] text-[rgba(153,153,153,1)] max-md:text-[40px]">
            <div className="max-md:text-[40px]">01</div>
            <div className="z-10 flex w-[66px] shrink-0 h-5 -mt-5 max-md:mr-0.5" />
          </div>
          <div className="min-h-[42px] text-[35px] text-[rgba(145,108,231,1)]">+</div>
        </div>
        <div className="self-stretch bg-[rgba(20,20,20,1)] border w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] mt-3 px-5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          Projects
        </div>
      </div>
      <div className="bg-[rgba(16,16,16,1)] border flex flex-col items-stretch flex-1 shrink basis-[0%] pt-5 pb-2.5 px-2.5 rounded-[14px] border-[rgba(255,255,255,0.05)] border-solid">
        <div className="self-center flex w-[90px] items-stretch overflow-hidden whitespace-nowrap">
          <div className="text-[55px] text-[rgba(153,153,153,1)] max-md:text-[40px]">
            <div className="max-md:text-[40px]">01</div>
            <div className="z-10 flex w-[66px] shrink-0 h-5 -mt-5 max-md:mr-[3px]" />
          </div>
          <div className="min-h-[42px] text-[35px] text-[rgba(145,108,231,1)]">+</div>
        </div>
        <div className="self-stretch bg-[rgba(20,20,20,1)] border w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] mt-3 pl-5 pr-[9px] py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          Happy Clients
        </div>
      </div>
      <div className="bg-[rgba(16,16,16,1)] border flex flex-col items-stretch flex-1 shrink basis-[0%] pt-5 pb-2.5 px-2.5 rounded-[14px] border-[rgba(255,255,255,0.05)] border-solid">
        <div className="self-center flex w-[90px] items-stretch gap-0.5 overflow-hidden whitespace-nowrap">
          <div className="text-[55px] text-[rgba(153,153,153,1)] max-md:text-[40px]">
            <div className="max-md:text-[40px]">01</div>
            <div className="z-10 flex w-[66px] shrink-0 h-5 -mt-5" />
          </div>
          <div className="min-h-[42px] text-[35px] text-[rgba(145,108,231,1)]">+</div>
        </div>
        <div className="self-stretch bg-[rgba(20,20,20,1)] border w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] mt-3 pl-5 pr-2 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          Year Expertise
        </div>
      </div>
    </div>
  );
};

export default StatsCard;