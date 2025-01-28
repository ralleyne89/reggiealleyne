import { supabase } from '@/integrations/supabase/client';
import { ProjectType } from '../types/project';

export const getProject = async (id: number): Promise<ProjectType> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    throw new Error('Project not found');
  }

  if (!data) {
    throw new Error('Project not found');
  }

  return {
    ...data,
    fullDescription: data.full_description,
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
    fullDescription: project.full_description,
    conclusion: {
      impact: project.impact,
      learnings: project.learnings,
      nextSteps: project.next_steps
    }
  }));
};