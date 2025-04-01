
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectDeliverables from '../components/project/ProjectDeliverables';
import ProjectConclusion from '../components/project/ProjectConclusion';
import Footer from '@/components/layout/Footer';
import { getProject } from '../services/api';

const Project = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', slug],
    queryFn: async () => {
      try {
        console.log("Fetching project with slug:", slug);
        if (slug) {
          return await getProject(slug);
        } else {
          throw new Error("No project slug provided");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        throw err;
      }
    },
    retry: 1,
  });

  console.log("Project data:", project);
  console.log("Project slug:", slug);
  console.log("Error:", error);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#9b87f5] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-xl">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    console.error("Project error:", error);
    return (
      <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Project not found</p>
        <p className="text-gray-400 mb-6">Error: {error instanceof Error ? error.message : "Unable to load project data"}</p>
        <button 
          onClick={() => navigate('/works')}
          className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#7E69AB] transition-colors"
        >
          Go back to Works
        </button>
      </div>
    );
  }

  const projectWithDefaults = {
    ...project,
    conclusion: project.conclusion || {
      impact: null,
      learnings: null,
      nextSteps: null
    },
    tags: project.tags || [],
    techStack: project.techStack || []
  };

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">      
      <ProjectHeader 
        image={projectWithDefaults.image}
        tags={projectWithDefaults.tags || []}
        title={projectWithDefaults.title}
        description={projectWithDefaults.description}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <ProjectDetails 
          role={projectWithDefaults.role}
          duration={projectWithDefaults.duration}
          year={projectWithDefaults.year}
          teamSize={projectWithDefaults.teamSize || ""}
          methodologies={projectWithDefaults.methodologies || []}
          githubUrl={projectWithDefaults.githubUrl}
          liveUrl={projectWithDefaults.liveUrl}
          summary={projectWithDefaults.summary || projectWithDefaults.description}
          problem={projectWithDefaults.problemSolved || ""}
          solution={projectWithDefaults.solution || ""}
        />
        
        <ProjectProcess 
          challenge={projectWithDefaults.challenge || ''}
          process={projectWithDefaults.process || []}
          problemSolved={projectWithDefaults.problemSolved || ''}
          technicalHighlights={projectWithDefaults.technicalHighlights || []}
          keyAchievements={projectWithDefaults.keyAchievements || []}
        />
        
        <ProjectDeliverables 
          deliverables={projectWithDefaults.deliverables || []}
          images={projectWithDefaults.images || []}
          projectId={projectWithDefaults.slug || projectWithDefaults.id}
        />
      </div>

      <ProjectConclusion conclusion={{
        impact: projectWithDefaults.conclusion?.impact || "The project had a significant positive impact on users.",
        learnings: projectWithDefaults.conclusion?.learnings || "We learned valuable lessons about user experience and implementation.",
        nextSteps: projectWithDefaults.conclusion?.nextSteps || "Next steps include expanding features and improving performance."
      }} />
      <Footer />
    </div>
  );
};

export default Project;
