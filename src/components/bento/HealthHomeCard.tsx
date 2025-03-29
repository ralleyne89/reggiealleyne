
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HeartPulse, Users, BarChart2 } from 'lucide-react';

const HealthHomeCard = () => {
  return (
    <div className="w-full bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-[rgba(145,108,231,0.3)] transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)]">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#333333] p-1.5 rounded-md">
            <HeartPulse className="w-4 h-4 text-[#916CE7]" />
          </div>
          <h2 className="text-xl font-bold text-[rgba(230,230,230,1)]">Health@Home Platform</h2>
        </div>
        
        <p className="text-[rgba(153,153,153,1)] mb-4 text-sm">
          A comprehensive telehealth solution for Blue Shield of California, enabling remote patient monitoring during COVID-19.
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[rgba(25,25,25,1)] rounded-lg p-3 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-3.5 h-3.5 text-[#916CE7]" />
              <span className="text-xs font-medium text-[rgba(230,230,230,1)]">Challenge</span>
            </div>
            <p className="text-xs text-[rgba(153,153,153,1)]">
              Rapidly develop an intuitive telehealth platform during pandemic
            </p>
          </div>
          
          <div className="bg-[rgba(25,25,25,1)] rounded-lg p-3 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="w-3.5 h-3.5 text-[#916CE7]" />
              <span className="text-xs font-medium text-[rgba(230,230,230,1)]">Impact</span>
            </div>
            <p className="text-xs text-[rgba(153,153,153,1)]">
              42% increase in patient engagement, 28% reduction in readmissions
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="bg-[rgba(25,25,25,1)] text-xs px-2.5 py-1 rounded-full font-medium text-[rgba(204,204,204,1)]">
              Enterprise UX
            </span>
            <span className="bg-[rgba(25,25,25,1)] text-xs px-2.5 py-1 rounded-full font-medium text-[rgba(204,204,204,1)]">
              Healthcare
            </span>
          </div>
          <Link 
            to="/project/health-at-home"
            className="text-[#916CE7] flex items-center gap-1 text-sm hover:underline"
          >
            View case study <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeCard;
