
import { ProjectType } from '../../types/project';
import { getHealthHomeProject } from './projects/healthHome';
import { getCllctveProject } from './projects/cllctve';
import { getTutorDProject } from './projects/tutorD';
import { getTechNoirProject } from './projects/techNoir';
import { getDataVizProject } from './projects/dataViz';
import { getImprovLearningProject } from './projects/improvLearning';
import { getWristbandProject } from './projects/wristband';
import { supabase } from '@/integrations/supabase/client';

export const getProject = async (idOrSlug: number | string): Promise<ProjectType> => {
  console.log('Getting project with id or slug:', idOrSlug);
  
  // Handle string slugs
  if (typeof idOrSlug === 'string') {
    // Handle specific slug for wristband
    if (idOrSlug === 'wristband') {
      return getWristbandProject();
    }
    
    // Map slugs to IDs
    const slugMap: Record<string, number> = {
      'health-at-home': 0,
      'cllctve-platform': 1,
      'tutor-d': 2,
      'tech-noir': 3,
      'dataviz-dashboard': 4,
      'improv-learning': 5,
      'wristband': 6
    };
    
    const id = slugMap[idOrSlug];
    if (id !== undefined) {
      return getProjectById(id);
    } else {
      throw new Error('Project not found');
    }
  }
  
  // Handle numeric IDs
  return getProjectById(idOrSlug);
};

const getProjectById = async (id: number): Promise<ProjectType> => {
  console.log('Getting project by ID:', id);
  
  try {
    // Special case for wristband project
    if (id === 6) return getWristbandProject();
    
    // Special case for each predefined project
    if (id === 0) return getHealthHomeProject();
    if (id === 1) return getCllctveProject();
    if (id === 2) return getTutorDProject();
    if (id === 3) return getTechNoirProject();
    if (id === 4) return getDataVizProject();
    if (id === 5) return getImprovLearningProject();

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
      throw new Error('Project not found');
    }

    // Create a ProjectType object from the Supabase data
    return {
      ...data,
      fullDescription: data.full_description,
      conclusion: {
        impact: data.impact || null,
        learnings: data.learnings || null,
        nextSteps: data.next_steps || null
      },
      techStack: data.tech_stack,
      keyAchievements: data.key_achievements,
      githubUrl: data.github_url,
      liveUrl: data.live_url,
      problemSolved: data.problem_solved,
      solution: data.solution || null, // Ensure solution has a fallback to null
      technicalHighlights: data.technical_highlights,
      teamSize: data.team_size,
      methodologies: data.methodologies,
      summary: data.summary || data.description // Fallback for summary if not available
    };
  } catch (error) {
    console.error('Error in getProjectById:', error);
    throw error;
  }
};

export const getAllProjects = async (): Promise<ProjectType[]> => {
  console.log('Getting all projects');
  
  try {
    // Create our predefined projects array first to ensure they always appear
    const mainProjects = [
      await getHealthHomeProject(),
      await getCllctveProject(),
      await getTutorDProject(),
      await getTechNoirProject(),
      await getDataVizProject(),
      await getImprovLearningProject(),
      await getWristbandProject()
    ];

    // Get other projects from Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      // Return just the main projects if we can't get the others
      return mainProjects;
    }

    // Process any other projects from Supabase that don't conflict with our predefined ones
    const otherProjects = data
      .filter(project => ![0, 1, 2, 3, 4, 5, 6].includes(project.id))
      .map(project => ({
        ...project,
        fullDescription: project.full_description,
        conclusion: {
          impact: project.impact || null,
          learnings: project.learnings || null,
          nextSteps: project.next_steps || null
        },
        techStack: project.tech_stack,
        keyAchievements: project.key_achievements,
        githubUrl: project.github_url,
        liveUrl: project.live_url,
        problemSolved: project.problem_solved,
        solution: project.solution || null,
        technicalHighlights: project.technical_highlights,
        teamSize: project.team_size,
        methodologies: project.methodologies,
        summary: project.summary || project.description // Fallback for summary
      }));

    // Remove potential duplicates based on project title
    const uniqueProjects = [...mainProjects, ...otherProjects].filter(
      (project, index, self) => index === self.findIndex((p) => p.title === project.title)
    );

    return uniqueProjects;
  } catch (error) {
    console.error('Error in getAllProjects:', error);
    throw error;
  }
};
