
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
    <div className="mb-16">
      <div className="mb-8 glass-card p-8 rounded-xl border border-white/10 animate-fade-in">
        <h3 className="text-xl font-display font-semibold gradient-text mb-3">Project Summary</h3>
        <p className="text-[rgba(180,180,180,1)] leading-relaxed">{summary}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6 rounded-xl border border-white/10 animate-slide-in-left" style={{ animationDelay: '100ms' }}>
          <ProjectBasicInfo role={role} duration={duration} year={year} />
        </div>
        
        {teamSize && (
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
            <ProjectTeamInfo teamSize={teamSize} />
          </div>
        )}
      </div>

      {methodologies && methodologies.length > 0 && (
        <div className="mb-8 glass-card p-6 rounded-xl border border-white/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <ProjectTechInfo methodologies={methodologies} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {problem && (
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-slide-in-left" style={{ animationDelay: '400ms' }}>
            <ProjectProblem problem={problem} />
          </div>
        )}

        {solution && (
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-slide-in-right" style={{ animationDelay: '500ms' }}>
            <ProjectSolution solution={solution} />
          </div>
        )}
      </div>

      {(githubUrl || liveUrl || prototypeUrl) && (
        <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <ProjectLinks 
            githubUrl={githubUrl} 
            liveUrl={liveUrl}
            prototypeUrl={prototypeUrl}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
