export interface CodeforcesUser {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
}

export interface CodeforcesRating {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

export interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

export interface TechnicalProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tabs: ProjectTab[];
}

export interface CoreProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tabs: ProjectTab[];
}

export interface ManagementProject {
  id: number;
  title: string;
  description: string;
  scope: string[];
  impact: string;
  tabs: ProjectTab[];
}

export interface ProjectTab {
  label: string;
  icon: any;
  link: string;
}

export interface ProjectCategory {
  title: string;
  icon: any;
  color: string;
  description: string;
  onClick?: () => void;
}

export interface GitHubStats {
  repos: string;
  followers: string;
  stars: string;
}