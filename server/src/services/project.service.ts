import { supabase } from '../config/supabase';
import { Project, CreateProjectInput } from '../interfaces/project.interface';

export const getAllProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data as Project[];
};

export const getProjectById = async (id: number): Promise<Project | null> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return null; 
  }

  return data as Project;
};


export const createNewProject = async (payload: CreateProjectInput): Promise<Project | null> => {
  const { data, error } = await supabase
    .from('projects')
    .insert(payload) 
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Project;
};