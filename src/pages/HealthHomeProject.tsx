
import React, { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
      {/* Header Section (similar to ProjectHeader) */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[rgba(5,5,5,1)]"></div>
        
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-6 transform -translate-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md font-heading">{project.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 mb-12 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-6">
            <Button 
              asChild
              variant="secondary" 
              className="bg-[rgba(20,20,20,0.8)] backdrop-blur-sm text-primary hover:bg-[rgba(30,30,30,0.8)] hover:text-white"
            >
              <Link to="/works">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Works
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags && project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-full text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
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
          problemSolved={""}
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
