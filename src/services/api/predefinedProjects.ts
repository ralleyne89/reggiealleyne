
import { ProjectType } from '../../types/project';
import { getCllctveProject } from './projects/cllctve';
import { getTutorDProject } from './projects/tutorD';
import { getTechNoirProject } from './projects/techNoir';
import { getDoggyDateProject } from './projects/doggyDate';
import { getImprovLearningProject } from './projects/improvLearning';
import { getWristbandProject } from './projects/wristband';
import { getChillVibesProject } from './projects/chillVibes';
import { getHealthHomeProject } from './projects/healthHome';

// Map of ID to project getter functions
const projectGetters = {
  0: getHealthHomeProject,
  1: getCllctveProject,
  2: getTutorDProject,
  3: getTechNoirProject,
  4: getDoggyDateProject,
  5: getImprovLearningProject,
  6: getWristbandProject,
  7: getChillVibesProject,
};

// Map of slug to project ID - FIXED to ensure correct mapping
const slugToIdMap: Record<string, number> = {
  'health-at-home': 0,
  'cllctve-platform': 1,
  'tutor-d': 2,
  'tech-noir': 3,
  'doggy-date': 4,
  'improv-learning': 5,
  'wristband': 6,
  'chill-vibes-music-player': 7,
};

// Get a predefined project by ID
export const getPredefinedProjectById = (id: number): ProjectType | null => {
  const getterFn = projectGetters[id];
  return getterFn ? getterFn() : null;
};

// Get a predefined project by slug
export const getPredefinedProjectBySlug = (slug: string): ProjectType | null => {
  const id = slugToIdMap[slug];
  if (id === undefined) return null;
  return getPredefinedProjectById(id);
};

// Get all predefined projects
export const getAllPredefinedProjects = async (): Promise<ProjectType[]> => {
  const projects: ProjectType[] = [];
  
  for (const id of Object.keys(projectGetters).map(Number)) {
    const project = getPredefinedProjectById(id);
    if (project) projects.push(project);
  }
  
  return projects;
};

// Check if a project ID is for a predefined project
export const isPredefinedProject = (id: number): boolean => {
  return id in projectGetters;
};

// Check if a project slug is for a predefined project
export const isPredefinedProjectSlug = (slug: string): boolean => {
  return slug in slugToIdMap;
};
