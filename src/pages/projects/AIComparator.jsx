import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function AIComparator() {
  const projectData = {
    title: 'AI UX/UI Tool Comparator',
    type: 'fullstack',
    overview:
      'A comprehensive comparison platform for AI-powered UX/UI tools, helping designers and developers choose the right solutions for their workflow. Features interactive comparison matrices and detailed tool analysis.',
    sections: [
      {
        title: 'Key Features',
        type: 'list',
        content: [
          'Interactive comparison matrix for UX/UI focused AI tools',
          'Detailed feature analysis and compatibility checking',
          'User-friendly filtering and search functionality',
          'Responsive design optimized for all devices',
          'Modern, clean interface for easy tool comparison',
        ],
      },
      {
        title: 'Development Process',
        type: 'paragraph',
        content:
          'Built with React and modern web technologies, this tool helps UX/UI professionals navigate the rapidly evolving landscape of AI-powered design tools. Implemented dynamic filtering and sorting to help users quickly find the right tools for their specific needs.',
      },
      {
        title: 'Technical Details',
        type: 'paragraph',
        content:
          'Developed using React and Tailwind CSS for a responsive, modern interface. Implemented dynamic data handling for tool comparisons and user interactions. Created an intuitive filtering system to help users quickly find relevant tools based on their specific requirements.',
      },
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'Modern JavaScript',
      'Interactive UI',
    ],
    status: 'Coming Soon',
    images: [
      {
        url: '/projects/ai-comparator/main.jpg',
        caption: 'Main comparison dashboard',
      },
      {
        url: '/projects/ai-comparator/details.jpg',
        caption: 'Detailed tool analysis view',
      },
    ],
  };

  return <ProjectPage {...projectData} />;
}
