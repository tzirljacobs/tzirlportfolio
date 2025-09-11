import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function KingsUX() {
  const projectData = {
    title: 'Creative Navy UX Team Project',
    type: 'ux',
    overview:
      "A collaborative UX design sprint completed through King's College London's UX Career Accelerator program, partnering with Creative Navy.",
    sections: [
      {
        title: 'Key Contributions',
        type: 'list',
        content: [
          'Research synthesis and analysis',
          'Information architecture development',
          'Figma wireflow creation',
          'Prototype development',
          'User flow validation through usability testing',
          'Team collaboration and project management',
        ],
      },
    ],
    technologies: ['UX Research', 'Wireframes', 'Usability Testing'],
    liveLink:
      'https://www.figma.com/proto/8gaQqzZDCV7Aa8fdIYXUOe/Design03_Team1_KCL_EP_FinalSubmission?node-id=954-10347&starting-point-node-id=954%3A10347&t=lVZXuL2FFZ0hzkCl-1',
    liveLinkText: 'View Prototype',
    images: [
      {
        url: '/projects/kings-ux/wireflows.jpg',
        caption: 'User flow diagrams and wireflows',
      },
      {
        url: '/projects/kings-ux/research.jpg',
        caption: 'Research synthesis and findings',
      },
      {
        url: '/projects/kings-ux/prototype.jpg',
        caption: 'Interactive prototype screens',
      },
      {
        url: '/projects/kings-ux/testing.jpg',
        caption: 'Usability testing results and iterations',
      },
    ],
  };

  return <ProjectPage {...projectData} />;
}
