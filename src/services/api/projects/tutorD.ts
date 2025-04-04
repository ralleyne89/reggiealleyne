
import { ProjectType } from '../../../types/project';

export const getTutorDProject = (): ProjectType => {
  return {
    id: 2,
    slug: "tutor-d",
    title: "Tutor D",
    description: "Educational platform connecting students with qualified tutors for personalized learning sessions.",
    fullDescription: "A comprehensive platform that matches students with expert tutors based on subject, learning style, and scheduling needs.",
    image: "/lovable-uploads/781889c9-57f2-4a2c-9ce3-a3951cb2a777.png",
    category: "Education",
    tags: ["Education", "Marketplace", "SaaS"],
    role: "UI/UX Designer & Frontend Developer",
    duration: "6 months",
    year: "2021",
    challenge: "Create an intuitive matching system for students and tutors",
    process: ["User Research", "Competitive Analysis", "Wireframing", "Usability Testing"],
    deliverables: ["User Flows", "UI Design", "Interactive Prototype"],
    images: [
      "/lovable-uploads/227c9dea-f39a-4dcf-a387-b9089523692f.png",
      "/lovable-uploads/781889c9-57f2-4a2c-9ce3-a3951cb2a777.png"
    ],
    conclusion: {
      impact: "95% student satisfaction rate, 32% improvement in grades",
      learnings: "The importance of flexible scheduling and clear communication channels",
      nextSteps: "Expanding subject offerings and implementing AI-driven matching"
    },
    techStack: ["React", "Node.js", "Supabase", "Ant Design"],
    keyAchievements: ["300+ active users", "50+ qualified tutors", "10+ subjects"],
    problemSolved: "Difficulty finding qualified tutors for specific subjects",
    solution: "An intelligent matching algorithm that pairs students with tutors based on subject expertise, learning style, and schedule compatibility.",
    technicalHighlights: ["Real-time availability calendar", "In-app video conferencing", "Progress tracking dashboard"],
    teamSize: "4 members",
    methodologies: ["Lean UX", "Agile", "User Testing"],
    summary: "Educational platform connecting students with qualified tutors for personalized learning.",
    date: "2021-05-20"
  };
};
