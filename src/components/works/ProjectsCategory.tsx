
import React from 'react';
import { ProjectType } from '@/types/project';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface ProjectsCategoryProps {
  categoryTitle: string;
  projects: ProjectType[];
  onProjectClick: (project: ProjectType) => void;
}

const ProjectsCategory = ({ categoryTitle, projects, onProjectClick }: ProjectsCategoryProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      className="mb-12"
    >
      <h2 className="text-2xl font-heading font-semibold mb-6 text-white">{categoryTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectClick={onProjectClick} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsCategory;
