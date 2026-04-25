
import { ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectLinksProps {
  githubUrl?: string | null;
  liveUrl?: string | null;
  prototypeUrl?: string | null;
  liveLabel?: string;
  githubLabel?: string;
  prototypeLabel?: string;
  projectSlug?: string; // Added parameter to identify the project
  className?: string;
}

const ProjectLinks = ({ 
  githubUrl, 
  liveUrl, 
  prototypeUrl,
  liveLabel,
  githubLabel = "View Source Code",
  prototypeLabel = "View Prototype",
  projectSlug,
  className,
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

  if (!shouldShowGithub && !shouldShowLiveDemo && !prototypeUrl) {
    return null;
  }

  return (
    <div
      className={cn(
        "-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0",
        className,
      )}
    >
      {shouldShowGithub && (
        <a 
          href={githubUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Code className="h-4 w-4" />
          <span>{githubLabel}</span>
        </a>
      )}
      {shouldShowLiveDemo && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary"
        >
          <span>{determineLiveLabel()}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
      {prototypeUrl && (
        <a 
          href={prototypeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/10"
        >
          <span>{prototypeLabel}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
