
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from '@/types/project';

interface ProjectCardProps {
  project: ProjectType;
  onProjectClick: (project: ProjectType) => void;
}

const ProjectCard = ({ project, onProjectClick }: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-secondary border border-gray-800 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
      onClick={() => onProjectClick(project)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-52">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            console.error(`Image failed to load: ${project.image}`);
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
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
        
        <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{project.year}</span>
          <span className="text-primary text-sm font-medium">View Project</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
