
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart2, Zap, Users } from 'lucide-react';

const HealthHomeProjectCard = () => {
  return (
    <div className="w-full bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)] mb-4">Health@Home Platform</h2>
        <p className="text-[rgba(153,153,153,1)] mb-6">
          A comprehensive telehealth platform for Blue Shield of California, designed to improve patient monitoring and care management during the pandemic.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[rgba(25,25,25,1)] rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#333333] p-1.5 rounded-md">
                <Zap className="w-4 h-4 text-[#916CE7]" />
              </div>
              <span className="text-sm font-medium text-[rgba(230,230,230,1)]">Challenge</span>
            </div>
            <p className="text-xs text-[rgba(153,153,153,1)]">
              Rapidly develop an intuitive telehealth platform during COVID-19 to support remote patient monitoring.
            </p>
          </div>
          
          <div className="bg-[rgba(25,25,25,1)] rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#333333] p-1.5 rounded-md">
                <Users className="w-4 h-4 text-[#916CE7]" />
              </div>
              <span className="text-sm font-medium text-[rgba(230,230,230,1)]">Solution</span>
            </div>
            <p className="text-xs text-[rgba(153,153,153,1)]">
              User-centered design approach with rapid prototyping and iterative testing to create an accessible interface.
            </p>
          </div>
          
          <div className="bg-[rgba(25,25,25,1)] rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#333333] p-1.5 rounded-md">
                <BarChart2 className="w-4 h-4 text-[#916CE7]" />
              </div>
              <span className="text-sm font-medium text-[rgba(230,230,230,1)]">Impact</span>
            </div>
            <p className="text-xs text-[rgba(153,153,153,1)]">
              42% increase in patient engagement and 28% reduction in hospital readmissions.
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
            className="text-[#916CE7] flex items-center gap-1 hover:underline"
          >
            View case study <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeProjectCard;
