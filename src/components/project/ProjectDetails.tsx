
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import ProjectDetailsTabs from './details/ProjectDetailsTabs';
import ProjectOverviewTab from './details/ProjectOverviewTab';
import ProjectSolutionTab from './details/ProjectSolutionTab';
import ProjectDetailsTab from './details/ProjectDetailsTab';

interface ProjectDetailsProps {
  role: string;
  duration: string;
  year: string;
  teamSize?: string;
  methodologies?: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  prototypeUrl?: string | null;
  summary: string;
  problem?: string;
  solution?: string;
}

const ProjectDetails = ({ 
  role, 
  duration, 
  year, 
  teamSize,
  methodologies,
  githubUrl,
  liveUrl,
  prototypeUrl,
  summary,
  problem,
  solution
}: ProjectDetailsProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const hasProblemSolution = Boolean(problem && solution);

  return (
    <div className="mb-16">
      <Card className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
          <ProjectDetailsTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            hasProblemSolution={hasProblemSolution} 
          />
          
          <CardContent className="p-0">
            <ProjectOverviewTab 
              role={role}
              duration={duration}
              year={year}
              teamSize={teamSize}
              summary={summary}
              githubUrl={githubUrl}
              liveUrl={liveUrl}
              prototypeUrl={prototypeUrl}
            />
          
            {hasProblemSolution && (
              <ProjectSolutionTab 
                problem={problem || ""} 
                solution={solution || ""} 
              />
            )}
          
            <ProjectDetailsTab 
              duration={duration}
              year={year}
              teamSize={teamSize}
              role={role}
              methodologies={methodologies}
            />
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default ProjectDetails;
