
import React from 'react';

const HealthHomeDesignProcess = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
      
      <div className="border-l-2 border-[rgba(255,255,255,0.1)] pl-6 space-y-12 relative">
        <div className="relative">
          <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
          <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Research & Discovery</h3>
          <p className="text-[rgba(153,153,153,1)] mb-4">
            Conducted interviews with 15 healthcare providers and 30 patients to understand pain points in remote care. Created user personas and journey maps to identify opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
              <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Evidence-Based Decision</h4>
              <p className="text-sm text-[rgba(153,153,153,1)]">
                Patient interviews revealed 76% struggled with complex medical interfaces, leading to our simplified dashboard design.
              </p>
            </div>
            <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
              <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Key Insight</h4>
              <p className="text-sm text-[rgba(153,153,153,1)]">
                Healthcare providers needed quick access to patient vitals with visual trend indicators for faster decision making.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
          <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Wireframing & Prototyping</h3>
          <p className="text-[rgba(153,153,153,1)] mb-4">
            Created low-fidelity wireframes for key user flows, focusing on the patient dashboard, vital tracking, and video consultation features. Developed interactive prototypes for user testing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Wireframes"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Prototype"
              className="w-full h-[200px] object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
          <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Usability Testing & Iteration</h3>
          <p className="text-[rgba(153,153,153,1)] mb-4">
            Conducted 3 rounds of usability testing with 12 participants per round. Identified and resolved key usability issues, particularly around the vital sign submission flow and appointment scheduling.
          </p>
          <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
            <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Evidence-Based Iteration</h4>
            <p className="text-sm text-[rgba(153,153,153,1)]">
              Testing revealed 83% of users struggled with the original vital submission form. Redesigned with step-by-step guidance, reducing errors by 64%.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
          <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Final Design & Implementation</h3>
          <p className="text-[rgba(153,153,153,1)] mb-4">
            Delivered high-fidelity designs and a comprehensive design system. Worked closely with developers through implementation sprints, providing ongoing design support and QA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Final Design 1"
              className="w-full h-[150px] object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Final Design 2"
              className="w-full h-[150px] object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Final Design 3"
              className="w-full h-[150px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthHomeDesignProcess;
