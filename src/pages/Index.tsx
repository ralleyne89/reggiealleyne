
import React from 'react';
import ProfileCard from '@/components/profile/ProfileCard';
import BentoProjectsGrid from '@/components/bento/BentoProjectsGrid';
import SocialCard from '@/components/profile/SocialCard';
import ContactCard from '@/components/profile/ContactCard';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';

const Index = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  });

  return (
    <div className="bg-[rgba(5,5,5,1)] min-h-screen w-full overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[50px] py-6 md:py-[30px]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Value Proposition Hero Section */}
          <div className="relative w-full bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 lg:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(145,108,231,0.15)] to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(230,230,230,1)] mb-6">
                <span className="block">UX Designer specializing in</span>
                <span className="text-[#916CE7]">enterprise solutions with measurable impact.</span>
              </h1>
              <p className="text-[rgba(204,204,204,1)] text-lg md:text-xl">
                I transform complex problems into intuitive experiences that drive business growth and delight users.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="bg-[rgba(145,108,231,1)] text-white font-medium px-6 py-3 rounded-xl hover:bg-[rgba(125,88,211,1)] transition-all duration-300"
                >
                  View Case Studies
                </a>
                <a 
                  href="/works" 
                  className="bg-[rgba(25,25,25,1)] text-[rgba(230,230,230,1)] font-medium px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(30,30,30,1)] hover:border-[rgba(145,108,231,0.3)] transition-all duration-300"
                >
                  Full Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Bento Grid Projects */}
          <div id="projects">
            <BentoProjectsGrid projects={projects} isLoading={isLoading} error={error} />
          </div>

          {/* Profile and Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <ProfileCard />
            </div>
            <div className="space-y-5">
              <SocialCard />
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
