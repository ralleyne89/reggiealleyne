
import React from 'react';
import { Star } from 'lucide-react';
import { ProjectType } from '@/types/project';
import { Skeleton } from '@/components/ui/skeleton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FeaturedProjectsProps {
  projects?: ProjectType[];
  isLoading: boolean;
  error: Error | null;
}

const FeaturedProjects = ({ projects, isLoading, error }: FeaturedProjectsProps) => {
  const navigate = useNavigate();

  if (error) {
    return (
      <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid">
        <p className="text-red-500">Error loading projects</p>
      </div>
    );
  }

  // Define the specific projects to show (Tutor D and Tech Noir)
  const featuredProjectIds = [2, 3]; // Tutor D and Tech Noir
  
  // Filter to get only the specified projects in the right order
  const featuredProjects = featuredProjectIds
    .map(id => projects?.find(project => project.id === id))
    .filter(project => project !== undefined) as ProjectType[];

  const handleProjectClick = (project: ProjectType) => {
    console.log("Featured - Navigating to project:", project.title, "with ID:", project.id, "and slug:", project.slug);
    
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)]">
      <div className="space-y-4 w-full">
        {isLoading ? (
          <>
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="bg-[rgba(20,20,20,1)] border p-4 rounded-xl border-[rgba(255,255,255,0.05)] border-solid hover:bg-[rgba(25,25,25,1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in cursor-pointer w-full"
                style={{ animationDelay: `${index * 150}ms` }}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="flex gap-5 w-full">
                  <div className="relative group w-32 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[rgba(230,230,230,1)] text-base font-semibold truncate">
                      {project.title}
                    </h3>
                    <p className="text-[rgba(153,153,153,1)] text-sm mt-1.5 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {project.tags?.slice(0, 2).map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-[rgba(145,108,231,0.1)] text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjects;
