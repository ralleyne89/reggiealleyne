
import React, { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import ProjectHeader from '@/components/project/ProjectHeader';
import ProjectDetails from '@/components/project/ProjectDetails';
import ProjectProcess from '@/components/project/ProjectProcess';
import ProjectDeliverables from '@/components/project/ProjectDeliverables';
import ProjectConclusion from '@/components/project/ProjectConclusion';
import { getHealthHomeProject } from '@/services/api/projects/healthHome';

const HealthHomeProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the project data
  const project = getHealthHomeProject();

  // Determine if there's a prototype URL
  const prototypeUrl = project.figmaUrl || "https://bs-hh.netlify.app/";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(5,5,5,1)] to-[rgba(10,10,15,1)] text-white">
      <ProjectHeader 
        image={project.image}
        tags={project.tags || []}
        title={project.title}
        description={project.description}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <ProjectDetails 
          role={project.role}
          duration={project.duration}
          year={project.year}
          teamSize={project.teamSize || ""}
          methodologies={project.methodologies || []}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          prototypeUrl={prototypeUrl}
          summary={project.summary || project.description}
          problem={project.problemSolved || ""}
          solution={project.solution || ""}
        />
        
        <ProjectProcess 
          challenge={project.challenge || ""}
          process={project.process || []}
          problemSolved={""} // Removed the duplication
          technicalHighlights={project.technicalHighlights || []}
          keyAchievements={project.keyAchievements || []}
        />
        
        <ProjectDeliverables 
          deliverables={project.deliverables || []}
          images={project.images || []}
          projectId={project.slug || project.id}
        />
      </div>

      <ProjectConclusion 
        conclusion={{
          impact: project.conclusion?.impact || "The project had a significant positive impact on users.",
          learnings: project.conclusion?.learnings || "We learned valuable lessons about user experience and implementation.",
          nextSteps: project.conclusion?.nextSteps || "Next steps include expanding features and improving performance."
        }}
        prototypeUrl={prototypeUrl}
      />
      <Footer />
    </div>
  );
};

export default HealthHomeProject;
