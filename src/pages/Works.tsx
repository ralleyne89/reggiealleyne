
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import Footer from '@/components/layout/Footer';

const Works = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getAllProjects
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-32 bg-gray-700 rounded"></div>
            <div className="h-12 w-64 bg-gray-700 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-700 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500">Error loading projects: {error.message}</p>
        </div>
      </div>
    );
  }

  // Filter out project 0 (Health@Home) as we have a dedicated card for it
  const filteredProjects = projects?.filter(project => project.id !== 0) || [];

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mt-4 text-[rgba(230,230,230,1)]">Works Gallery</h1>
            <p className="text-[rgba(153,153,153,1)] mt-2">A collection of my recent projects and works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate('/project/health-at-home')}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Health@Home Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,1)] to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgba(230,230,230,1)]">Health@Home Platform</h3>
                <p className="text-[rgba(153,153,153,1)] mb-4">Designing a comprehensive telehealth solution for Blue Shield of California to enable remote patient monitoring and care.</p>
                <div className="flex flex-wrap gap-2">
                  <span 
                    className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
                  >
                    Healthcare
                  </span>
                  <span 
                    className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
                  >
                    Enterprise UX
                  </span>
                  <span 
                    className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
                  >
                    Telehealth
                  </span>
                </div>
              </div>
            </div>
            
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,1)] to-transparent opacity-50"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[rgba(230,230,230,1)]">{project.title}</h3>
                  <p className="text-[rgba(153,153,153,1)] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
