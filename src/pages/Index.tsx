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
    <div className="bg-[rgba(5,5,5,1)] min-h-screen overflow-hidden px-[50px] py-[30px] rounded-[40px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[58%] max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[43%] max-md:w-full max-md:ml-0">
                  <div className="grow max-md:mt-3">
                    <TechStack />
                    <ProjectsCard />
                  </div>
                </div>
                <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="w-full max-md:max-w-full max-md:mt-3">
                    <StatsCard />
                    <ProfileCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[43%] max-md:w-full max-md:ml-0">
                  <ServicesCard />
                </div>
                <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-[rgba(16,16,16,1)] border relative flex grow flex-col overflow-hidden items-stretch w-full pt-5 pb-[30px] rounded-[20px] border-[rgba(255,255,255,0.05)] border-solid max-md:max-w-full max-md:mt-3">
                    {/* Clients section */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-3/5 max-md:w-full max-md:ml-0">
                  <TestimonialsCard />
                </div>
                <div className="w-2/5 ml-5 max-md:w-full max-md:ml-0">
                  <WorkflowCard />
                </div>
              </div>
            </div>
            <div className="mt-3 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[39%] max-md:w-full max-md:ml-0">
                  <SocialCard />
                </div>
                <div className="w-[61%] ml-5 max-md:w-full max-md:ml-0">
                  <ContactCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;