// src/services/api.ts
import axios from 'axios';
import { Project, GithubData } from '../types';

// Setup Base URL (sesuai backend Express kamu)
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Function ambil Projects
export const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await api.get('/projects');
  return data.data; // Pastikan sesuai struktur response backend
};

// Function ambil Github
export const fetchGithub = async (): Promise<GithubData> => {
  const { data } = await api.get('/github/contributions');
  return data.data;
};