import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectDeliverables from '../components/project/ProjectDeliverables';
import ProjectConclusion from '../components/project/ProjectConclusion';
import Footer from '@/components/layout/Footer';
import { getProject } from '../services/api';

const Project = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(Number(id)),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white flex items-center justify-center">
        <p className="text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">
      <ProjectHeader 
        image={project.image}
        tags={project.tags}
        title={project.title}
        description={project.description}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <ProjectDetails 
          role={project.role}
          duration={project.duration}
          year={project.year}
        />
        
        <ProjectProcess 
          challenge={project.challenge}
          process={project.process}
        />
        
        <ProjectDeliverables 
          deliverables={project.deliverables}
          images={project.images}
        />
      </div>

      <ProjectConclusion conclusion={project.conclusion} />
      <Footer />
    </div>
  );
};

export default Project;