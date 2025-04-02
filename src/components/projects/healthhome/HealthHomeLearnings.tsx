
import React from 'react';

const HealthHomeLearnings = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Key Learnings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-[#9b87f5]">Accessibility is Non-Negotiable</h3>
          <p className="text-[rgba(153,153,153,1)]">
            Designing for a diverse patient population, including elderly users, reinforced the importance of accessible design patterns. Increased font sizes, simplified navigation, and high contrast ratios became essential design principles.
          </p>
        </div>
        <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3 text-[#9b87f5]">Data Visualization Matters</h3>
          <p className="text-[rgba(153,153,153,1)]">
            Clear visualization of health data proved crucial for both patients and providers. Simple, intuitive charts and indicators helped users quickly understand complex health information and identify trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeLearnings;
