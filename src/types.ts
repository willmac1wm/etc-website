export enum ProjectCategory {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  INFRASTRUCTURE = 'Infrastructure',
  RENOVATION = 'Renovation',
  MAINTENANCE = 'Maintenance',
}

export interface ProjectImage {
  url: string;
  label: string; // e.g., "Before", "After", "In Progress"
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  contractValue?: string;
  completionDate: string;
  images: {
    before: string;
    after: string;
  };
  tags: string[];
  // Extended fields for detail view
  challenge?: string;
  solution?: string;
  testimonial?: {
    text: string;
    author: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  readTime: string;
  content?: string; // HTML string for the full article
}

export interface StatMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface SafetyData {
  name: string;
  incidents: number;
  hours: number; // in thousands
}