import React, { useEffect, useState } from 'react';
import { Download, MapPin, Layout, Palette, GraduationCap, Clock, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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

  const handleResumeDownload = async () => {
    try {
      const fileName = 'Reginald Alleyne Resume 2025';
      
      // First check if the file exists
      const { data: fileExists } = await supabase
        .storage
        .from('documents')
        .list('', {
          limit: 1,
          search: fileName
        });

      if (!fileExists || fileExists.length === 0) {
        toast.error('Resume is currently unavailable. Please try again later.');
        return;
      }

      const { data, error } = await supabase.storage
        .from('documents')
        .download(fileName);

      if (error) {
        throw error;
      }

      // Create a URL for the downloaded blob
      const url = window.URL.createObjectURL(data);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'reggie-alleyne-resume.pdf';
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup the blob URL
      window.URL.revokeObjectURL(url);
      
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Failed to download resume. Please try again later.');
    }
  };

  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full max-w-[463px] p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1">
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