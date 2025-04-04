
interface ProjectTechInfoProps {
  methodologies?: string[];
}

const ProjectTechInfo = ({ methodologies }: ProjectTechInfoProps) => {
  // Add the additional tools that should always be displayed
  const additionalTools = ["React.js", "Figma", "Ant Design"];
  
  // Combine the methodologies from props with the additional tools
  const allTools = [...(methodologies || []), ...additionalTools];
  
  return (
    <>
      {allTools && allTools.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-3">Methodologies & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {allTools.map((tool, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-full text-[#9b87f5]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTechInfo;
