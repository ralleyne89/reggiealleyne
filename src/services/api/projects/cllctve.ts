
import { ProjectType } from '../../../types/project';

export const getCllctveProject = (): ProjectType => {
  return {
    id: 1,
    title: "CLLCTVE Platform",
    description: "A digital portfolio platform connecting college creators with brands seeking authentic content.",
    fullDescription: "CLLCTVE empowers the next generation of creatives by providing a platform to showcase their work and connect with brands looking for authentic content creators.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    tags: ["Platform", "Creative", "Marketplace"],
    role: "Frontend Developer & UI Designer",
    duration: "2 years",
    year: "2020",
    challenge: "Build a portfolio platform that meets the needs of both creators and brands",
    process: ["Discovery", "User Interviews", "Design Sprint", "Testing"],
    deliverables: ["Design System", "User Flows", "Interactive Prototype, Web Application"],
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490",
      "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a",
      "https://images.unsplash.com/photo-1535586453970-bd8fb0d2d2fc"
    ],
    conclusion: {
      impact: "10,000+ creator portfolios, 200+ brand partnerships",
      learnings: "Creator discovery and curation are critical for platform success",
      nextSteps: "Expanding into video content and international markets"
    },
    techStack: ["React", "GraphQL", "Ant Design", "React Query", "Figma"],
    keyAchievements: ["Raised $1.2M in funding", "Featured in TechCrunch", "5,000+ user base"],
    problemSolved: "Gap between college creators and brands seeking authentic content",
    technicalHighlights: ["Creator analytics dashboard", "Automated contract generation", "Secure payment processing"],
    teamSize: "6 members",
    methodologies: ["Design Thinking", "Agile", "Usability Testing"],
    summary: "Digital platform connecting college creators with brands for authentic content partnerships."
  };
};
