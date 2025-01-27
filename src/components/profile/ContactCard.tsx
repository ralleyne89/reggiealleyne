import React from 'react';

const ContactCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border min-h-[343px] grow overflow-hidden w-full pt-5 pb-[31px] px-5 rounded-[20px] border-[rgba(255,255,255,0.05)] border-solid">
      <div className="w-full">
        <div className="flex w-full flex-col items-center">
          <h2 className="text-[rgba(230,230,230,1)] text-xl font-semibold leading-[1.2]">
            Let's Work Together
          </h2>
          <div className="self-stretch gap-2 text-sm text-[rgba(153,153,153,1)] font-medium mt-[5px] px-2.5 py-1.5">
            Let's Make Magic Happen Together!
          </div>
        </div>
      </div>
      <div className="w-full text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px]">
        <button className="self-stretch bg-[rgba(31,31,31,1)] w-full gap-2.5 px-2.5 py-4 rounded-[10px]">
          Email Me
        </button>
        <button className="self-stretch bg-[rgba(31,31,31,1)] w-full gap-2.5 mt-3 px-2.5 py-4 rounded-[10px]">
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default ContactCard;