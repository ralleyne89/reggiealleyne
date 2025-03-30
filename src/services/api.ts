
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

  // Create Health@Home project as the first item
  const healthHomeProject: ProjectType = {
    id: 0,
    title: "Health@Home Platform",
    description: "A comprehensive telehealth solution for Blue Shield of California, enabling remote patient monitoring during COVID-19.",
    fullDescription: "A full-featured telehealth platform designed to help patients connect with healthcare providers remotely during the COVID-19 pandemic, with robust monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Enterprise UX", "Healthcare", "Telehealth"],
    role: "Lead UX Designer",
    duration: "6 months",
    year: "2020",
    challenge: "Rapidly develop an intuitive telehealth platform during pandemic",
    process: ["Research", "Ideation", "Prototyping", "Testing", "Implementation"],
    deliverables: ["UX Strategy", "User Flows", "Wireframes", "Prototypes", "Design System"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
    ],
    conclusion: {
      impact: "42% increase in patient engagement, 28% reduction in readmissions",
      learnings: "The importance of simplified user flows for elderly patients and healthcare providers under stress",
      nextSteps: "Expanding platform capabilities to include preventative care monitoring"
    },
    techStack: ["React", "Node.js", "MongoDB", "WebRTC"],
    keyAchievements: ["Launched in 4 months", "Onboarded 2,000+ providers", "Served 50,000+ patients"],
    problemSolved: "Inefficient remote healthcare delivery during pandemic restrictions",
    technicalHighlights: ["HIPAA-compliant video conferencing", "Real-time vital monitoring", "Electronic health record integration"],
    teamSize: "12 members",
    methodologies: ["Design Thinking", "Agile", "User-Centered Design"],
    summary: "A telehealth platform enabling remote patient monitoring during COVID-19 with significant impact on patient outcomes."
  };

  // Add the Health@Home project as the first item
  const allProjects = [
    healthHomeProject,
    ...data.map(project => ({
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
    }))
  ];

  return allProjects;
};
