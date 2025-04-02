
import React, { useState } from 'react';

const HealthHomePrototype = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="mb-16 flex justify-center">
      <a 
        href="https://bs-hh.netlify.app/" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-xl transition-all duration-500 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple to-teal transition-all duration-500 ease-out group-hover:scale-105"></span>
        <span className="absolute inset-0 w-full h-full backdrop-blur-3xl opacity-30 transition-opacity group-hover:opacity-0"></span>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-dark/50 to-teal-dark/50 scale-105 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-30"></span>
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
        
        <span className="relative flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          View Interactive Prototype
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default HealthHomePrototype;
