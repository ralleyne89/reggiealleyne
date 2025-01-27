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
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Column 1 */}
        <div className="space-y-5">
          <ProfileCard />
          <TechStack />
          <ProjectsCard />
        </div>

        {/* Column 2 */}
        <div className="space-y-5">
          <StatsCard />
          <ServicesCard />
          <FeaturedProjects />
        </div>

        {/* Column 3 */}
        <div className="space-y-5">
          <TestimonialsCard />
          <div className="grid grid-cols-2 gap-5">
            <WorkflowCard />
            <SocialCard />
          </div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Index;