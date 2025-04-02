
import React from 'react';

const HealthHomeTestimonial = () => {
  return (
    <div className="mb-16">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[rgba(255,255,255,0.1)]"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[rgba(5,5,5,1)] px-6 text-lg text-[#9b87f5] font-medium">
            Client Testimonial
          </span>
        </div>
      </div>

      <div className="mt-8 bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
        <blockquote className="italic text-lg text-[rgba(204,204,204,1)] mb-4">
          "The Health@Home platform has transformed how we deliver care during these challenging times. The intuitive design has allowed even our least tech-savvy patients to engage comfortably, while giving our providers the data they need to make informed decisions remotely."
        </blockquote>
        <div className="flex items-center">
          <div className="ml-4">
            <p className="text-[rgba(230,230,230,1)] font-medium">Dr. Samantha Johnson</p>
            <p className="text-[rgba(153,153,153,1)] text-sm">Director of Telehealth Services, Blue Shield of California</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeTestimonial;
