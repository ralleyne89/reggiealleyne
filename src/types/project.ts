export interface ProjectType {
  id: number;
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
}