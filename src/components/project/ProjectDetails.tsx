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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#9b87f5]">Role</h3>
          <p className="text-[rgba(153,153,153,1)]">{role}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#9b87f5]">Duration</h3>
          <p className="text-[rgba(153,153,153,1)]">{duration}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#9b87f5]">Year</h3>
          <p className="text-[rgba(153,153,153,1)]">{year}</p>
        </div>
      </div>

      {teamSize && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Team Size</h3>
          <p className="text-[rgba(153,153,153,1)]">{teamSize}</p>
        </div>
      )}

      {techStack && techStack.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {methodologies && methodologies.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Methodologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {methodologies.map((methodology, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
              >
                {methodology}
              </span>
            ))}
          </div>
        </div>
      )}

      {(githubUrl || liveUrl) && (
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#9b87f5] border border-[#9b87f5] rounded-lg hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
            >
              View Source Code
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#9b87f5] rounded-lg hover:bg-[#7E69AB] transition-colors duration-300"
            >
              View Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;