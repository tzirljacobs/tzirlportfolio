import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, LayoutDashboard, Users2, Lightbulb } from 'lucide-react';

const getProjectIcon = (type) => {
  const icons = {
    fullstack: <Globe size={24} className="text-accent" />,
    website: <LayoutDashboard size={24} className="text-accent" />,
    ux: <Users2 size={24} className="text-accent" />,
    research: <Lightbulb size={24} className="text-accent" />,
  };
  return icons[type] || null;
};

export default function ProjectPage({
  title,
  overview,
  type,
  sections = [],
  technologies = [],
  liveLink,
  liveLinkText = 'Visit Live Site',
  images = [],
}) {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <Link
        to="/projects"
        className="text-accent hover:text-navy mb-8 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="flex items-center gap-3 mb-6">
        {getProjectIcon(type)}
        <h1 className="text-4xl font-bold text-navy">{title}</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        {/* Overview Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-lg mb-4">{overview}</p>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            {section.type === 'list' ? (
              <ul className="list-disc list-inside space-y-2">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg">{section.content}</p>
            )}
          </div>
        ))}

        {/* Image Gallery */}
        {images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={image.url}
                    alt={image.caption || `Project image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  {image.caption && (
                    <div className="p-2 bg-softwhite text-sm text-center">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-accent/10 text-accent px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Live Link */}
        {liveLink && (
          <div className="flex justify-center">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              {liveLinkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
