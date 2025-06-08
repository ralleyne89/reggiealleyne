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
const ProjectConclusion = ({
  conclusion,
  prototypeUrl,
  liveUrl,
  projectSlug
}: ProjectConclusionProps) => {
  // Don't show Live Demo button for Doggy Date project
  const shouldShowLiveDemo = projectSlug !== "doggy-date" && liveUrl;
  return;
};
export default ProjectConclusion;