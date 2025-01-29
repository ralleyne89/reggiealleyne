interface ProjectProcessProps {
  challenge: string;
  process: string[];
  problemSolved?: string;
  technicalHighlights?: string[];
  keyAchievements?: string[];
}

const ProjectProcess = ({ 
  challenge, 
  process,
  problemSolved,
  technicalHighlights,
  keyAchievements
}: ProjectProcessProps) => {
  return (
    <>
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-[rgba(230,230,230,1)]">The Challenge</h2>
        <p className="text-[rgba(153,153,153,1)] max-w-3xl">{challenge}</p>
      </div>

      {problemSolved && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-[rgba(230,230,230,1)]">Problem Solved</h2>
          <p className="text-[rgba(153,153,153,1)] max-w-3xl">{problemSolved}</p>
        </div>
      )}

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <div 
              key={index}
              className="bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(145,108,231,0.3)] hover:shadow-[0_0_15px_rgba(145,108,231,0.15)] transition-all duration-300"
            >
              <span className="text-[#9b87f5] text-sm mb-2 block">Step {index + 1}</span>
              <h3 className="text-[rgba(230,230,230,1)] font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>

      {technicalHighlights && technicalHighlights.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Technical Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4"
              >
                <div className="h-2 w-2 rounded-full bg-[#9b87f5] mt-2"></div>
                <span className="text-[rgba(230,230,230,1)]">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {keyAchievements && keyAchievements.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-[rgba(16,16,16,1)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4"
              >
                <div className="h-2 w-2 rounded-full bg-[#9b87f5] mt-2"></div>
                <span className="text-[rgba(230,230,230,1)]">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectProcess;