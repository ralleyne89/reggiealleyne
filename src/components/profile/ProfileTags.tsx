
import React from 'react';
import { MapPin, Palette, PenTool, GraduationCap, Clock, Sparkles } from 'lucide-react';

const ProfileTags = () => {
  return (
    <div className="bg-[rgba(20,20,20,1)] border flex w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] font-medium flex-wrap mt-[30px] p-3 rounded-xl border-[rgba(255,255,255,0.06)] border-solid">
      <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
        <MapPin size={14} className="text-[#916CE7]" />
        Los Angeles
      </span>
      <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
        <PenTool size={14} className="text-[#916CE7]" />
        UX/UI Designer
      </span>
      <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
        <Sparkles size={14} className="text-[#916CE7]" />
        Magic Maker
      </span>
      <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
        <GraduationCap size={14} className="text-[#916CE7]" />
        Art Institute CA
      </span>
      <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
        <Clock size={14} className="text-[#916CE7]" />
        PST
      </span>
    </div>
  );
};

export default ProfileTags;
