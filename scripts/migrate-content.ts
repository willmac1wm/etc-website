/**
 * Migration Script: Convert mockData.ts to CMS-compatible markdown files
 * 
 * Run with: npx ts-node scripts/migrate-content.ts
 * Or copy the output manually to your content folder
 */

// This script generates the markdown files from your existing data.
// You can run it once to create initial content files.

const BLOG_POSTS = [
  {
    id: '1',
    title: "Why Residential Projects Need 'Government-Grade' Safety",
    excerpt: 'How we apply federal safety standards to your home renovation to protect your family and property.',
    date: 'May 12, 2024',
    author: 'Sarah Jenkins, Project Executive',
    category: 'Safety',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    readTime: '5 min read',
    content: `When you hire a contractor for a kitchen remodel or a home addition, you rarely ask about their EMR rating or OSHA certifications...`
  },
  // Add more posts from your mockData.ts
];

const PROJECTS = [
  {
    id: '1',
    title: 'Modern Farmhouse Kitchen Expansion',
    category: 'Residential',
    location: 'Princeton, NJ',
    description: "A complete structural expansion...",
    contractValue: '$125K',
    completionDate: '2023-11',
    images: {
      before: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    tags: ['Structural', 'Plumbing', 'High-End Finishes'],
    challenge: 'The original layout had load-bearing walls...',
    solution: 'We installed a flush steel beam...',
    testimonial: {
      text: "ETC brought a level of professionalism...",
      author: "Jennifer M., Homeowner"
    }
  },
];

function generateBlogMarkdown(post: any): string {
  return `---
title: "${post.title}"
date: "${post.date}"
author: "${post.author}"
category: "${post.category}"
imageUrl: "${post.imageUrl}"
excerpt: "${post.excerpt}"
readTime: "${post.readTime}"
---

${post.content || post.excerpt}
`;
}

function generateProjectMarkdown(project: any): string {
  return `---
title: "${project.title}"
category: "${project.category}"
location: "${project.location}"
contractValue: "${project.contractValue || ''}"
completionDate: "${project.completionDate}"
description: "${project.description}"
images:
  before: "${project.images.before}"
  after: "${project.images.after}"
tags:
${project.tags.map((t: string) => `  - ${t}`).join('\n')}
challenge: "${project.challenge || ''}"
solution: "${project.solution || ''}"
testimonial:
  text: "${project.testimonial?.text || ''}"
  author: "${project.testimonial?.author || ''}"
---
`;
}

// Generate files
console.log('=== BLOG POSTS ===\n');
BLOG_POSTS.forEach(post => {
  const filename = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-');
  console.log(`--- content/blog/${filename}.md ---`);
  console.log(generateBlogMarkdown(post));
  console.log('\n');
});

console.log('=== PROJECTS ===\n');
PROJECTS.forEach(project => {
  const filename = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-');
  console.log(`--- content/projects/${filename}.md ---`);
  console.log(generateProjectMarkdown(project));
  console.log('\n');
});
