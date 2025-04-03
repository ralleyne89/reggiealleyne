
import { Lightbulb, Users, Check, BarChart2, Star, Layers, Award, Eye } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
    <Eye className="h-6 w-6 text-primary" />,
    <Lightbulb className="h-6 w-6 text-primary" />,
    <Layers className="h-6 w-6 text-primary" />,
    <Users className="h-6 w-6 text-primary" />,
    <Check className="h-6 w-6 text-primary" />,
    <Award className="h-6 w-6 text-primary" />,
    <Star className="h-6 w-6 text-primary" />
  ];
  
  return (
    <>
      {challenge && (
        <Card className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">The Challenge</h2>
            </div>
            <p className="text-[rgba(200,200,200,0.9)] max-w-3xl leading-relaxed">{challenge}</p>

            {/* Only show problemSolved if it's different from challenge */}
            {problemSolved && problemSolved !== challenge && (
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Problem Solved</h2>
                </div>
                <p className="text-[rgba(200,200,200,0.9)] max-w-3xl leading-relaxed">{problemSolved}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {process && process.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Design & Development Process</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[rgba(155,135,245,0.3)] z-0 transform -translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 flex justify-center lg:justify-start items-start">
                    <div className="flex items-center gap-3">
                      <div className="bg-[rgba(16,16,16,0.8)] border-4 border-[rgba(155,135,245,0.3)] rounded-full p-3 h-14 w-14 flex items-center justify-center">
                        {stepIcons[index % stepIcons.length]}
                      </div>
                      <div className="h-0.5 w-4 lg:w-16 bg-[rgba(155,135,245,0.3)]"></div>
                    </div>
                  </div>
                  
                  <Card className={`lg:w-1/2 bg-[rgba(25,25,25,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.15)] hover:border-[rgba(155,135,245,0.3)] ${index % 2 === 0 ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        {stepNames[index % stepNames.length]}
                      </h3>
                      <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{step}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {technicalHighlights && technicalHighlights.length > 0 && (
        <Card className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Technical Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4 hover:border-primary/20 hover:bg-[rgba(155,135,245,0.05)] transition-all duration-300"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-[rgba(200,200,200,0.9)]">{highlight}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {keyAchievements && keyAchievements.length > 0 && (
        <Card className="mb-16 bg-[rgba(16,16,16,0.5)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[rgba(155,135,245,0.1)] p-3 rounded-lg">
                <BarChart2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Key Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyAchievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-[rgba(25,25,25,0.5)] border border-[rgba(255,255,255,0.06)] rounded-lg p-4 hover:border-primary/20 hover:bg-[rgba(155,135,245,0.05)] transition-all duration-300"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span className="text-[rgba(200,200,200,0.9)]">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProjectProcess;
