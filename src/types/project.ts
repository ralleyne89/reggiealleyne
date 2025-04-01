
export interface ProjectType {
  id: number;
  slug?: string;
  title: string;
  description: string;
  fullDescription: string | null;
  image: string;
  tags: string[] | null;
  role: string;
  duration: string;
  year: string;
  challenge: string | null;
  process: string[] | null;
  deliverables: string[] | null;
  images: string[] | null;
  conclusion: {
    impact: string | null;
    learnings: string | null;
    nextSteps: string | null;
  };
  techStack?: string[] | null;
  keyAchievements?: string[] | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
  problemSolved?: string | null;
  solution?: string | null;
  technicalHighlights?: string[] | null;
  teamSize?: string | null;
  methodologies?: string[] | null;
  summary: string;
}
