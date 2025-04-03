
import { ProjectType } from '../../types/project';
import { getSupabaseProjectBySlug, getSupabaseProjectById, getSupabaseProjects } from './supabaseProjects';
import { 
  getPredefinedProjectById, 
  getPredefinedProjectBySlug, 
  getAllPredefinedProjects,
  isPredefinedProject,
  isPredefinedProjectSlug
} from './predefinedProjects';
import { sortProjectsByDate } from './utils';

export const getProject = async (idOrSlug: number | string): Promise<ProjectType> => {
  console.log('Getting project with id or slug:', idOrSlug);
  
  try {
    // Handle string slugs
    if (typeof idOrSlug === 'string') {
      // Skip Health@Home project
      if (idOrSlug === 'health-at-home') {
        throw new Error(`Project with slug "${idOrSlug}" not found`);
      }
      
      // First check predefined projects
      const predefinedProject = getPredefinedProjectBySlug(idOrSlug);
      if (predefinedProject) {
        return predefinedProject;
      }
      
      // Then try to get project by slug from Supabase
      const supabaseProject = await getSupabaseProjectBySlug(idOrSlug);
      if (supabaseProject) {
        return supabaseProject;
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

const getProjectById = async (id: number): Promise<ProjectType> => {
  console.log('Getting project by ID:', id);
  
  // Skip Health@Home project
  if (id === 0) {
    throw new Error(`Project with ID ${id} not found`);
  }
  
  // First check predefined projects
  if (isPredefinedProject(id)) {
    const predefinedProject = getPredefinedProjectById(id);
    if (predefinedProject) {
      return predefinedProject;
    }
  }

  // Then try to get from Supabase
  const supabaseProject = await getSupabaseProjectById(id);
  if (supabaseProject) {
    return supabaseProject;
  }

  throw new Error(`Project with ID ${id} not found`);
};

export const getAllProjects = async (): Promise<ProjectType[]> => {
  console.log('Getting all projects');
  
  try {
    // Get predefined projects
    const predefinedProjects = await getAllPredefinedProjects();
    
    try {
      // Get projects from Supabase
      const supabaseProjects = await getSupabaseProjects();
      
      // Filter out supabase projects that would conflict with predefined ones
      const nonConflictingProjects = supabaseProjects.filter(project => 
        !isPredefinedProject(project.id)
      );

      // Combine predefined and Supabase projects
      const allProjects = [...predefinedProjects, ...nonConflictingProjects];

      // Remove potential duplicates based on project title
      const uniqueProjects = allProjects.filter(
        (project, index, self) => index === self.findIndex((p) => p.title === project.title)
      );

      // Filter out Health@Home project
      const filteredProjects = uniqueProjects.filter(project => 
        project.id !== 0 && project.slug !== 'health-at-home'
      );

      // Sort projects by year (newest first)
      return sortProjectsByDate(filteredProjects);
    } catch (innerError) {
      console.error('Error fetching from Supabase:', innerError);
      // Fall back to just predefined projects (filtered)
      const filteredPredefinedProjects = predefinedProjects.filter(project => 
        project.id !== 0 && project.slug !== 'health-at-home'
      );
      return sortProjectsByDate(filteredPredefinedProjects);
    }
  } catch (error) {
    console.error('Error in getAllProjects:', error);
    // Return empty array to prevent complete failure
    return [];
  }
};
