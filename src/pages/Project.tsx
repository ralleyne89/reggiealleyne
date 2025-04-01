
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Determine if we're on the wristband page
  const isWristband = location.pathname.includes('wristband');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project', id || (isWristband ? 'wristband' : '')],
    queryFn: async () => {
      try {
        console.log("Fetching project with ID:", id, "isWristband:", isWristband);
        if (isWristband) {
          return await getProject('wristband');
        } else if (id) {
          return await getProject(id);
        } else {
          throw new Error("No project ID or slug provided");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
        throw err;
      }
    },
    retry: 1,
  });

  console.log("Project data:", project);
  console.log("Project ID:", id);
  console.log("Is Wristband:", isWristband);
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

  // Ensure the project has all required fields before rendering
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
      {projectWithDefaults.techStack?.length > 0 && (
        <div className="bg-[rgba(16,16,16,1)] border-b border-[rgba(255,255,255,0.1)] py-4">
          <div className="max-w-7xl mx-auto px-6">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="bg-transparent border border-[rgba(255,255,255,0.1)]">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                >
                  All
                </TabsTrigger>
                {projectWithDefaults.techStack?.map((tech) => (
                  <TabsTrigger 
                    key={tech}
                    value={tech}
                    className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                  >
                    {tech}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      )}
      
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
