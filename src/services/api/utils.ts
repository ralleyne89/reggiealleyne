
import { ProjectType } from '../../types/project';
import { Tables } from '@/integrations/supabase/types';

// Helper function to sort projects by year (newest first)
export const sortProjectsByDate = (projects: ProjectType[]): ProjectType[] => {
  return [...projects].sort((a, b) => {
    // Extract year from project and convert to number
    const yearA = typeof a.year === 'string' ? parseInt(a.year, 10) : 0;
    const yearB = typeof b.year === 'string' ? parseInt(b.year, 10) : 0;
    
    // Compare years (newer years first)
    return yearB - yearA;
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
      .replace(/-+/g, '-')       // Remove consecutive hyphens
      .trim();                   // Trim any leading/trailing whitespace
  };

  // Generate the project slug
  const slug = generateSlug(data.title);
  
  console.log(`Generated slug for "${data.title}": ${slug}`);

  return {
    id: data.id,
    slug: slug,  // Use the generated slug
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
