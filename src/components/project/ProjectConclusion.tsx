
import { ArrowLeft, Star, Lightbulb, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import ProjectLinks from './details/ProjectLinks';

interface ProjectConclusionProps {
  conclusion: {
    impact: string;
    learnings: string;
    nextSteps: string;
  };
  prototypeUrl?: string | null;
  liveUrl?: string | null;
  projectSlug?: string; // Added parameter for project slug
}

const ProjectConclusion = ({ conclusion, prototypeUrl, liveUrl, projectSlug }: ProjectConclusionProps) => {
  // Don't show Live Demo button for Doggy Date project
  const shouldShowLiveDemo = projectSlug !== "doggy-date" && liveUrl;
  
  return (
    <div className="w-full bg-gradient-to-t from-[#161220] to-[rgba(5,5,5,0.8)] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[rgba(255,255,255,0.1)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-[#161220] via-[#1e1a2c] to-[#161220] px-6 text-xl text-primary font-medium">
              Project Conclusion
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[rgba(16,16,16,0.7)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Impact</h3>
              </div>
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{conclusion.impact}</p>
            </CardContent>
          </Card>

          <Card className="bg-[rgba(16,16,16,0.7)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Key Learnings</h3>
              </div>
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{conclusion.learnings}</p>
            </CardContent>
          </Card>

          <Card className="bg-[rgba(16,16,16,0.7)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Next Steps</h3>
              </div>
              <p className="text-[rgba(200,200,200,0.9)] leading-relaxed">{conclusion.nextSteps}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            variant="default"
            className="px-8 py-7 text-lg font-medium bg-primary hover:bg-primary/90 text-white rounded-lg w-full sm:w-auto"
          >
            <Link to="/works">
              <ArrowLeft className="mr-2 h-5 w-5" />
              View More Projects
            </Link>
          </Button>
          
          {prototypeUrl && !shouldShowLiveDemo && (
            <Button 
              asChild
              variant="outline"
              className="px-8 py-7 text-lg font-medium text-primary border-2 border-primary bg-transparent hover:bg-primary/10 rounded-lg w-full sm:w-auto"
            >
              <a 
                href={prototypeUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Prototype
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          )}
          
          {shouldShowLiveDemo && (
            <Button 
              asChild
              variant="outline" 
              className="px-8 py-7 text-lg font-medium text-primary border-2 border-primary bg-transparent hover:bg-primary/10 rounded-lg w-full sm:w-auto"
            >
              <a 
                href={liveUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {liveUrl === "https://chill-vibes.web.app/" ? "Open Web App" : 
                 liveUrl === "https://tutord.io/" ? "Visit TutorD" : "View Live Demo"}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectConclusion;
