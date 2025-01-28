import React from 'react';
import { Database, Users, Calendar } from 'lucide-react';

const StatsCard = () => {
  const stats = [
    { label: 'Projects', icon: <Database className="w-4 h-4 text-[#916CE7]" /> },
    { label: 'Clients', icon: <Users className="w-4 h-4 text-[#916CE7]" /> },
    { label: 'Years', icon: <Calendar className="w-4 h-4 text-[#916CE7]" /> }
  ];

  return (
    <div className="grid grid-cols-3 gap-3 font-medium">
      {stats.map(({ label, icon }, index) => (
        <div 
          key={index} 
          className="bg-[rgba(16,16,16,1)] border flex flex-col items-center pt-3 pb-2 px-2 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 animate-fade-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex items-center text-[30px] md:text-[55px] text-[rgba(153,153,153,1)]">
            <div>{label === 'Years' ? '12' : '01'}</div>
            <div className="text-[20px] md:text-[35px] text-[#916CE7]">+</div>
          </div>
          <div className="bg-[rgba(20,20,20,1)] border w-full text-[11px] md:text-[13px] text-[rgba(204,204,204,1)] px-2 py-1 rounded-xl border-[rgba(255,255,255,0.05)] border-solid">
            <div className="flex items-center justify-center gap-1 md:gap-2">
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