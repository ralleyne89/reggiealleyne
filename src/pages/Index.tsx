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
import FeaturedProjects from '@/components/profile/FeaturedProjects';

const Index = () => {
  return (
    <div className="bg-[rgba(5,5,5,1)] min-h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[50px] py-6 md:py-[30px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-5 flex flex-col">
              <TechStack />
              <ProjectsCard />
              <ServicesCard />
            </div>
            <div className="space-y-5">
              <StatsCard />
              <ProfileCard />
              <FeaturedProjects />
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