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
  techStack?: string[];
  methodologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectDetails = ({ 
  role, 
  duration, 
  year, 
  teamSize,
  techStack,
  methodologies,
  githubUrl,
  liveUrl 
}: ProjectDetailsProps) => {
  return (
    <div className="mb-16">
      <ProjectBasicInfo role={role} duration={duration} year={year} />
      
      {teamSize && (
        <ProjectTeamInfo teamSize={teamSize} />
      )}

      {techStack && techStack.length > 0 && (
        <ProjectTechInfo 
          techStack={techStack} 
          methodologies={methodologies} 
        />
      )}

      {(githubUrl || liveUrl) && (
        <ProjectLinks githubUrl={githubUrl} liveUrl={liveUrl} />
      )}
    </div>
  );
};

export default ProjectDetails;