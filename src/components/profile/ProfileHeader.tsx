
import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Briefcase, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const titles = [
  "Principal Designer",
  "Frontend Developer",
  "Design Strategist"
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
          <img
            loading="lazy"
            src="/lovable-uploads/1686931266900.jpeg"
            className="aspect-square object-cover w-full h-full rounded-lg"
            alt="Profile"
          />
          <div className="absolute inset-0 rounded-lg border-2 border-[#9b87f5] glow-effect"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[rgba(230,230,230,1)] text-[28px] font-semibold leading-none">
            Reggie Alleyne
          </h1>
          <div className="text-[rgba(145,108,231,1)] font-semibold mt-2.5">
            Bridging vision with code to create intuitive experiences
          </div>
          <div className="text-[rgba(153,153,153,1)] text-sm mt-1.5">
            Principal Designer with a coding habit, crafting thoughtful digital solutions in Healthcare and Education for over a decade.
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-[rgba(153,153,153,1)]">
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-[#9b87f5]" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={12} className="text-[#9b87f5]" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-[rgba(20,20,20,1)] border flex items-center gap-2 text-sm text-[rgba(153,153,153,1)] px-4 py-2 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid whitespace-nowrap">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full border border-green-500 animate-ping"></div>
          </div>
          <span className="ml-2">Available For Projects</span>
        </div>
        <Link 
          to="/works"
          className="bg-[rgba(20,20,20,1)] hover:bg-[rgba(30,30,30,1)] border flex items-center gap-1 text-sm text-[#9b87f5] px-4 py-2 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid whitespace-nowrap transition-colors duration-300"
        >
          <span>Portfolio</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
