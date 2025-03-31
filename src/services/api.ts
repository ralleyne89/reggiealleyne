
import { supabase } from '@/integrations/supabase/client';
import { ProjectType } from '../types/project';

export const getProject = async (id: number): Promise<ProjectType> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    throw new Error('Project not found');
  }

  if (!data) {
    throw new Error('Project not found');
  }

  return {
    ...data,
    fullDescription: data.full_description,
    conclusion: {
      impact: data.impact,
      learnings: data.learnings,
      nextSteps: data.next_steps
    },
    techStack: data.tech_stack,
    keyAchievements: data.key_achievements,
    githubUrl: data.github_url,
    liveUrl: data.live_url,
    problemSolved: data.problem_solved,
    technicalHighlights: data.technical_highlights,
    teamSize: data.team_size,
    methodologies: data.methodologies
  };
};

export const getAllProjects = async (): Promise<ProjectType[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('Failed to fetch projects');
  }

  const healthHomeProject: ProjectType = {
    id: 0,
    title: "Health@Home Platform",
    description: "A comprehensive telehealth solution for Blue Shield of California, enabling remote patient monitoring during COVID-19.",
    fullDescription: "A full-featured telehealth platform designed to help patients connect with healthcare providers remotely during the COVID-19 pandemic, with robust monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Enterprise UX", "Healthcare", "Telehealth"],
    role: "Lead UX Designer",
    duration: "8 months",
    year: "2022",
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
    problemSolved: "Inefficient remote healthcare delivery during pandemic restrictions",
    technicalHighlights: ["HIPAA-compliant video conferencing", "Real-time vital monitoring", "Electronic health record integration"],
    teamSize: "8 members",
    methodologies: ["Design Thinking", "Agile", "User-Centered Design"],
    summary: "A telehealth platform enabling remote patient monitoring during COVID-19 with significant impact on patient outcomes."
  };

  // Manually creating the list of projects to ensure specific IDs and order
  const tutorDProject: ProjectType = {
    id: 2,
    title: "Tutor D",
    description: "Educational platform connecting students with qualified tutors for personalized learning sessions.",
    fullDescription: "A comprehensive platform that matches students with expert tutors based on subject, learning style, and scheduling needs.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
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
    technicalHighlights: ["Real-time availability calendar", "In-app video conferencing", "Progress tracking dashboard"],
    teamSize: "4 members",
    methodologies: ["Lean UX", "Agile", "User Testing"],
    summary: "Educational platform connecting students with qualified tutors for personalized learning."
  };

  // Let's define CLLCTVE Platform with ID 1
  const cllctveProject: ProjectType = {
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

  // Combine our manually created projects with any other projects from the database
  // Filter out any projects that might have IDs 0, 1, or 2 to avoid duplicates
  const otherProjects = data
    .filter(project => ![0, 1, 2].includes(project.id))
    .map(project => ({
      ...project,
      fullDescription: project.full_description,
      conclusion: {
        impact: project.impact,
        learnings: project.learnings,
        nextSteps: project.next_steps
      },
      techStack: project.tech_stack,
      keyAchievements: project.key_achievements,
      githubUrl: project.github_url,
      liveUrl: project.live_url,
      problemSolved: project.problem_solved,
      technicalHighlights: project.technical_highlights,
      teamSize: project.team_size,
      methodologies: project.methodologies
    }));

  // Return the projects in the specified order
  const allProjects = [
    healthHomeProject,
    cllctveProject,
    tutorDProject,
    ...otherProjects
  ];

  return allProjects;
};
