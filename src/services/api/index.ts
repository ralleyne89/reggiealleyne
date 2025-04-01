
import { ProjectType } from '../../types/project';
import { getHealthHomeProject } from './projects/healthHome';
import { getCllctveProject } from './projects/cllctve';
import { getTutorDProject } from './projects/tutorD';
import { getTechNoirProject } from './projects/techNoir';
import { getDoggyDateProject } from './projects/doggyDate';
import { getImprovLearningProject } from './projects/improvLearning';
import { getWristbandProject } from './projects/wristband';
import { supabase } from '@/integrations/supabase/client';

export const getProject = async (idOrSlug: number | string): Promise<ProjectType> => {
  console.log('Getting project with id or slug:', idOrSlug);
  
  try {
    // Handle string slugs
    if (typeof idOrSlug === 'string') {
      // Try to get project by slug directly 
      const slugProject = await getProjectBySlug(idOrSlug);
      if (slugProject) {
        return slugProject;
      }
      
      // If not found by slug, try to convert string to number
      const numericId = Number(idOrSlug);
      if (!isNaN(numericId)) {
        return getProjectById(numericId);
      }
      throw new Error(`Project with slug "${idOrSlug}" not found`);
    }
    
    // Handle numeric IDs
    return getProjectById(idOrSlug);
  } catch (error) {
    console.error('Error in getProject:', error);
    throw error;
  }
};

const getProjectBySlug = async (slug: string): Promise<ProjectType | null> => {
  console.log('Getting project by slug:', slug);
  
  // Handle specific slugs for predefined projects
  if (slug === 'health-at-home') return getHealthHomeProject();
  if (slug === 'cllctve-platform') return getCllctveProject();
  if (slug === 'tutor-d') return getTutorDProject();
  if (slug === 'tech-noir') return getTechNoirProject();
  if (slug === 'doggy-date') return getDoggyDateProject();
  if (slug === 'improv-learning') return getImprovLearningProject();
  if (slug === 'wristband') return getWristbandProject();
  
  // Try to get from Supabase by slug
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();
      
    if (error) {
      console.error('Supabase error:', error);
      return null;
    }
    
    if (!data) {
      return null;
    }
    
    // Create a ProjectType object from the Supabase data
    return mapSupabaseProjectToProjectType(data);
  } catch (error) {
    console.error('Error in getProjectBySlug:', error);
    return null;
  }
};

const getProjectById = async (id: number): Promise<ProjectType> => {
  console.log('Getting project by ID:', id);
  
  try {
    // Special case for each predefined project
    if (id === 0) return getHealthHomeProject();
    if (id === 1) return getCllctveProject();
    if (id === 2) return getTutorDProject();
    if (id === 3) return getTechNoirProject();
    if (id === 4) return getDoggyDateProject();
    if (id === 5) return getImprovLearningProject();
    if (id === 6) return getWristbandProject();

    // For other projects from Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to fetch project: ' + error.message);
    }

    if (!data) {
      throw new Error(`Project with ID ${id} not found`);
    }

    // Create a ProjectType object from the Supabase data
    return mapSupabaseProjectToProjectType(data);
  } catch (error) {
    console.error('Error in getProjectById:', error);
    throw error;
  }
};

const mapSupabaseProjectToProjectType = (data: any): ProjectType => {
  return {
    id: data.id,
    slug: data.slug || `project-${data.id}`,
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
    date: data.date || null
  };
};

export const getAllProjects = async (): Promise<ProjectType[]> => {
  console.log('Getting all projects');
  
  try {
    // Create our predefined projects array first
    const mainProjects = [
      await getHealthHomeProject(),
      await getCllctveProject(),
      await getTutorDProject(),
      await getTechNoirProject(),
      await getDoggyDateProject(),
      await getImprovLearningProject(),
      await getWristbandProject()
    ];

    try {
      // Get other projects from Supabase
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        // Sort and return just the main projects if we can't get the others
        return sortProjectsByDate(mainProjects);
      }

      // Process any other projects from Supabase that don't conflict with our predefined ones
      const otherProjects = data
        .filter(project => ![0, 1, 2, 3, 4, 5, 6].includes(project.id))
        .map(project => mapSupabaseProjectToProjectType(project));

      // Remove potential duplicates based on project title
      const uniqueProjects = [...mainProjects, ...otherProjects].filter(
        (project, index, self) => index === self.findIndex((p) => p.title === project.title)
      );

      // Sort projects by date (newest first)
      return sortProjectsByDate(uniqueProjects);
    } catch (innerError) {
      console.error('Error fetching from Supabase:', innerError);
      // Sort and return just the main projects if anything goes wrong
      return sortProjectsByDate(mainProjects);
    }
  } catch (error) {
    console.error('Error in getAllProjects:', error);
    // Return empty array to prevent complete failure
    return [];
  }
};

// Helper function to sort projects by date (newest first)
const sortProjectsByDate = (projects: ProjectType[]): ProjectType[] => {
  return [...projects].sort((a, b) => {
    // Extract date from project
    const dateA = a.date || a.year + '-01-01';  // Fallback to year if specific date not available
    const dateB = b.date || b.year + '-01-01';
    
    // Compare dates (newer dates first)
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
};
