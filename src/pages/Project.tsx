
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
    queryFn: () => isWristband ? getProject('6') : getProject(id || ''),
    retry: 3
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
        <p className="text-gray-400 mb-6">Error: {error?.message || "Unable to load project data"}</p>
        <button 
          onClick={() => navigate('/works')}
          className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#7E69AB] transition-colors"
        >
          Go back to Works
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgba(5,5,5,1)] text-white">
      {project.techStack && project.techStack.length > 0 && (
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
                {project.techStack.map((tech) => (
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
          teamSize={project.teamSize}
          methodologies={project.methodologies}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          summary={project.summary}
          problem={project.problemSolved}
          solution={project.solution}
        />
        
        <ProjectProcess 
          challenge={project.challenge || ''}
          process={project.process || []}
          problemSolved={project.problemSolved}
          technicalHighlights={project.technicalHighlights}
          keyAchievements={project.keyAchievements}
        />
        
        <ProjectDeliverables 
          deliverables={project.deliverables || []}
          images={project.images || []}
        />
      </div>

      <ProjectConclusion conclusion={{
        impact: project.impact || "The project had a significant positive impact on users.",
        learnings: project.learnings || "We learned valuable lessons about user experience and implementation.",
        nextSteps: project.next_steps || "Next steps include expanding features and improving performance."
      }} />
      <Footer />
    </div>
  );
};

export default Project;
