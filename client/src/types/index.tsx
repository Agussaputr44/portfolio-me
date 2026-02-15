export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  repo_url?: string;
  image_url?: string;
}

export interface GithubData {
  total: number;
  contributions: {
    contributionCount: number;
    date: string;
    color: string;
  }[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  pdf_url?: string;
  created_at: string;
}

export interface ApiResponse<T> {
  status: boolean; 
  data: T;
  message?: string; 
}