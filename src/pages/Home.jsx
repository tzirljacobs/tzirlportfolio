import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import SkillsSnapshot from '../components/SkillsSnapshot';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-softwhite py-16 px-6 text-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Featured Projects
          </h2>

          <p className="text-center text-slate-600 mb-10">
            A curated selection of my work.{' '}
            <Link
              to="/projects"
              className="text-accent underline hover:text-navy"
            >
              View all projects →
            </Link>
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* CycleAway */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">
                CycleAway Rental App
              </h3>
              <p className="mb-4 flex-grow">
                A full-stack React app built from scratch for managing a cycle
                rental service with real-time customer and employee dashboards.
                Features address autocomplete, live map display, role-based
                auth, Stripe payments, print functionality and asset tracking.
                Designed the full PostgreSQL schema and used AI tools to support
                development.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-accent font-medium text-sm">
                  React · Supabase · PostgreSQL
                </span>
                <div className="flex gap-4 text-sm">
                  <a
                    href="https://cycleaway.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-accent underline"
                  >
                    View Project
                  </a>
                  <Link
                    to="/projects/cycleaway"
                    className="text-navy underline hover:text-accent"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* MatrixEH */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">
                MatrixEH Business Website
              </h3>
              <p className="mb-4 flex-grow">
                A fully responsive WordPress site designed and developed for a
                small business. Responsible for gathering client requirements,
                designing the site layout, and creating a complete design system
                including moodboards, branding, and UI elements. Prototyped user
                flows in Figma, devleoped the site, configured site security,
                and completed client handoff.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-accent font-medium text-sm">
                  WordPress · Figma · UX
                </span>
                <div className="flex gap-4 text-sm">
                  <a
                    href="https://matrixeh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-accent underline"
                  >
                    View Project
                  </a>
                  <Link
                    to="/projects/matrixeh"
                    className="text-navy underline hover:text-accent"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Creative Navy UX Project */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">
                Creative Navy UX Team Project
              </h3>
              <p className="mb-4 flex-grow">
                A 6-person UX sprint completed through King's College London's
                UX Career Accelerator, in partnership with Creative Navy
                (realistic client simulation under NDA). Contributed research
                synthesis, information architecture, and Figma wireflows. Also
                supported prototyping and user flow validation through usability
                testing.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-accent font-medium text-sm">
                    UX Research · Wireframes · Usability Testing
                  </span>
                  <span className="italic text-slate-500 text-sm">
                    Training Project
                  </span>
                </div>
                <div className="flex gap-4 text-sm">
                  <a
                    href="https://www.figma.com/proto/8gaQqzZDCV7Aa8fdIYXUOe/Design03_Team1_KCL_EP_FinalSubmission?node-id=954-10347&starting-point-node-id=954%3A10347&t=lVZXuL2FFZ0hzkCl-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-accent underline"
                  >
                    View Project
                  </a>
                  <Link
                    to="/projects/kings-ux"
                    className="text-navy underline hover:text-accent"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* UX Case Study Series */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2">
                UX Case Study Series
              </h3>
              <p className="mb-4 flex-grow">
                A UX project portfolio developed during the Kings College UX
                Accelerator. It showcases the full UX design process across
                three phases — Discover, Define, and Develop —from initial user
                discovery to design iteration. It includes user research,
                personas, user flows, journey mapping, wireframes, prototypes,
                and usability testing- all presented in a clear storytelling
                format.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-accent font-medium text-sm">
                  UX Process · Personas · Prototyping · Testing
                </span>
                <div className="flex gap-4 text-sm">
                  <a
                    href="https://www.canva.com/design/DAF1OpYpNDA/ZGZYpTzAKKnQwZ0U27F7dg/view?utm_content=DAF1OpYpNDA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-accent underline"
                  >
                    View Project
                  </a>
                  <Link
                    to="/projects/ux-case-study"
                    className="text-navy underline hover:text-accent"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SkillsSnapshot />
    </>
  );
}
