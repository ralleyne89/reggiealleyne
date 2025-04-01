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
    if (!project) return;
    
    // Navigate to the project using its slug if available
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

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
    console.error('Projects error:', error);
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500">Error loading projects: {error instanceof Error ? error.message : 'Unknown error'}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#7E69AB] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Process the projects array to remove duplicates
  const uniqueProjects = projects ? 
    projects.filter((project, index, self) =>
      index === self.findIndex((p) => p?.title === project?.title)
    ) : [];

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
            {uniqueProjects && uniqueProjects.length > 0 ? (
              uniqueProjects.map((project) => (
                project && (
                  <div 
                    key={project.id}
                    className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="relative h-48">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error(`Image failed to load: ${project.image}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,1)] to-transparent opacity-50"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2 text-[rgba(230,230,230,1)]">{project.title}</h3>
                      <p className="text-[rgba(153,153,153,1)] mb-4 line-clamp-3 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags?.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5] truncate max-w-[100px]"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags && project.tags.length > 3 && (
                          <span className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[rgba(153,153,153,1)]">
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
