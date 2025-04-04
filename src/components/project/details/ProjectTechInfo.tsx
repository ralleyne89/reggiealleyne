
interface ProjectTechInfoProps {
  methodologies?: string[];
}

const ProjectTechInfo = ({ methodologies }: ProjectTechInfoProps) => {
  return (
    <>
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
    </>
  );
};

export default ProjectTechInfo;
