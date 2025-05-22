
/**
 * Represents a project in the portfolio.
 * This type is used throughout the application to maintain consistent project data structure.
 */
export interface ProjectType {
  /** Unique numeric identifier for the project */
  id: number;
  
  /** URL-friendly identifier used in routing (e.g., /project/[slug]) */
  slug?: string;
  
  /** Project title */
  title: string;
  
  /** Short description for cards and previews (1-2 sentences) */
  description: string;
  
  /** Comprehensive project description */
  fullDescription?: string | null;
  
  /** URL to the primary project image */
  image: string;
  
  /**
   * Project metadata
   */
  /** Publication or completion date (ISO format preferred) */
  date?: string;
  
  /** Year the project was completed */
  year: string;
  
  /** Project duration (e.g., "3 months", "2 years") */
  duration: string;
  
  /** One-line summary of the project (used in some UI components) */
  summary: string;
  
  /**
   * Project categorization 
   */
  /** Category tags for filtering and grouping */
  tags: string[] | null;
  
  /** Category of the project (e.g., "UI/UX Design", "Web Development") */
  category?: string | null;
  
  /** Technologies used in the project */
  techStack?: string[] | null;
  
  /** Developer's role in the project */
  role: string;
  
  /** Size of the team that worked on the project */
  teamSize?: string | null;
  
  /** Methodologies used during development */
  methodologies?: string[] | null;
  
  /**
   * Project details
   */
  /** Problem the project aimed to solve */
  challenge?: string | null;
  
  /** Alternative field for problem statement */
  problem?: string | null;
  
  /** Problem the project solved - specific outcome-focused description */
  problemSolved?: string | null;
  
  /** Solution provided by the project */
  solution?: string | null;
  
  /** Key steps in the development process */
  process?: string[] | null;
  
  /** End products or artifacts produced */
  deliverables?: string[] | null;
  
  /** Notable technical features */
  technicalHighlights?: string[] | null;
  
  /** Key accomplishments or results */
  keyAchievements?: string[] | null;
  
  /**
   * Project media
   */
  /** Additional project images */
  images?: string[] | null;
  
  /** URL to demo video */
  videoUrl?: string | null;
  
  /**
   * External links
   */
  /** Link to GitHub repository */
  githubUrl?: string | null;
  
  /** Link to live demo or deployed project */
  liveUrl?: string | null;
  
  /** Link to Figma design */
  figmaUrl?: string | null;
  
  /** Link to prototype */
  prototypeUrl?: string | null;
  
  /**
   * Project conclusion and outcomes
   */
  conclusion?: {
    /** Project's measurable impact */
    impact: string | null;
    
    /** Insights gained from the project */
    learnings: string | null;
    
    /** Future development directions */
    nextSteps: string | null;
  };
}
