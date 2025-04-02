import { ProjectType } from '../../types/project';
import { Tables } from '@/integrations/supabase/types';

// Helper function to sort projects by date (newest first)
export const sortProjectsByDate = (projects: ProjectType[]): ProjectType[] => {
  return [...projects].sort((a, b) => {
    // Extract year from project and convert to number
    const yearA = a.year ? parseInt(a.year) : 0;
    const yearB = b.year ? parseInt(b.year) : 0;

    // If years are the same, use ID for consistent sorting
    if (yearB === yearA) {
      return (b.id || 0) - (a.id || 0);
    }

    return yearB - yearA;
  });
};

/**
 * Map a Supabase project to our ProjectType
 */
export const mapSupabaseProjectToProjectType = (
  data: Tables<'projects'>
): ProjectType => {
  try {
    return {
      id: data.id,
      // Use null coalescing for optional fields that might not exist in the database
      slug: undefined, // Slug doesn't exist in the database, set to undefined
      title: data.title,
      description: data.description,
      summary: data.summary || null,
      fullDescription: data.full_description || null,
      image: data.image,
      tags: data.tags || [],
      category: null, // Category doesn't exist in the database, set to null
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
        nextSteps: data.next_steps || null,
      },
      techStack: data.tech_stack || [],
      keyAchievements: data.key_achievements || [],
      problemSolved: data.problem_solved || null,
      solution: data.solution || null,
      technicalHighlights: data.technical_highlights || [],
      teamSize: data.team_size || null,
      methodologies: data.methodologies || [],
      date: data.created_at,
      githubUrl: data.github_url || null,
      liveUrl: data.live_url || null,
      figmaUrl: null // Figma URL doesn't exist in the database, set to null
    };
  } catch (error) {
    console.error('Error mapping Supabase project to ProjectType:', error);
    throw error;
  }
};
