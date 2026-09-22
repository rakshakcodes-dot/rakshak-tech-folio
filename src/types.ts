export interface NavItem {
  label: string;
  href: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  isEditable?: boolean;
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ProjectData {
  title: string;
  tagline: string;
  badge: string;
  problem: string;
  problemDetails: string[];
  solution: string;
  solutionHighlights: string[];
  rakshakRole: {
    title: string;
    summary: string;
    details: string[];
  };
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  links: {
    github: string;
    liveDemo?: string;
  };
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
