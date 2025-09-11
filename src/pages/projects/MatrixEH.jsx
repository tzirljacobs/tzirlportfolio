import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function MatrixEH() {
  const projectData = {
    title: 'MatrixEH Business Website',
    type: 'website',
    overview:
      'A fully responsive WordPress site designed and developed for a small business, featuring comprehensive branding and UX design.',
    sections: [
      {
        title: 'Project Scope',
        type: 'list',
        content: [
          'Client requirement gathering and analysis',
          'Complete design system development',
          'Moodboard and branding creation',
          'UI element design',
          'User flow prototyping in Figma',
          'WordPress development and security configuration',
          'Client training and handoff',
        ],
      },
    ],
    technologies: ['WordPress', 'Figma', 'UX Design'],
    liveLink: 'https://matrixeh.com',
    images: [
      {
        url: '/projects/matrixeh/homepage.jpg',
        caption: 'Responsive homepage design with brand elements',
      },
      {
        url: '/projects/matrixeh/services.jpg',
        caption: 'Services page showcasing business offerings',
      },
      {
        url: '/projects/matrixeh/design-system.jpg',
        caption: 'Design system and brand guidelines',
      },
      {
        url: '/projects/matrixeh/mobile.jpg',
        caption: 'Mobile-optimized navigation and layout',
      },
    ],
  };

  return <ProjectPage {...projectData} />;
}
