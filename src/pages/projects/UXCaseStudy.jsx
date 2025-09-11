import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function UXCaseStudy() {
  const projectData = {
    title: 'UX Case Study Series',
    type: 'research',
    overview:
      'A comprehensive UX design portfolio showcasing the complete UX process through three key phases: Discover, Define, and Develop.',
    sections: [
      {
        title: 'Project Components',
        type: 'list',
        content: [
          'User Research and Analysis',
          'Persona Development',
          'User Flow Mapping',
          'Journey Mapping',
          'Wireframe Creation',
          'Interactive Prototyping',
          'Usability Testing and Iteration',
        ],
      },
    ],
    technologies: ['UX Process', 'Personas', 'Prototyping', 'Testing'],
    liveLink:
      'https://www.canva.com/design/DAF1OpYpNDA/ZGZYpTzAKKnQwZ0U27F7dg/view?utm_content=DAF1OpYpNDA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    liveLinkText: 'View Case Studies',
    images: [
      {
        url: '/projects/ux-case-study/personas.jpg',
        caption: 'User personas and journey maps',
      },
      {
        url: '/projects/ux-case-study/discovery.jpg',
        caption: 'User research and discovery findings',
      },
      {
        url: '/projects/ux-case-study/wireframes.jpg',
        caption: 'Low and high-fidelity wireframes',
      },
      {
        url: '/projects/ux-case-study/testing.jpg',
        caption: 'Usability testing and iterations',
      },
    ],
  };

  return <ProjectPage {...projectData} />;
}
