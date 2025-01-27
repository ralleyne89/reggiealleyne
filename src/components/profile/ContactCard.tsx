import React from 'react';
import { Handshake, Mail, PhoneCall } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full pt-5 pb-[31px] px-5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="w-full">
        <div className="flex w-full flex-col items-center">
          <div className="self-stretch flex items-center justify-center gap-2 text-sm text-[rgba(153,153,153,1)] font-medium px-2.5 py-1.5">
            <Handshake className="w-4 h-4 text-[#916CE7]" />
            <span>Let's Work Together</span>
          </div>
          <h2 className="text-[rgba(230,230,230,1)] text-xl font-semibold leading-[1.2]">
            Let's Make Magic Happen Together!
          </h2>
        </div>
      </div>
      <div className="w-full text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px] space-y-3">
        <button className="self-stretch bg-[rgba(31,31,31,1)] w-full gap-2.5 px-2.5 py-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
          <Mail className="w-4 h-4 mr-2 text-[#916CE7]" />
          Email Me
        </button>
        <button className="self-stretch bg-[rgba(31,31,31,1)] w-full gap-2.5 px-2.5 py-4 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
          <PhoneCall className="w-4 h-4 mr-2 text-[#916CE7]" />
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default ContactCard;