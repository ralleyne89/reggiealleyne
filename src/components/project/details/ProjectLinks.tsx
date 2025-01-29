interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectLinks = ({ githubUrl, liveUrl }: ProjectLinksProps) => {
  return (
    <div className="flex gap-4 mt-8">
      {githubUrl && (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#9b87f5] border-2 border-[#9b87f5] rounded-lg hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
        >
          View Source Code
        </a>
      )}
      {liveUrl && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#9b87f5] rounded-lg hover:bg-[#7E69AB] transition-colors duration-300"
        >
          View Live Demo
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;