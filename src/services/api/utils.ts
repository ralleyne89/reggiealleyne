
import { ProjectType } from '../../types/project';
import { Tables } from '@/integrations/supabase/types';

// Helper function to sort projects by date (newest first)
export const sortProjectsByDate = (projects: ProjectType[]): ProjectType[] => {
  return [...projects].sort((a, b) => {
    // Extract date from project
    const dateA = a.date || a.year + '-01-01';  // Fallback to year if specific date not available
    const dateB = b.date || b.year + '-01-01';
    
    // Compare dates (newer dates first)
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
};

// Create a ProjectType object from the Supabase data
export const mapSupabaseProjectToProjectType = (data: Tables<'projects'>): ProjectType => {
  // Create a normalized slug from the title if available
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')  // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/-+/g, '-');      // Remove consecutive hyphens
  };

  return {
    id: data.id,
    slug: generateSlug(data.title),  // Generate a better slug from the title
    title: data.title,
    description: data.description,
    fullDescription: data.full_description || null,
    image: data.image,
    tags: data.tags || [],
    role: data.role || '',
    duration: data.duration || '',
    year: data.year || '',
    challenge: data.challenge || null,
    process: data.process || [],
    deliverables: data.deliverables || [],
    images: data.images || [],
    conclusion: {
      impact: data.impact || null,
      learnings: data.learnings || null,
      nextSteps: data.next_steps || null
    },
    techStack: data.tech_stack || [],
    keyAchievements: data.key_achievements || [],
    githubUrl: data.github_url || null,
    liveUrl: data.live_url || null,
    problemSolved: data.problem_solved || null,
    solution: data.solution || null,
    technicalHighlights: data.technical_highlights || [],
    teamSize: data.team_size || null,
    methodologies: data.methodologies || [],
    summary: data.summary || data.description,
    date: data.year + '-01-01' // Generate a default date from the year
  };
};
