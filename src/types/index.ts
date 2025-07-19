export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  location: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    website?: string;
  };
  resume?: string;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tool' | 'other';
  icon: string;
  color: string;
}

export type ProjectCategory = 'web-app' | 'mobile-app' | 'library' | 'tool' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: Technology[];
  category: ProjectCategory;
  imageUrl: string;
  images: string[];
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  completedAt: Date;
  status: 'completed' | 'in-progress' | 'planned';
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-100
  experience: string;
  icon: string;
  color: string;
  projects: string[]; // プロジェクトIDの配列
}

export interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  skills: string[];
}

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface SkillChartProps {
  skills: {
    category: string;
    items: {
      name: string;
      level: number;
      experience: string;
      icon: string;
    }[];
  }[];
}