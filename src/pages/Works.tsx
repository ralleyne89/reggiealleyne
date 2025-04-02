
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getAllProjects } from '@/services/api';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';
import useScrollReveal from '@/hooks/useScrollReveal';

const Works = () => {
  const navigate = useNavigate();
  const headerReveal = useScrollReveal();
  const projectsReveal = useScrollReveal({ threshold: 0.1 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        console.log('Fetching all projects');
        const projects = await getAllProjects();
        console.log('Fetched projects:', projects);
        return projects;
      } catch (err) {
        console.error('Error fetching projects:', err);
        throw err;
      }
    },
    retry: 1
  });

  // Handle project navigation
  const handleProjectClick = (project) => {
    if (!project) {
      toast.error("Project information is missing");
      return;
    }
    
    console.log("Navigating to project:", project.title, "with ID:", project.id, "and slug:", project.slug);
    
    // Navigate to the project using its slug if available
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] subtle-pattern text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-32 bg-gray-700/50 rounded"></div>
            <div className="h-12 w-64 bg-gray-700/50 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-gray-700/30 rounded-xl backdrop-blur-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error('Projects error:', error);
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] subtle-pattern text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500">Error loading projects: {error instanceof Error ? error.message : 'Unknown error'}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-purple to-teal text-white rounded-lg hover:shadow-glow transition-all duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Process the projects array to remove duplicates and ensure validity
  const uniqueProjects = projects ? 
    projects.filter((project, index, self) =>
      project && project.title && index === self.findIndex((p) => p?.title === project?.title)
    ) : [];

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] subtle-pattern text-white">
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div {...headerReveal} className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-white bg-purple/20 px-4 py-2 rounded-full border border-purple/30 hover:bg-purple/40 transition-all duration-300 hover:shadow-glow"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-display font-bold mt-4 text-transparent bg-gradient-to-r from-white via-white to-white/70 bg-clip-text">Works Gallery</h1>
            <p className="text-[rgba(180,180,180,1)] mt-2">A collection of my recent projects and works</p>
          </div>

          <div {...projectsReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueProjects && uniqueProjects.length > 0 ? (
              uniqueProjects.map((project, index) => (
                project && (
                  <div 
                    key={project.id}
                    className="glass-card border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-purple/30 hover:shadow-glow hover:-translate-y-2 cursor-pointer h-full flex flex-col transform"
                    onClick={() => handleProjectClick(project)}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        onError={(e) => {
                          console.error(`Image failed to load: ${project.image}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,0.9)] to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-display font-semibold mb-2 text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">{project.title}</h3>
                      <p className="text-[rgba(180,180,180,1)] mb-4 line-clamp-3 flex-grow leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-purple/10 to-purple/20 border border-purple/20 rounded-full text-white truncate max-w-[100px] transition-all duration-300 hover:border-purple/40"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags && project.tags.length > 3 && (
                          <span className="px-3 py-1 text-sm bg-gradient-to-r from-teal/10 to-teal/20 border border-teal/20 rounded-full text-white transition-all duration-300 hover:border-teal/40">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-xl text-gray-400">No projects found</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
