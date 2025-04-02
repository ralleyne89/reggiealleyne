
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthHomeHeader = () => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        alt="Health@Home Platform"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(5,5,5,1)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 pt-20">
        <Link 
          to="/works" 
          className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]">
              Healthcare
            </span>
            <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]">
              Enterprise UX
            </span>
            <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]">
              Telehealth
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[rgba(230,230,230,1)]">Health@Home Platform</h1>
          <p className="text-xl text-[rgba(153,153,153,1)] max-w-3xl">
            Designing a comprehensive telehealth solution for Blue Shield of California to enable remote patient monitoring and care during the COVID-19 pandemic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeHeader;
