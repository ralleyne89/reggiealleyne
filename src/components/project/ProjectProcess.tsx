
import { Lightbulb, Users, Check, BarChart2 } from 'lucide-react';

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
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#333333] p-2 rounded-lg">
            <Lightbulb className="w-5 h-5 text-[#9b87f5]" />
          </div>
          <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">The Challenge</h2>
        </div>
        <p className="text-[rgba(153,153,153,1)] max-w-3xl">{challenge}</p>
      </div>

      {problemSolved && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#333333] p-2 rounded-lg">
              <Check className="w-5 h-5 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">Problem Solved</h2>
          </div>
          <p className="text-[rgba(153,153,153,1)] max-w-3xl">{problemSolved}</p>
        </div>
      )}

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
        
        <div className="border-l-2 border-[rgba(255,255,255,0.1)] pl-6 space-y-12 relative">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute left-[-27px] top-0 w-6 h-6 rounded-full bg-[#9b87f5] border-4 border-[rgba(5,5,5,1)]"></div>
              <h3 className="text-xl font-semibold mb-3 text-[rgba(230,230,230,1)]">Step {index + 1}</h3>
              <p className="text-[rgba(153,153,153,1)] mb-4">{step}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,255,255,0.05)] rounded-lg p-4">
                  <h4 className="text-sm font-medium text-[#9b87f5] mb-2">Key Insight</h4>
                  <p className="text-sm text-[rgba(153,153,153,1)]">
                    Insights from this step helped inform our design decisions.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {technicalHighlights && technicalHighlights.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#333333] p-2 rounded-lg">
              <Users className="w-5 h-5 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">Technical Highlights</h2>
          </div>
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
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#333333] p-2 rounded-lg">
              <BarChart2 className="w-5 h-5 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">Key Achievements</h2>
          </div>
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
