
import React, { useEffect } from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import BentoProjectsGrid from '@/components/bento/BentoProjectsGrid';
import SocialCard from '@/components/profile/SocialCard';
import ContactCard from '@/components/profile/ContactCard';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import { Link, useNavigate } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  const navigate = useNavigate();
  
  const heroReveal = useScrollReveal();
  const projectsReveal = useScrollReveal({ threshold: 0.2 });
  const contactReveal = useScrollReveal({ threshold: 0.2 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        console.log('Fetching all projects from Index page');
        return await getAllProjects();
      } catch (err) {
        console.error('Error fetching projects from Index:', err);
        return []; // Return empty array to prevent UI crashes
      }
    },
    retry: 1
  });

  // Find the TECH NOIR project for the featured banner instead of WRISTBAND
  const techNoirProject = projects?.find(project => project.id === 3);

  const handleFeaturedProjectClick = () => {
    if (!techNoirProject) return;
    
    if (techNoirProject.slug) {
      navigate(`/project/${techNoirProject.slug}`);
    } else {
      navigate(`/project/${techNoirProject.id}`);
    }
  };

  return (
    <div className="bg-[rgba(5,5,5,1)] subtle-pattern min-h-screen w-full overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-[50px] py-6 md:py-[30px]">
        <div className="max-w-[1400px] mx-auto space-y-10">
          {/* Profile Header Section */}
          <div className="glass-card rounded-xl p-6 hover:border-purple/30 transition-all duration-300 hover:bg-[rgba(20,20,20,0.8)] hover:shadow-glow animate-fade-in">
            <ProfileHeader />
          </div>
          
          {/* Value Proposition Hero Section */}
          <div {...heroReveal} className="relative w-full glass-card rounded-xl p-8 lg:p-12 overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/10 to-teal/10 pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
                <span className="block text-white">UI/UX Designer specializing in</span>
                <span className="gradient-text">enterprise solutions with measurable impact.</span>
              </h1>
              <p className="text-[rgba(204,204,204,1)] text-lg md:text-xl leading-relaxed">
                I transform complex problems into intuitive experiences that drive business growth and delight users.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="bg-gradient-to-r from-purple to-teal text-white font-medium px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Case Studies
                </a>
                <Link 
                  to="/works" 
                  className="glass-card text-white font-medium px-6 py-3 rounded-xl border border-white/10 hover:border-purple/30 hover:shadow-glow transition-all duration-300"
                >
                  Full Portfolio
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-gradient-to-tl from-purple/30 to-teal/10 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          </div>

          {/* Bento Grid Projects */}
          <div id="projects" className="pt-4" {...projectsReveal}>
            <h2 className="text-2xl font-bold font-display gradient-text mb-6">Featured Case Studies</h2>
            <div className="w-full">
              <BentoProjectsGrid projects={projects || []} isLoading={isLoading} error={error} />
            </div>
          </div>

          {/* Contact and Social Section */}
          <div {...contactReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SocialCard />
            <ContactCard />
            <div className="lg:col-span-1 flex flex-col justify-center items-center glass-card rounded-xl p-6 border border-white/10 hover:border-purple/30 transition-all duration-300 hover:shadow-glow">
              <div className="w-full space-y-4">
                <div className="gradient-text text-xl font-semibold font-display text-center">Why I'm Your Ideal Candidate</div>
                <ul className="text-[rgba(204,204,204,1)] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-teal font-bold">•</span>
                    <span>10+ years experience in Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal font-bold">•</span>
                    <span>Proven track record of increasing user engagement and retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple font-bold">•</span>
                    <span>Skilled in cross-functional team collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple font-bold">•</span>
                    <span>Adapts to any situation to find a solution</span>
                  </li>
                </ul>
                <div className="flex justify-center pt-2">
                  <a 
                    href="mailto:reggiealleyne89@gmail.com" 
                    className="bg-gradient-to-r from-purple to-teal text-white font-medium px-6 py-3 rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
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
