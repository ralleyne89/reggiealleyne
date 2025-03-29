
import React from 'react';
import { ProjectType } from '@/types/project';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Lightbulb, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BentoProjectsGridProps {
  projects?: ProjectType[];
  isLoading: boolean;
  error: Error | null;
}

const BentoProjectsGrid = ({ projects, isLoading, error }: BentoProjectsGridProps) => {
  if (error) {
    return (
      <div className="w-full bg-[rgba(16,16,16,1)] border rounded-xl p-5 border-[rgba(255,255,255,0.06)]">
        <p className="text-red-500">Failed to load projects</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <Skeleton className="h-[300px] sm:h-[400px] lg:h-[450px] lg:col-span-2 rounded-xl" />
        <Skeleton className="h-[200px] sm:h-[220px] rounded-xl" />
        <Skeleton className="h-[200px] sm:h-[220px] rounded-xl" />
      </div>
    );
  }

  const featuredProjects = projects?.slice(0, 3) || [];

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {featuredProjects.map((project, index) => (
        <Link
          key={project.id}
          to={`/project/${project.id}`}
          className={`group w-full bg-[rgba(16,16,16,1)] border relative overflow-hidden rounded-xl border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] ${
            index === 0 
              ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' 
              : ''
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
              className="w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,1)] via-[rgba(16,16,16,0.8)] to-transparent"></div>
          </div>

          <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                {project.tags?.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-[rgba(25,25,25,0.8)] text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[rgba(230,230,230,1)] mb-2">{project.title}</h3>
              <p className="text-sm sm:text-base text-[rgba(153,153,153,1)] line-clamp-2 mb-4">{project.description}</p>
            </div>

            <div className="space-y-3">
              {index === 0 && (
                <>
                  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-[rgba(25,25,25,0.8)] rounded-lg p-3 flex items-center gap-2">
                      <div className="bg-[#333333] p-1.5 rounded-md">
                        <Lightbulb className="w-4 h-4 text-[#916CE7]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-[rgba(153,153,153,1)]">Problem</span>
                        <span className="text-sm text-[rgba(230,230,230,1)] truncate">Inefficient workflow</span>
                      </div>
                    </div>
                    <div className="bg-[rgba(25,25,25,0.8)] rounded-lg p-3 flex items-center gap-2">
                      <div className="bg-[#333333] p-1.5 rounded-md">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-[rgba(153,153,153,1)]">Solution</span>
                        <span className="text-sm text-[rgba(230,230,230,1)] truncate">Streamlined UX</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex bg-[rgba(25,25,25,0.8)] rounded-lg p-3 items-center gap-2">
                    <div className="bg-[#333333] p-1.5 rounded-md">
                      <BarChart className="w-4 h-4 text-[#916CE7]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[rgba(153,153,153,1)]">Impact</span>
                      <span className="text-sm text-[rgba(230,230,230,1)]">32% increase in user satisfaction</span>
                    </div>
                  </div>
                </>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[rgba(153,153,153,1)]">{project.role}</span>
                <span className="bg-[rgba(145,108,231,0.1)] text-[#916CE7] text-xs px-2.5 py-1 rounded-full font-medium">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BentoProjectsGrid;
