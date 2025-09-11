import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function Portfolio() {
  const projectData = {
    title: 'Developer Portfolio',
    type: 'fullstack',
    overview:
      'A modern, responsive portfolio website built from scratch using React and Tailwind CSS. This site itself serves as a demonstration of my development approach, combining clean code, intuitive design, and modern web practices.',
    sections: [
      {
        title: 'Key Features',
        type: 'list',
        content: [
          'Custom-built responsive design using Tailwind CSS',
          'Modern React architecture with reusable components',
          'Dynamic routing with React Router',
          'Interactive UI elements with smooth transitions',
          'Optimized performance and accessibility',
          'Clean, maintainable code structure',
        ],
      },
      {
        title: 'Development Process',
        type: 'paragraph',
        content: `Built this portfolio from scratch as both a showcase and a practical demonstration of my development skills. Implemented modern React practices including hooks and functional components, while using Tailwind CSS for a consistent and responsive design system. Created reusable components to maintain DRY principles and ensure long-term maintainability.`,
      },
      {
        title: 'Technical Details',
        type: 'paragraph',
        content: `The site features a component-based architecture for maximum reusability and maintainability. Used Lucide icons for consistent visual elements, implemented responsive design patterns, and optimized for both performance and accessibility. The project demonstrates my ability to create clean, efficient code while delivering an engaging user experience.`,
      },
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'React Router',
      'Lucide Icons',
      'Responsive Design',
    ],
    githubLink: 'https://github.com/tzirljacobs/dev-portfolio',
    images: [
      {
        url: '/projects/portfolio/home.jpg',
        caption: 'Responsive homepage design',
      },
      {
        url: '/projects/portfolio/projects.jpg',
        caption: 'Projects showcase page',
      },
    ],
  };

  return <ProjectPage {...projectData} />;
}
