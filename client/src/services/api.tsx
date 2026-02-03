import axios from 'axios';
import { Project, GithubData } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
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