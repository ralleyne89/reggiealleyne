
import { supabase } from '@/integrations/supabase/client';
import { mapSupabaseProjectToProjectType } from './utils';
import { ProjectType } from '../../types/project';
import { Tables } from '@/integrations/supabase/types';

type SupabaseProject = Tables<'projects'>;

// Get a project from Supabase by slug
export const getSupabaseProjectBySlug = async (slug: string): Promise<ProjectType | null> => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();
      
    if (error) {
      console.error('Supabase error when fetching project by slug:', error.message);
      return null;
    }
    
    if (!data) {
      console.log(`No project found with slug: ${slug}`);
      return null;
    }
    
    // Create a ProjectType object from the Supabase data
    return mapSupabaseProjectToProjectType(data as SupabaseProject);
  } catch (error) {
    console.error('Unexpected error in getSupabaseProjectBySlug:', error);
    return null;
  }
};

// Get a project from Supabase by ID
export const getSupabaseProjectById = async (id: number): Promise<ProjectType | null> => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Supabase error when fetching project by ID:', error.message);
      return null;
    }

    if (!data) {
      console.log(`No project found with ID: ${id}`);
      return null;
    }

    // Create a ProjectType object from the Supabase data
    return mapSupabaseProjectToProjectType(data as SupabaseProject);
  } catch (error) {
    console.error('Unexpected error in getSupabaseProjectById:', error);
    return null;
  }
};

// Get all projects from Supabase
export const getSupabaseProjects = async (): Promise<ProjectType[]> => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error when fetching all projects:', error.message);
      return [];
    }

    if (!data || data.length === 0) {
      console.log('No projects found in Supabase');
      return [];
    }

    // Map Supabase data to ProjectType
    return data.map(project => mapSupabaseProjectToProjectType(project as SupabaseProject));
  } catch (error) {
    console.error('Unexpected error in getSupabaseProjects:', error);
    return [];
  }
};
