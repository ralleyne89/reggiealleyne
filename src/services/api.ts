import { createClient } from '@supabase/supabase-js';
import { ProjectType } from '../types/project';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export const getProject = async (id: number): Promise<ProjectType> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('Project not found');
  }

  return {
    ...data,
    conclusion: {
      impact: data.impact,
      learnings: data.learnings,
      nextSteps: data.next_steps
    }
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

  return data.map(project => ({
    ...project,
    conclusion: {
      impact: project.impact,
      learnings: project.learnings,
      nextSteps: project.next_steps
    }
  }));
};