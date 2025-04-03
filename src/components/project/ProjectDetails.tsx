
import { Link } from 'react-router-dom';
import ProjectBasicInfo from './details/ProjectBasicInfo';
import ProjectTeamInfo from './details/ProjectTeamInfo';
import ProjectTechInfo from './details/ProjectTechInfo';
import ProjectLinks from './details/ProjectLinks';
import ProjectProblem from './details/ProjectProblem';
import ProjectSolution from './details/ProjectSolution';

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
  return (
    <div className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-2/3">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Project Summary</h3>
            <p className="text-[rgba(153,153,153,1)]">{summary}</p>
          </div>
          
          {problem && (
            <ProjectProblem problem={problem} />
          )}

          {solution && (
            <ProjectSolution solution={solution} />
          )}
        </div>

        <div className="md:w-1/3 space-y-8">
          <ProjectBasicInfo role={role} duration={duration} year={year} />
          
          {teamSize && (
            <ProjectTeamInfo teamSize={teamSize} />
          )}

          {methodologies && methodologies.length > 0 && (
            <ProjectTechInfo methodologies={methodologies} />
          )}

          {(githubUrl || liveUrl || prototypeUrl) && (
            <ProjectLinks 
              githubUrl={githubUrl} 
              liveUrl={liveUrl}
              prototypeUrl={prototypeUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
