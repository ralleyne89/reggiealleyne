
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectDetails from '../components/project/ProjectDetails';
import ProjectProcess from '../components/project/ProjectProcess';
import ProjectDeliverables from '../components/project/ProjectDeliverables';
import ProjectConclusion from '../components/project/ProjectConclusion';
import Footer from '@/components/layout/Footer';
import { getProject } from '../services/api';
import { toast } from 'sonner';

const Project = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', slug],
    queryFn: async () => {
      try {
        console.log("Fetching project with slug:", slug);
        if (slug) {
          const fetchedProject = await getProject(slug);
          console.log("Fetched project details:", fetchedProject);
          
          if (!fetchedProject) {
            throw new Error(`Project with slug "${slug}" not found`);
          }
          
          return fetchedProject;
        } else {
          throw new Error("No project slug provided");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        throw err;
      }
    },
    retry: 1
  });

  // Handle error separately
  React.useEffect(() => {
    if (error) {
      console.error("Project fetch error:", error);
      toast.error(`Failed to load project: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }, [error]);

  console.log("Project data:", project);
  console.log("Project path params:", slug);

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
    techStack: project.techStack || [],
    process: project.process || [],
    deliverables: project.deliverables || [],
    images: project.images || []
  };
  
  // Determine if there's a prototype URL - try different possible locations
  const prototypeUrl = projectWithDefaults.figmaUrl || 
                      (projectWithDefaults.id === 0 ? "https://bs-hh.netlify.app/" : null);

  // Use either challenge or problemSolved, not both
  const challengeText = projectWithDefaults.challenge || projectWithDefaults.problemSolved || '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(5,5,5,1)] to-[rgba(10,10,15,1)] text-white">      
      <ProjectHeader 
        image={projectWithDefaults.image}
        tags={projectWithDefaults.tags}
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
          prototypeUrl={prototypeUrl}
          summary={projectWithDefaults.summary || projectWithDefaults.description}
          problem={projectWithDefaults.problemSolved || ""}
          solution={projectWithDefaults.solution || ""}
        />
        
        <ProjectProcess 
          challenge={challengeText}
          process={projectWithDefaults.process || []}
          problemSolved={""} // Removed the duplication
          technicalHighlights={projectWithDefaults.technicalHighlights || []}
          keyAchievements={projectWithDefaults.keyAchievements || []}
        />
        
        <ProjectDeliverables 
          deliverables={projectWithDefaults.deliverables || []}
          images={projectWithDefaults.images || []}
          projectId={projectWithDefaults.slug || projectWithDefaults.id}
        />
      </div>

      <ProjectConclusion 
        conclusion={{
          impact: projectWithDefaults.conclusion?.impact || "The project had a significant positive impact on users.",
          learnings: projectWithDefaults.conclusion?.learnings || "We learned valuable lessons about user experience and implementation.",
          nextSteps: projectWithDefaults.conclusion?.nextSteps || "Next steps include expanding features and improving performance."
        }}
        prototypeUrl={prototypeUrl}
        liveUrl={projectWithDefaults.liveUrl}
      />
      <Footer />
    </div>
  );
};

export default Project;
