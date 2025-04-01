
import { supabase } from '@/integrations/supabase/client';
import { mapSupabaseProjectToProjectType } from './utils';
import { ProjectType } from '../../types/project';

// Get a project from Supabase by slug
export const getSupabaseProjectBySlug = async (slug: string): Promise<ProjectType | null> => {
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
    console.error('Error in getSupabaseProjectBySlug:', error);
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
      console.error('Supabase error:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    // Create a ProjectType object from the Supabase data
    return mapSupabaseProjectToProjectType(data);
  } catch (error) {
    console.error('Error in getSupabaseProjectById:', error);
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
      console.error('Supabase error:', error);
      return [];
    }

    // Map Supabase data to ProjectType
    return data.map(project => mapSupabaseProjectToProjectType(project));
  } catch (error) {
    console.error('Error in getSupabaseProjects:', error);
    return [];
  }
};
