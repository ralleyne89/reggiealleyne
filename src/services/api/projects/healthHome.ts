
import { ProjectType } from '../../../types/project';

export const getHealthHomeProject = (): ProjectType => {
  return {
    id: 0,
    slug: "health-at-home",
    title: "Health@Home Platform",
    description: "A comprehensive telehealth solution for Blue Shield of California, enabling remote patient monitoring during COVID-19.",
    fullDescription: "A full-featured telehealth platform designed to help patients connect with healthcare providers remotely during the COVID-19 pandemic, with robust monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Healthcare",
    tags: ["Enterprise UX", "Healthcare", "Telehealth"],
    role: "Lead UX Designer",
    duration: "8 months",
    year: "2023",
    challenge: "Rapidly develop an intuitive telehealth platform during pandemic",
    process: ["Research", "Ideation", "Prototyping", "Testing", "Implementation"],
    deliverables: ["UX Strategy", "User Interface", "User Flows", "Wireframes", "Prototypes", "Design System", "Web Application"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
    ],
    conclusion: {
      impact: "32% increase in patient engagement, 24% increase in sign-ups",
      learnings: "The importance of simplified user flows for elderly patients and healthcare providers under stress",
      nextSteps: "Expanding platform capabilities to include preventative care monitoring"
    },
    techStack: ["React", "Node.js", "Material UI", "Figma"],
    keyAchievements: ["Led cross-functional team of principal level designers, content strategists, and reearchers", "Served 50,000+ patients"],
    githubUrl: null,
    liveUrl: "https://bs-hh.netlify.app/",
    problemSolved: "Inefficient remote healthcare delivery during pandemic restrictions",
    technicalHighlights: ["HIPAA-compliant video conferencing", "Real-time vital monitoring", "Electronic health record integration"],
    teamSize: "8 designers",
    methodologies: ["Design Thinking", "Agile", "User-Centered Design"],
    summary: "A telehealth platform enabling remote patient monitoring during COVID-19 with significant impact on patient outcomes.",
    date: "2023-03-10"
  };
};
