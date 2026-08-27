export interface MetricItem {
  label: string;
  value: string;
  note: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  duration?: string;
  category: string;
  filterCategory: 'AI / ML' | 'Computer Vision' | 'Cybersecurity' | 'Full Stack' | 'Backend' | 'Mobile' | 'Research' | 'Real-Time Systems' | 'Academic Project';
  credibilityTag: 'Built' | 'Prototype' | 'Academic Project' | 'Research Concept';
  associatedWith?: string;
  description: string;
  shortSummary: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  keyFeatures: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  isFeatured?: boolean;
  
  // Advanced Technical Detail Fields
  architectureFlow?: string[];
  reportedMetrics?: MetricItem[];
  engineeringTargets?: string[];
  limitations?: string[];
  futureRoadmap?: string[];
  visualType?: 'industrial-flash' | 'deep-waf' | 'disaster-ai' | 'qr-buddy' | 'vc-intel' | 'tars' | 'skin-disease';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: string;
  category: 'Certification' | 'Workshop' | 'Hackathon' | 'Conference' | 'Achievement' | 'Participation' | 'Training';
  image: string;
  description: string;
  highlights?: string[];
  associatedWith?: string;
}

export interface Achievement {
  id: string;
  title: string;
  recognition: string;
  eventOrAward: string;
  institution: string;
  date: string;
  role?: string;
  description: string;
  image: string;
  isHero?: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  type: string;
  presentation: string;
  conference: string;
  date: string;
  associatedInstitution: string;
  organizedJointly?: string;
  description: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: 'Freelance' | 'Training' | 'Project';
  duration: string;
  location: string;
  responsibilities: string[];
  image?: string;
  audience?: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  cgpaOrGrade?: string;
  status?: string;
  activities?: string[];
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  category: string;
  description: string;
  institution?: string;
}
