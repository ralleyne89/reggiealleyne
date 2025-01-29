import { Link } from 'react-router-dom';
import ProjectBasicInfo from './details/ProjectBasicInfo';
import ProjectTeamInfo from './details/ProjectTeamInfo';
import ProjectTechInfo from './details/ProjectTechInfo';
import ProjectLinks from './details/ProjectLinks';

interface ProjectDetailsProps {
  role: string;
  duration: string;
  year: string;
  teamSize?: string;
  methodologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  summary: string;
}

const ProjectDetails = ({ 
  role, 
  duration, 
  year, 
  teamSize,
  methodologies,
  githubUrl,
  liveUrl,
  summary
}: ProjectDetailsProps) => {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Project Summary</h3>
        <p className="text-[rgba(153,153,153,1)]">{summary}</p>
      </div>
      
      <ProjectBasicInfo role={role} duration={duration} year={year} />
      
      {teamSize && (
        <ProjectTeamInfo teamSize={teamSize} />
      )}

      {methodologies && methodologies.length > 0 && (
        <ProjectTechInfo methodologies={methodologies} />
      )}

      {(githubUrl || liveUrl) && (
        <ProjectLinks githubUrl={githubUrl} liveUrl={liveUrl} />
      )}
    </div>
  );
};

export default ProjectDetails;