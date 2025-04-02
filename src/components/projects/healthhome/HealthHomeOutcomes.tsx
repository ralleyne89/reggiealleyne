
import React from 'react';
import { BarChart2, Clock, Users, CheckCircle } from 'lucide-react';

const HealthHomeOutcomes = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Key Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
          <div className="flex justify-center mb-2">
            <BarChart2 className="w-8 h-8 text-[#9b87f5]" />
          </div>
          <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">42%</h3>
          <p className="text-sm text-[rgba(153,153,153,1)]">Increase in patient engagement</p>
        </div>
        
        <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
          <div className="flex justify-center mb-2">
            <CheckCircle className="w-8 h-8 text-[#9b87f5]" />
          </div>
          <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">28%</h3>
          <p className="text-sm text-[rgba(153,153,153,1)]">Reduction in hospital readmissions</p>
        </div>
        
        <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
          <div className="flex justify-center mb-2">
            <Users className="w-8 h-8 text-[#9b87f5]" />
          </div>
          <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">25k+</h3>
          <p className="text-sm text-[rgba(153,153,153,1)]">Patients onboarded in first 3 months</p>
        </div>
        
        <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 text-center">
          <div className="flex justify-center mb-2">
            <Clock className="w-8 h-8 text-[#9b87f5]" />
          </div>
          <h3 className="text-2xl font-bold text-[rgba(230,230,230,1)]">93%</h3>
          <p className="text-sm text-[rgba(153,153,153,1)]">Satisfaction rating from healthcare providers</p>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeOutcomes;
