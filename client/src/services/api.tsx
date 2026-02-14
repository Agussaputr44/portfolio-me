import axios from 'axios';
import { Project, GithubData } from '../types';

const api = axios.create({
  baseURL: 'https://portfolio-500xkq5i4-agusptr44s-projects.vercel.app/api',
});


// Function get Projects
export const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await api.get('/projects');
  return data.data; 
};

// Function get Github
export const fetchGithub = async (): Promise<GithubData> => {
  const { data } = await api.get('/github/contributions');
  return data.data;
};