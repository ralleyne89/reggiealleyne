import React, { useState, useEffect } from 'react';

const titles = [
  "UX/UI Designer",
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
    <div className="flex w-full gap-[15px] flex-col sm:flex-row">
      <div className="relative w-[101px] h-[101px] mx-auto sm:mx-0">
        <img
          loading="lazy"
          src="/lovable-uploads/cb582645-1a6e-4846-8a2e-72b2dffd49a8.png"
          className="aspect-square object-cover w-full h-full rounded-lg"
          alt="Profile"
        />
        <div className="absolute inset-0 rounded-lg border-2 border-[#9b87f5] glow-effect"></div>
      </div>
      <div className="flex flex-col items-stretch flex-1 shrink basis-[0%]">
        <div className="flex w-full justify-between items-center gap-2 flex-wrap">
          <div className="bg-[rgba(20,20,20,1)] border flex items-center gap-2 text-sm text-[rgba(153,153,153,1)] px-4 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid whitespace-nowrap">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 rounded-full border border-green-500 animate-ping"></div>
            </div>
            <span className="ml-2">Available To Work</span>
          </div>
        </div>
        <div className="mt-3">
          <h1 className="text-[rgba(230,230,230,1)] text-[22px] font-semibold leading-none">
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
                  className="absolute inset-x-0 transition-all duration-500 ease-in-out text-[rgba(145,108,231,1)] font-semibold whitespace-nowrap"
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
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;