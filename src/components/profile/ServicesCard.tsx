import React from 'react';

const ServicesCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border relative flex w-full flex-col overflow-hidden items-stretch pl-3.5 pr-[13px] pt-5 pb-[30px] rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="z-0 flex w-full flex-col items-center">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium whitespace-nowrap px-2.5 py-1.5">
          Services
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Solutions Suite
        </div>
      </div>
      <div className="self-center z-0 max-w-full w-[317px] text-sm text-[rgba(204,204,204,1)] font-medium mt-[30px]">
        <div className="w-full max-w-[317px] overflow-hidden">
          <div className="flex gap-2 flex-wrap">
            <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 pr-[15px] py-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Mobile App Design
              </div>
            </div>
            <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 pl-[7px] pr-[15px] py-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                No Code development
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[317px] overflow-hidden mt-2.5 px-3">
          <div className="flex gap-2 flex-wrap">
            <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 pl-[7px] pr-[15px] py-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Web Design
              </div>
            </div>
            <div className="bg-[rgba(25,25,25,1)] flex items-center gap-2.5 pl-[7px] py-[7px] rounded-xl">
              <div className="self-stretch gap-1.5 my-auto">
                Mobile App Design
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[rgba(145,108,231,1)] absolute gap-2.5 text-sm text-white font-medium -translate-x-2/4 translate-y-[0%] px-[30px] py-[13px] rounded-xl border-[rgba(16,16,16,1)] border-solid border-2 left-2/4 bottom-3.5 max-md:px-5">
        View All Services
      </button>
    </div>
  );
};

export default ServicesCard;