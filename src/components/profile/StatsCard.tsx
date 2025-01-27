import React from 'react';
import { Trophy, Smile, Star } from 'lucide-react';

const StatsCard = () => {
  const stats = [
    { label: 'Projects', icon: <Trophy className="w-4 h-4 text-[#916CE7]" /> },
    { label: 'Clients', icon: <Smile className="w-4 h-4 text-[#916CE7]" /> },
    { label: 'Years', icon: <Star className="w-4 h-4 text-[#916CE7]" /> }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-medium">
      {stats.map(({ label, icon }, index) => (
        <div 
          key={index} 
          className="bg-[rgba(16,16,16,1)] border flex flex-col items-center pt-5 pb-2.5 px-2.5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 animate-fade-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex items-center text-[40px] md:text-[55px] text-[rgba(153,153,153,1)]">
            <div>01</div>
            <div className="text-[30px] md:text-[35px] text-[#916CE7]">+</div>
          </div>
          <div className="bg-[rgba(20,20,20,1)] border w-full text-[13px] text-[rgba(204,204,204,1)] px-3 py-1.5 rounded-xl border-[rgba(255,255,255,0.05)] border-solid">
            <div className="flex items-center justify-center gap-2">
              {icon}
              <span>{label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;