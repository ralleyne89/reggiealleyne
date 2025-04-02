
import React from 'react';
import { ProjectType } from '@/types/project';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Lightbulb, Clock, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BentoProjectsGridProps {
  projects?: ProjectType[];
  isLoading: boolean;
  error: Error | null;
}

const BentoProjectsGrid = ({ projects, isLoading, error }: BentoProjectsGridProps) => {
  const navigate = useNavigate();
  
  if (error) {
    return (
      <div className="w-full bg-[rgba(16,16,16,1)] border rounded-xl p-5 border-[rgba(255,255,255,0.06)]">
        <p className="text-red-500">Failed to load projects</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
        <Skeleton className="md:col-span-8 h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl" />
        <Skeleton className="md:col-span-4 h-[200px] sm:h-[220px] rounded-xl" />
        <Skeleton className="md:col-span-4 h-[200px] sm:h-[220px] rounded-xl" />
      </div>
    );
  }

  const featuredProjectIds = [0, 1, 2]; // Health@Home, CLLCTVE Platform, and Tutor D
  
  const featuredProjects = featuredProjectIds
    .map(id => projects?.find(project => project.id === id))
    .filter(project => project !== undefined) as ProjectType[];
  
  const handleProjectClick = (project: ProjectType, e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Bento - Navigating to project:", project.title, "with ID:", project.id, "and slug:", project.slug);
    
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <motion.div 
      className="grid w-full grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onClick={(e) => handleProjectClick(project, e)}
          className={`group w-full bg-[rgba(16,16,16,1)] border relative overflow-hidden rounded-xl border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] cursor-pointer ${
            index === 0 
              ? 'md:col-span-8 lg:row-span-2' 
              : 'md:col-span-4'
          } ${
            index === 0 
              ? 'h-[300px] sm:h-[400px] lg:h-[450px]' 
              : 'h-[200px] sm:h-[220px]'
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${index === 0 ? 'opacity-50 group-hover:opacity-30' : 'opacity-40 group-hover:opacity-25'}`}
            />
            <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-t from-[rgba(16,16,16,1)] via-[rgba(16,16,16,0.85)] to-transparent' : 'bg-gradient-to-t from-[rgba(16,16,16,1)] via-[rgba(16,16,16,0.8)] to-transparent'}`}></div>
          </div>

          <div className="relative z-10 p-4 sm:p-6 h-full w-full flex flex-col justify-between">
            <div className="w-full">
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                {project.tags?.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className={`${index === 0 ? 'bg-[rgba(145,108,231,0.2)]' : 'bg-[rgba(25,25,25,0.8)]'} text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`${index === 0 ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-bold text-[rgba(230,230,230,1)] mb-2`}>{project.title}</h3>
              <p className="text-sm sm:text-base text-[rgba(153,153,153,1)] line-clamp-2 mb-4">{project.description}</p>
            </div>

            <div className="space-y-3 w-full">
              {index === 0 && (
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[rgba(145,108,231,0.15)] rounded-lg p-3 flex items-center gap-2">
                    <div className="bg-[rgba(145,108,231,0.3)] p-1.5 rounded-md">
                      <Lightbulb className="w-4 h-4 text-[#916CE7]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[rgba(153,153,153,1)]">Problem</span>
                      <span className="text-sm text-[rgba(230,230,230,1)] truncate">Remote healthcare</span>
                    </div>
                  </div>
                  <div className="bg-[rgba(145,108,231,0.15)] rounded-lg p-3 flex items-center gap-2">
                    <div className="bg-[rgba(145,108,231,0.3)] p-1.5 rounded-md">
                      <Clock className="w-4 h-4 text-[#916CE7]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[rgba(153,153,153,1)]">Timeline</span>
                      <span className="text-sm text-[rgba(230,230,230,1)] truncate">{project.duration}</span>
                    </div>
                  </div>
                  <div className="bg-[rgba(145,108,231,0.15)] rounded-lg p-3 flex items-center gap-2">
                    <div className="bg-[rgba(145,108,231,0.3)] p-1.5 rounded-md">
                      <Users className="w-4 h-4 text-[#916CE7]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[rgba(153,153,153,1)]">Team</span>
                      <span className="text-sm text-[rgba(230,230,230,1)] truncate max-w-full">{project.teamSize}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between w-full">
                <span className="text-xs sm:text-sm text-[rgba(153,153,153,1)] truncate max-w-[70%]">{project.role}</span>
                <span className={`${index === 0 ? 'bg-[rgba(145,108,231,0.2)]' : 'bg-[rgba(145,108,231,0.1)]'} text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium`}>
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BentoProjectsGrid;
