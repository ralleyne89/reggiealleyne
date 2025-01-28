import React, { useEffect, useState } from 'react';
import { Download, MapPin, Layout, Palette, GraduationCap, Clock, Sparkles } from 'lucide-react';

const titles = [
  "UX/UI Designer",
  "Frontend Developer",
  "Graphic Designer"
];

const ProfileCard = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'reggie-alleyne-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full max-w-[463px] p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
      <div className="flex w-full gap-[15px] flex-col sm:flex-row">
        <img
          loading="lazy"
          src="/lovable-uploads/cb582645-1a6e-4846-8a2e-72b2dffd49a8.png"
          className="aspect-square object-cover w-[101px] shrink-0 rounded-lg mx-auto sm:mx-0"
          alt="Profile"
        />
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
              <div className="relative h-6 overflow-hidden" style={{ minWidth: '140px' }}>
                {titles.map((title, index) => (
                  <div
                    key={index}
                    className="absolute inset-x-0 transition-all duration-500 ease-in-out text-[rgba(145,108,231,1)] font-semibold"
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
      <div className="bg-[rgba(20,20,20,1)] border flex w-full gap-2.5 text-[13px] text-[rgba(204,204,204,1)] font-medium flex-wrap mt-[30px] p-3 rounded-xl border-[rgba(255,255,255,0.06)] border-solid">
        <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          <MapPin size={14} className="text-[#916CE7]" />
          Los Angeles
        </span>
        <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          <Layout size={14} className="text-[#916CE7]" />
          UX/UI Developer
        </span>
        <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          <Sparkles size={14} className="text-[#916CE7]" />
          Magic Maker
        </span>
        <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          <GraduationCap size={14} className="text-[#916CE7]" />
          Art Institute LA
        </span>
        <span className="bg-[rgba(25,25,25,1)] border flex items-center gap-1.5 px-2.5 py-1.5 rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid">
          <Clock size={14} className="text-[#916CE7]" />
          IST
        </span>
      </div>
      <div className="flex w-full gap-3 text-[13px] text-[rgba(204,204,204,1)] font-medium mt-[30px] flex-col sm:flex-row">
        <button 
          onClick={handleResumeDownload}
          className="bg-[rgba(31,31,31,1)] flex items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner"
        >
          <Download className="w-4 h-4 text-[#916CE7]" />
          <span>Resume</span>
        </button>
        <button className="bg-[rgba(31,31,31,1)] gap-2.5 flex-1 shrink px-2.5 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(40,40,40,1)] hover:scale-[1.02] hover:shadow-lg active:scale-95 active:shadow-inner">
          WhatsApp Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
