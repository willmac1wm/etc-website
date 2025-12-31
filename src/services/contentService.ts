/**
 * Content Service - Bridge between CMS content and React components
 * 
 * This service provides content for your React app.
 * Currently uses mock data - when Decap CMS is connected via Git,
 * you can update this to read from markdown files.
 */

import { Project, BlogPost, StatMetric, SafetyData } from '../types';

// Import mock data
import { PROJECTS as MOCK_PROJECTS, BLOG_POSTS as MOCK_BLOG, STATS as MOCK_STATS, SAFETY_CHART_DATA as MOCK_SAFETY } from './mockData';
import { TOWN_DATA as MOCK_TOWNS } from './locationData';
import { SERVICE_DATA as MOCK_SERVICES } from './serviceData';

export const contentService = {
  /**
   * Get all blog posts
   */
  getBlogPosts: async (): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_BLOG), 100);
    });
  },

  /**
   * Get single blog post by ID
   */
  getBlogPostById: async (id: string): Promise<BlogPost | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_BLOG.find(p => p.id === id)), 100);
    });
  },

  /**
   * Get all projects
   */
  getProjects: async (): Promise<Project[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_PROJECTS), 100);
    });
  },

  /**
   * Get single project by ID
   */
  getProjectById: async (id: string): Promise<Project | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_PROJECTS.find(p => p.id === id)), 100);
    });
  },

  /**
   * Get all services
   */
  getServices: async () => {
    return Promise.resolve(MOCK_SERVICES);
  },

  /**
   * Get service by slug
   */
  getServiceBySlug: async (slug: string) => {
    return MOCK_SERVICES[slug];
  },

  /**
   * Get all towns/locations
   */
  getTowns: async () => {
    return Promise.resolve(MOCK_TOWNS);
  },

  /**
   * Get town by slug
   */
  getTownBySlug: async (slug: string) => {
    return MOCK_TOWNS[slug];
  },

  /**
   * Get stats
   */
  getStats: async (): Promise<StatMetric[]> => {
    return Promise.resolve(MOCK_STATS);
  },

  /**
   * Get safety chart data
   */
  getSafetyData: async (): Promise<SafetyData[]> => {
    return Promise.resolve(MOCK_SAFETY);
  }
};

export default contentService;
