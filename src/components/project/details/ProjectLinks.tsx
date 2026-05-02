
import { ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectLinksProps {
  githubUrl?: string | null;
  liveUrl?: string | null;
  liveLabel?: string;
  githubLabel?: string;
  projectSlug?: string; // Added parameter to identify the project
  className?: string;
}

const getLiveLabel = (projectSlug?: string) => {
  switch (projectSlug) {
    case "chill-vibes-music-player":
      return "Open Web App";
    case "tutor-d":
      return "Visit TutorD";
    case "staybooked":
      return "Visit Staybooked";
    case "bobs-big-break":
      return "Play Game";
    default:
      return "View Live Demo";
  }
};

const ProjectLinks = ({ 
  githubUrl, 
  liveUrl, 
  liveLabel,
  githubLabel = "View Source Code",
  projectSlug,
  className,
}: ProjectLinksProps) => {
  // Don't show GitHub button for Bob's Big Break project
  const shouldShowGithub = projectSlug !== "bobs-big-break" && githubUrl;
  
  // Don't show Live Demo button for Doggy Date project
  const shouldShowLiveDemo = projectSlug !== "doggy-date" && liveUrl;

  if (!shouldShowGithub && !shouldShowLiveDemo) {
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
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary"
        >
          <span>{liveLabel || getLiveLabel(projectSlug)}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
