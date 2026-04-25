
import { Lightbulb, Users, Check, BarChart2, Star, Layers, Award, Eye } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ProjectProcessProps {
  challenge?: string;
  process?: string[];
  problem?: string;
  problemSolved?: string;
  technicalHighlights?: string[];
  keyAchievements?: string[];
  methodologies?: string[];
}

const ProjectProcess = ({ 
  challenge, 
  process,
  problem,
  problemSolved,
  technicalHighlights,
  keyAchievements,
  methodologies
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
  
  // Use problem if challenge is not provided
  const displayChallenge = challenge || problem;
  
  // Only show problemSolved if it's different from challenge and not empty
  const showProblemSolved = problemSolved && problemSolved !== displayChallenge && problemSolved !== '';
  
  return (
    <>
      {displayChallenge && (
        <Card className="mb-12 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(16,16,16,0.5)] backdrop-blur-sm sm:mb-16">
          <CardContent className="p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="break-words text-2xl font-bold text-white">The Challenge</h2>
            </div>
            <p className="text-[rgba(200,200,200,0.9)] max-w-3xl leading-relaxed">{displayChallenge}</p>

            {/* Only show problemSolved if it's different from challenge */}
            {showProblemSolved && (
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                <h2 className="break-words text-2xl font-bold text-white">Problem Solved</h2>
                </div>
                <p className="text-[rgba(200,200,200,0.9)] max-w-3xl leading-relaxed">{problemSolved}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {process && process.length > 0 && (
        <div className="mb-12 min-w-0 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h2 className="break-words text-2xl font-bold text-white">Design & Development Process</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 z-0 transform -translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex min-w-0 flex-col gap-6 lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 flex justify-center lg:justify-start items-start">
                    <div className="flex items-center gap-3">
                      <div className="bg-[rgba(16,16,16,0.8)] border-4 border-primary/30 rounded-full p-3 h-14 w-14 flex items-center justify-center">
                        {stepIcons[index % stepIcons.length]}
                      </div>
                      <div className="h-0.5 w-4 lg:w-16 bg-primary/30"></div>
                    </div>
                  </div>
                  
                  <Card className={`min-w-0 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(25,25,25,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] lg:w-1/2 ${index % 2 === 0 ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="mb-3 break-words text-lg font-semibold text-primary sm:text-xl">
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

      {methodologies && methodologies.length > 0 && (
        <Card className="mb-12 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(16,16,16,0.5)] backdrop-blur-sm sm:mb-16">
          <CardContent className="p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="break-words text-2xl font-bold text-white">Methodologies</h2>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              {methodologies.map((methodology, index) => (
                <div 
                  key={index}
                  className="flex min-w-0 items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(25,25,25,0.5)] p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="min-w-0 break-words text-[rgba(200,200,200,0.9)]">{methodology}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {technicalHighlights && technicalHighlights.length > 0 && (
        <Card className="mb-12 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(16,16,16,0.5)] backdrop-blur-sm sm:mb-16">
          <CardContent className="p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="break-words text-2xl font-bold text-white">Technical Highlights</h2>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
              {technicalHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex min-w-0 items-start gap-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(25,25,25,0.5)] p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span className="min-w-0 break-words text-[rgba(200,200,200,0.9)]">{highlight}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {keyAchievements && keyAchievements.length > 0 && (
        <Card className="mb-12 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(16,16,16,0.5)] backdrop-blur-sm sm:mb-16">
          <CardContent className="p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BarChart2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="break-words text-2xl font-bold text-white">Key Achievements</h2>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
              {keyAchievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex min-w-0 items-start gap-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(25,25,25,0.5)] p-4 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
                >
                  <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                  <span className="min-w-0 break-words text-[rgba(200,200,200,0.9)]">{achievement}</span>
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
