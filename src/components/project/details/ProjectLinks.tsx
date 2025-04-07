
import { ExternalLink } from 'lucide-react';

interface ProjectLinksProps {
  githubUrl?: string | null;
  liveUrl?: string | null;
  prototypeUrl?: string | null;
  liveLabel?: string;
  githubLabel?: string;
  prototypeLabel?: string;
}

const ProjectLinks = ({ 
  githubUrl, 
  liveUrl, 
  prototypeUrl,
  liveLabel = "View Live Demo",
  githubLabel = "View Source Code",
  prototypeLabel = "View Prototype"
}: ProjectLinksProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {githubUrl && (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#9b87f5] border-2 border-[#9b87f5] rounded-lg hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
        >
          <span>{githubLabel}</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
      {liveUrl && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#9b87f5] rounded-lg hover:bg-[#7E69AB] transition-colors duration-300"
        >
          <span>{liveLabel}</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
      {prototypeUrl && (
        <a 
          href={prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#9b87f5] bg-transparent border-2 border-[#9b87f5] rounded-lg hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
        >
          <span>{prototypeLabel}</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
