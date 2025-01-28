export interface ProjectType {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  role: string;
  duration: string;
  year: string;
  challenge: string;
  process: string[];
  deliverables: string[];
  images: string[];
  conclusion: {
    impact: string;
    learnings: string;
    nextSteps: string;
  };
}