
import { supabase } from '@/integrations/supabase/client';
import { mapSupabaseProjectToProjectType } from './utils';
import { ProjectType } from '../../types/project';
import { Tables } from '@/integrations/supabase/types';

// Get a project from Supabase by slug
export const getSupabaseProjectBySlug = async (slug: string): Promise<ProjectType | null> => {
  try {
    // Since slug doesn't exist in the DB, let's check if it's a numeric slug
    // and try to fetch by ID instead
    const numericSlug = parseInt(slug, 10);
    if (!isNaN(numericSlug)) {
      return getSupabaseProjectById(numericSlug);
    }
    
    // If it's not numeric, we can't fetch by slug since the column doesn't exist
    return null;
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

    if (!data) return null;

    // Create a ProjectType object from the Supabase data
    return mapSupabaseProjectToProjectType(data);
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

    if (!data || data.length === 0) return [];

    // Map Supabase data to ProjectType
    return data.map(project => mapSupabaseProjectToProjectType(project));
  } catch (error) {
    console.error('Unexpected error in getSupabaseProjects:', error);
    return [];
  }
};
