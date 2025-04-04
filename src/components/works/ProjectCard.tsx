
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from '@/types/project';
import { Eye, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectType;
  onProjectClick: (project: ProjectType) => void;
}

const ProjectCard = ({ project, onProjectClick }: ProjectCardProps) => {
  // Check if this is the Chill Vibes project
  const isChillVibesProject = project.title === "Chill Vibes Music Player";

  return (
    <div 
      className="h-full bg-[rgba(16,16,16,0.7)] backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
      onClick={() => onProjectClick(project)}
    >
      <div className="relative h-52">
        <img 
          src={isChillVibesProject ? "/placeholder.svg" : project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            console.error(`Image failed to load: ${project.image}`);
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,16,16,1)] via-transparent to-transparent"></div>
        
        <div className="absolute opacity-0 group-hover:opacity-100 inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
          <span className="bg-primary text-white font-medium px-4 py-2 rounded-full flex items-center gap-2">
            <Eye size={16} />
            View Case Study
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-primary/10 rounded-full text-primary"
            >
              {tag}
            </span>
          ))}
          {project.tags && project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-primary transition-colors flex items-center gap-2">
          {project.title}
          <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.year}</span>
          <span className="text-primary text-sm font-medium">
            {project.role || "UX/UI Designer"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
