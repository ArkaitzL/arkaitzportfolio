export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  location: string;
  avatar: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  malt: string;
  itchio: string;
  masinfo: string;
  booking?: string; // Added booking field
}

export interface SkillCategory {
  category: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'game';
  featured: boolean;
  demoUrl: string;
  githubUrl: string;
  details: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  links: SocialLinks;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
}