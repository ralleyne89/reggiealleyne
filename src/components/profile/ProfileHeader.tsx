
import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Briefcase, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const titles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Graphic Designer"
];

const ProfileHeader = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full gap-[15px] flex-col sm:flex-row justify-between items-center">
      <div className="flex gap-5 items-center">
        <div className="relative w-[101px] h-[101px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple to-teal rounded-lg opacity-75 blur-sm animate-pulse-slow"></div>
          <img
            loading="lazy"
            src="/lovable-uploads/1686931266900.jpeg"
            className="relative aspect-square object-cover w-full h-full rounded-lg z-10"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[rgba(230,230,230,1)] text-[28px] font-bold font-display leading-none">
            Reggie Alleyne
          </h1>
          <div className="flex items-center gap-1 text-sm mt-2.5">
            <span className="text-[rgba(153,153,153,1)] font-medium">
              I'm a
            </span>
            <div className="relative h-6 overflow-hidden" style={{ minWidth: '160px' }}>
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="absolute inset-x-0 transition-all duration-500 ease-in-out text-transparent bg-gradient-to-r from-purple to-teal-light bg-clip-text font-semibold whitespace-nowrap"
                  style={{
                    transform: `translateY(${(index - currentTitleIndex) * 100}%)`,
                    opacity: index === currentTitleIndex ? 1 : 0
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-[rgba(153,153,153,1)]">
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-purple" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={12} className="text-teal" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4 sm:mt-0">
        <div className="glass-card flex items-center gap-2 text-sm text-[rgba(180,180,180,1)] px-4 py-2 rounded-[40px] whitespace-nowrap">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-teal animate-pulse-slow"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full border border-teal animate-ping"></div>
          </div>
          <span className="ml-2">Available To Work</span>
        </div>
        <Link 
          to="/works"
          className="bg-gradient-to-r from-purple to-teal hover:from-purple-dark hover:to-teal-dark flex items-center gap-1 text-sm text-white px-4 py-2 rounded-[40px] whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-glow"
        >
          <span>Portfolio</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
