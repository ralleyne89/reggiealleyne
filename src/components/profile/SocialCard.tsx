import React from 'react';

const SocialCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border min-h-[343px] grow overflow-hidden w-full px-5 py-[19px] rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full flex-col items-center">
        <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
          Follow Me
        </div>
        <div className="text-[rgba(230,230,230,1)] text-base font-semibold">
          Online Presence
        </div>
      </div>
      <div className="w-full text-sm text-[rgba(204,204,204,1)] font-medium whitespace-nowrap mt-[30px]">
        {[
          'visualsbyartam',
          'sanjay-billa',
          'sanjaybilla',
          'visualsbyartam'
        ].map((handle, index) => (
          <div key={index} className="flex w-full max-w-[185px] mt-2 first:mt-0">
            <div className="flex w-[185px]">
              <div className="bg-[rgba(25,25,25,1)] flex w-[185px] items-center justify-between pl-[7px] pr-2.5 py-[7px] rounded-xl">
                <div className="self-stretch gap-1.5 my-auto">
                  {handle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCard;