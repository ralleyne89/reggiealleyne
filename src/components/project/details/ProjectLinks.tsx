
import { ExternalLink, Code } from 'lucide-react';

interface ProjectLinksProps {
  githubUrl?: string | null;
  liveUrl?: string | null;
  prototypeUrl?: string | null;
  liveLabel?: string;
  githubLabel?: string;
  prototypeLabel?: string;
  projectSlug?: string; // Added parameter to identify the project
}

const ProjectLinks = ({ 
  githubUrl, 
  liveUrl, 
  prototypeUrl,
  liveLabel,
  githubLabel = "View Source Code",
  prototypeLabel = "View Prototype",
  projectSlug
}: ProjectLinksProps) => {
  // Determine the appropriate label for the live URL
  const determineLiveLabel = () => {
    if (liveLabel) return liveLabel;
    
    if (liveUrl === "https://chill-vibes.web.app/") {
      return "Open Web App";
    } else if (liveUrl === "https://tutord.io/") {
      return "Visit TutorD";
    } else {
      return "View Live Demo";
    }
  };

  // Don't show GitHub button for Bob's Big Break project
  const shouldShowGithub = projectSlug !== "bobs-big-break" && githubUrl;
  
  // Don't show Live Demo button for Doggy Date project
  const shouldShowLiveDemo = projectSlug !== "doggy-date" && liveUrl;

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {shouldShowGithub && (
        <a 
          href={githubUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#9b87f5] border-2 border-[#9b87f5] rounded-lg hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
        >
          <span>{githubLabel}</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
      {shouldShowLiveDemo && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#9b87f5] rounded-lg hover:bg-[#7E69AB] transition-colors duration-300"
        >
          <span>{determineLiveLabel()}</span>
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
