export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  repo_url?: string;
  image_url?: string;
}

export interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface GithubData {
  total: number;
  contributions: ContributionDay[];
}