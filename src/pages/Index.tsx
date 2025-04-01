
import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import BentoProjectsGrid from '@/components/bento/BentoProjectsGrid';
import SocialCard from '@/components/profile/SocialCard';
import ContactCard from '@/components/profile/ContactCard';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  });

  // Find the TECH NOIR project for the featured banner instead of WRISTBAND
  const techNoirProject = projects?.find(project => project.id === 3);

  return (
    <div className="bg-[rgba(5,5,5,1)] min-h-screen w-full overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[50px] py-6 md:py-[30px]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Profile Header Section */}
          <div className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(145,108,231,0.3)] transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)]">
            <ProfileHeader />
          </div>
          
          {/* Value Proposition Hero Section */}
          <div className="relative w-full bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 lg:p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(145,108,231,0.15)] to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(230,230,230,1)] mb-6">
                <span className="block">UI/UX Designer specializing in</span>
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

          {/* Featured TECH NOIR Project instead of WRISTBAND */}
          {!isLoading && !error && techNoirProject && (
            <Link 
              to={`/project/${techNoirProject.slug || techNoirProject.id}`}
              className="relative w-full bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-[rgba(145,108,231,0.3)] transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] block"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                  <img 
                    src={techNoirProject.image} 
                    alt={techNoirProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent"></div>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-10">
                  <div className="flex gap-2 mb-3">
                    {techNoirProject.tags?.slice(0, 2).map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-[rgba(145,108,231,0.1)] text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[rgba(230,230,230,1)] mb-3">
                    {techNoirProject.title}
                  </h2>
                  <p className="text-[rgba(153,153,153,1)] md:text-lg mb-4">
                    {techNoirProject.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[rgba(153,153,153,1)]">
                    <span>{techNoirProject.role}</span>
                    <span className="bg-[rgba(145,108,231,0.1)] text-[#916CE7] px-2.5 py-1 rounded-full">
                      {techNoirProject.year}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Bento Grid Projects */}
          <div id="projects" className="pt-4">
            <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)] mb-6">Featured Case Studies</h2>
            <div className="w-full">
              <BentoProjectsGrid projects={projects} isLoading={isLoading} error={error} />
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SocialCard />
            <ContactCard />
            <div className="lg:col-span-1 flex flex-col justify-center items-center bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(145,108,231,0.3)] transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)]">
              <div className="w-full space-y-4">
                <div className="text-[rgba(230,230,230,1)] text-xl font-semibold text-center">Why I'm Your Ideal Candidate</div>
                <ul className="text-[rgba(204,204,204,1)] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#916CE7] font-bold">•</span>
                    <span>10+ years experience in Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#916CE7] font-bold">•</span>
                    <span>Proven track record of increasing user engagement and retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#916CE7] font-bold">•</span>
                    <span>Skilled in cross-functional team collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#916CE7] font-bold">•</span>
                    <span>Adapts to any situation to find a solution</span>
                  </li>
                </ul>
                <div className="flex justify-center pt-2">
                  <a 
                    href="mailto:hiring@example.com" 
                    className="bg-[rgba(145,108,231,1)] text-white font-medium px-6 py-3 rounded-xl hover:bg-[rgba(125,88,211,1)] transition-all duration-300"
                  >
                    Schedule Interview
                  </a>
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
