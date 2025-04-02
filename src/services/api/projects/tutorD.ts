
import { ProjectType } from '../../../types/project';

export const getTutorDProject = (): ProjectType => {
  return {
    id: 2,
    slug: "tutor-d",
    title: "Tutor D",
    description: "Educational platform connecting students with qualified tutors for personalized learning sessions.",
    fullDescription: "A comprehensive platform that matches students with expert tutors based on subject, learning style, and scheduling needs.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    category: "Education",
    tags: ["Education", "Marketplace", "SaaS"],
    role: "UI/UX Designer & Frontend Developer",
    duration: "6 months",
    year: "2021",
    challenge: "Create an intuitive matching system for students and tutors",
    process: ["User Research", "Competitive Analysis", "Wireframing", "Usability Testing"],
    deliverables: ["User Flows", "UI Design", "Interactive Prototype"],
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
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
