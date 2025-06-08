
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
  projectSlug?: string;
}

const ProjectConclusion = ({
  conclusion,
  prototypeUrl,
  liveUrl,
  projectSlug
}: ProjectConclusionProps) => {
  // Don't show Live Demo button for Doggy Date project
  const shouldShowLiveDemo = projectSlug !== "doggy-date" && liveUrl;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Conclusion Content */}
        {(conclusion.impact || conclusion.learnings || conclusion.nextSteps) && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
              Project Conclusion
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {conclusion.impact && (
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{conclusion.impact}</p>
                  </CardContent>
                </Card>
              )}
              
              {conclusion.learnings && (
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Key Learnings</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{conclusion.learnings}</p>
                  </CardContent>
                </Card>
              )}
              
              {conclusion.nextSteps && (
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Next Steps</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{conclusion.nextSteps}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="mb-12">
          <ProjectLinks 
            liveUrl={shouldShowLiveDemo ? liveUrl : null}
            prototypeUrl={prototypeUrl}
            projectSlug={projectSlug}
          />
        </div>

        {/* Back to Works Button */}
        <div className="text-center">
          <Link to="/works">
            <Button 
              variant="outline" 
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectConclusion;
