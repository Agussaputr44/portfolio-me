
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  imageUrl?: string;
}

export interface CreateProjectInput {
  title: string;
  description: string;
  tech_stack: string[];
  repo_url?: string;
  image_url?: string;
}