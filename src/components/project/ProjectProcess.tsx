
import { Lightbulb, Users, Check, BarChart2, Star, Layers, Award, Eye } from 'lucide-react';

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
  // Define standard step names that make sense for most design/development projects
  const stepNames = [
    "Research & Discovery",
    "Planning & Strategy",
    "Design & Prototyping",
    "Development",
    "Testing & Refinement",
    "Implementation & Launch",
    "Evaluation & Iteration"
  ];

  // Icons for each step
  const stepIcons = [
    <Eye className="h-6 w-6 text-[#9b87f5]" />,
    <Lightbulb className="h-6 w-6 text-[#9b87f5]" />,
    <Layers className="h-6 w-6 text-[#9b87f5]" />,
    <Users className="h-6 w-6 text-[#9b87f5]" />,
    <Check className="h-6 w-6 text-[#9b87f5]" />,
    <Award className="h-6 w-6 text-[#9b87f5]" />,
    <Star className="h-6 w-6 text-[#9b87f5]" />
  ];
  
  return (
    <>
      <div className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#333333] p-2 rounded-lg">
            <Lightbulb className="w-5 h-5 text-[#9b87f5]" />
          </div>
          <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">The Challenge</h2>
        </div>
        <p className="text-[rgba(153,153,153,1)] max-w-3xl">{challenge}</p>

        {problemSolved && (
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#333333] p-2 rounded-lg">
                <Check className="w-5 h-5 text-[#9b87f5]" />
              </div>
              <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">Problem Solved</h2>
            </div>
            <p className="text-[rgba(153,153,153,1)] max-w-3xl">{problemSolved}</p>
          </div>
        )}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[rgba(230,230,230,1)]">Design Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {process.map((step, index) => (
            <div key={index} className="bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(155,135,245,0.3)] hover:shadow-[0_0_15px_rgba(155,135,245,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[rgba(25,25,25,0.8)] p-3 rounded-lg">
                  {stepIcons[index % stepIcons.length]}
                </div>
                <h3 className="text-xl font-semibold text-[rgba(230,230,230,1)]">
                  {stepNames[index % stepNames.length]}
                </h3>
              </div>
              <p className="text-[rgba(153,153,153,1)]">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {technicalHighlights && technicalHighlights.length > 0 && (
        <div className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#333333] p-2 rounded-lg">
              <Users className="w-5 h-5 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">Technical Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-[rgba(25,25,25,0.8)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4"
              >
                <div className="h-2 w-2 rounded-full bg-[#9b87f5] mt-2"></div>
                <span className="text-[rgba(230,230,230,1)]">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {keyAchievements && keyAchievements.length > 0 && (
        <div className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#333333] p-2 rounded-lg">
              <BarChart2 className="w-5 h-5 text-[#9b87f5]" />
            </div>
            <h2 className="text-2xl font-bold text-[rgba(230,230,230,1)]">Key Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-[rgba(25,25,25,0.8)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4"
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
