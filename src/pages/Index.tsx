import React from 'react';
import ProfileCard from '@/components/profile/ProfileCard';
import StatsCard from '@/components/profile/StatsCard';
import TechStack from '@/components/profile/TechStack';
import ProjectsCard from '@/components/profile/ProjectsCard';
import ServicesCard from '@/components/profile/ServicesCard';
import TestimonialsCard from '@/components/profile/TestimonialsCard';
import WorkflowCard from '@/components/profile/WorkflowCard';
import SocialCard from '@/components/profile/SocialCard';
import ContactCard from '@/components/profile/ContactCard';

const Index = () => {
  return (
    <div 
      className="min-h-screen w-full overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-[50px] py-6 md:py-[30px]"
      style={{
        background: 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)',
        position: 'relative',
      }}
    >
      {/* Overlay pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Content container with backdrop blur */}
      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 backdrop-blur-sm bg-black/30 p-6">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-5">
              <TechStack />
              <ProjectsCard />
            </div>
            <div className="space-y-5">
              <StatsCard />
              <ProfileCard />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <ServicesCard />
            <div className="bg-[rgba(16,16,16,1)] border relative flex grow flex-col overflow-hidden items-stretch w-full pt-5 pb-[30px] border-[rgba(255,255,255,0.05)] border-solid">
              {/* Clients section */}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
            <div className="sm:col-span-3">
              <TestimonialsCard />
            </div>
            <div className="sm:col-span-2">
              <WorkflowCard />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 mt-5">
            <div className="sm:col-span-2">
              <SocialCard />
            </div>
            <div className="sm:col-span-3">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;