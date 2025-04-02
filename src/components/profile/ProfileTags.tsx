
import React from 'react';
import { MapPin, Layout, Palette, GraduationCap, Clock, Sparkles } from 'lucide-react';

const ProfileTags = () => {
  return (
    <div className="glass-card flex w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] font-medium flex-wrap mt-[30px] p-3 rounded-xl">
      <span className="bg-gradient-to-r from-purple/10 to-purple/20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border border-purple/20 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:border-purple/40">
        <MapPin size={14} className="text-purple" />
        Los Angeles
      </span>
      <span className="bg-gradient-to-r from-teal/10 to-teal/20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border border-teal/20 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:border-teal/40">
        <Layout size={14} className="text-teal" />
        UX/UI Developer
      </span>
      <span className="bg-gradient-to-r from-coral/10 to-coral/20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border border-coral/20 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:border-coral/40">
        <Sparkles size={14} className="text-coral" />
        Magic Maker
      </span>
      <span className="bg-gradient-to-r from-purple/10 to-purple/20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border border-purple/20 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:border-purple/40">
        <GraduationCap size={14} className="text-purple" />
        Art Institute LA
      </span>
      <span className="bg-gradient-to-r from-teal/10 to-teal/20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border border-teal/20 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:border-teal/40">
        <Clock size={14} className="text-teal" />
        PST
      </span>
    </div>
  );
};

export default ProfileTags;
