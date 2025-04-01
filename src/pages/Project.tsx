
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const [activeTab, setActiveTab] = useState<string>('all');
  
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
      {project.techStack && project.techStack.length > 0 && project.id !== 7 && (
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
        tags={project.tags}
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
          challenge={project.challenge}
          process={project.process}
          problemSolved={project.problemSolved}
          technicalHighlights={project.technicalHighlights}
          keyAchievements={project.keyAchievements}
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
