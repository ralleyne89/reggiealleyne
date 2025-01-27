import React from 'react';

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-medium">
      {['Projects', 'Happy Clients', 'Year Expertise'].map((label, index) => (
        <div key={index} className="bg-[rgba(16,16,16,1)] border flex flex-col items-center pt-5 pb-2.5 px-2.5 rounded-[14px] border-[rgba(255,255,255,0.05)] border-solid">
          <div className="flex items-center justify-center gap-0.5 overflow-hidden">
            <div className="text-[40px] md:text-[55px] text-[rgba(153,153,153,1)]">
              <div>01</div>
              <div className="z-10 flex w-[66px] shrink-0 h-5 -mt-5" />
            </div>
            <div className="text-[30px] md:text-[35px] text-[rgba(145,108,231,1)]">+</div>
          </div>
          <div className="bg-[rgba(20,20,20,1)] border w-full text-[13px] text-[rgba(204,204,204,1)] mt-3 px-3 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid text-center">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;