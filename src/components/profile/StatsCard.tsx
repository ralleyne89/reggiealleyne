
import React from 'react';
import { Database, Users, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';

const StatsCard = () => {
  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  });

  const stats = [
    { 
      label: 'Projects', 
      value: '100', 
      icon: <Database className="w-4 h-4 text-[#916CE7]" /> 
    },
    { 
      label: 'UI/UX Solutions', 
      value: '30', 
      icon: <Users className="w-4 h-4 text-[#916CE7]" /> 
    },
    { 
      label: 'Years', 
      value: '12', 
      icon: <Calendar className="w-4 h-4 text-[#916CE7]" /> 
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map(({ label, value, icon }, index) => (
        <div 
          key={index} 
          className="bg-[rgba(16,16,16,1)] border flex flex-col items-center p-4 rounded-xl border-[rgba(255,255,255,0.05)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 animate-fade-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex items-center text-[30px] md:text-[45px] text-[rgba(230,230,230,1)] font-semibold mb-2">
            <div>{value}</div>
            <div className="text-[20px] md:text-[30px] text-[#916CE7] ml-1">+</div>
          </div>
          <div className="bg-[rgba(25,25,25,1)] border w-full text-[11px] md:text-[13px] text-[rgba(204,204,204,1)] px-3 py-2 rounded-xl border-[rgba(255,255,255,0.05)] border-solid">
            <div className="flex items-center justify-center gap-2">
              {icon}
              <span className="font-medium">{label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
