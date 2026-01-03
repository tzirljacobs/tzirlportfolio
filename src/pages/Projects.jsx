import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: 'AI UX/UI Tool Comparator',
      description:
        'A comprehensive comparison platform for AI-powered UX/UI tools, helping designers choose the right solutions for their workflow.',
      technologies: 'React · Modern JS · Tailwind CSS',
      link: '/projects/ai-comparator',
    },
    {
      title: 'CycleAway Rental App',
      description:
        'A full-stack React app for managing cycle rentals with real-time dashboards, payment processing, and asset tracking.',
      technologies: 'React · Supabase · PostgreSQL',
      link: '/projects/cycleaway',
    },
    {
      title: 'MatrixEH Business Website',
      description:
        'A responsive WordPress site with complete branding and design system, from requirements gathering to client handoff.',
      technologies: 'WordPress · Figma · UX',
      link: '/projects/matrixeh',
    },
    {
      title: 'Creative Navy UX Team Project',
      description:
        'A collaborative UX design sprint with Creative Navy, focusing on research synthesis and user flow validation.',
      technologies: 'UX Research · Wireframes · Usability Testing',
      link: '/projects/kings-ux',
    },
    {
      title: 'UX Case Study Series',
      description:
        'A comprehensive portfolio showcasing the complete UX design process across three key phases.',
      technologies: 'UX Process · Personas · Prototyping · Testing',
      link: '/projects/ux-case-study',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-navy mb-10 text-center">
        Projects
      </h1>

      <div className="space-y-6">
        {/* Add this card at the start of your projects grid */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-2">Developer Portfolio</h3>
          <p className="mb-4 flex-grow">
            Built this portfolio website from scratch using React and Tailwind
            CSS. Features responsive design, reusable components, and modern
            development practices. The site itself demonstrates my approach to
            clean code and intuitive user experience.
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-accent font-medium text-sm">
              React · Tailwind CSS · React Router
            </span>
            <div className="flex gap-4 text-sm">
              <Link
                to="/projects/portfolio"
                className="text-navy hover:text-accent underline"
              >
                Read More
              </Link>
              <a
                href="https://github.com/tzirljacobs/dev-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-accent underline"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-navy mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-accent font-medium text-sm">
                {project.technologies}
              </span>
              <Link
                to={project.link}
                className="bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
