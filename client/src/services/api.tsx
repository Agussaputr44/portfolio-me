import axios from 'axios';
import { Project, GithubData, Certificate, ApiResponse } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// GET Projects
export const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await api.get<ApiResponse<Project[]>>('/projects');
  return data.data; 
};

// GET Github Contributions
export const fetchGithub = async (): Promise<GithubData> => {
  const { data } = await api.get<ApiResponse<GithubData>>('/github/contributions');
  return data.data;
};

// GET Certificates (Sekarang konsisten menggunakan instance 'api')
export const fetchCertificates = async (): Promise<Certificate[]> => {
  const { data } = await api.get<ApiResponse<Certificate[]>>('/certificates');
  return data.data;
};