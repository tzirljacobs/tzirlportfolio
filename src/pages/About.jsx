import React from 'react';
import {
  Code2,
  Lightbulb,
  GraduationCap,
  Palette,
  BookOpen,
  Rocket,
} from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Profile Section */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start mb-16">
        <div>
          <h1 className="text-4xl font-bold text-navy mb-6">About Me</h1>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              My unique journey to web development started in education, where I
              spent years developing curricula and heading the Art Department at
              a UK secondary school. This experience honed my eye for design and
              ability to break down complex concepts into manageable parts.
            </p>
            <p>
              As Head of Department, I developed strong project management
              skills and a deep understanding of user needs - skills that
              translate perfectly into my current role as a Full Stack Developer
              with UX expertise.
            </p>
            <p>
              Today, I combine my educational background with technical skills
              to create intuitive, user-centered web applications. My approach
              merges analytical thinking with creative problem-solving, enhanced
              by modern development tools and AI technologies.
            </p>
          </div>
        </div>

        <div className="md:sticky md:top-8">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <img
              src="/Tzirl Jacobs.jpg"
              alt="Tzirl Jacobs"
              className="w-full object-cover rounded-lg mb-6"
            />
            <div className="space-y-3">
              <h3 className="font-semibold text-navy">Quick Facts</h3>
              <ul className="text-sm space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-accent" />
                  Former Head of Art Department
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen size={16} className="text-accent" />
                  Curriculum Development Expert
                </li>
                <li className="flex items-center gap-2">
                  <Code2 size={16} className="text-accent" />
                  Full Stack Developer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-navy mb-8">My Journey</h2>
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Rocket size={24} className="text-accent" />
              </div>
              <div className="w-0.5 h-full bg-accent/20 mt-4"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Full Stack Development
              </h3>
              <p className="text-slate-600 mb-4">
                Advanced to full stack development, focusing on React, Node.js,
                and modern databases. Building user-centered applications that
                combine technical excellence with intuitive design. Recently
                completed the UX Career Accelerator at King's College London to
                deepen my understanding of user experience design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  UX Design
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Code2 size={24} className="text-accent" />
              </div>
              <div className="w-0.5 h-full bg-accent/20 mt-4"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Web Design & WordPress Development
              </h3>
              <p className="text-slate-600 mb-4">
                First step into tech through web design and WordPress
                development, creating custom websites and digital solutions.
                This experience provided a strong foundation in web technologies
                and client communication, while honing my eye for design and
                user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  WordPress
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Web Design
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Client Relations
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Palette size={24} className="text-accent" />
              </div>
              <div className="w-0.5 h-full bg-accent/20 mt-4"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Head of Art Department
              </h3>
              <p className="text-slate-600 mb-4">
                Led the Art Department at a UK secondary school, where I managed
                curriculum development and conducted detailed exam analytics.
                This experience with data analysis and pattern recognition
                became invaluable in my transition to tech. Developed innovative
                teaching methods and managed creative projects while maintaining
                high academic standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Data Analysis
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Leadership
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Curriculum Design
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap size={24} className="text-accent" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Education & Early Career
              </h3>
              <p className="text-slate-600 mb-4">
                Started in education, specializing in curriculum development and
                creative education. Built foundational skills in project
                planning, user understanding, and creative problem-solving that
                would later prove essential in tech.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Education
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Project Planning
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Creative Direction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div>
        <h2 className="text-2xl font-bold text-navy mb-8">My Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <Code2 size={24} className="text-accent mb-4" />
            <h3 className="font-semibold mb-2">Technical Excellence</h3>
            <p className="text-slate-600 text-sm">
              Combining modern development practices with educational expertise
              to create clear, maintainable solutions that solve real problems.
            </p>
          </div>

          <div className="p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <Lightbulb size={24} className="text-accent mb-4" />
            <h3 className="font-semibold mb-2">Creative Problem-Solving</h3>
            <p className="text-slate-600 text-sm">
              Applying artistic background and teaching experience to approach
              technical challenges with creativity and user empathy.
            </p>
          </div>

          <div className="p-6 bg-softwhite rounded-lg hover:shadow-md transition-shadow">
            <BookOpen size={24} className="text-accent mb-4" />
            <h3 className="font-semibold mb-2">User-Focused</h3>
            <p className="text-slate-600 text-sm">
              Drawing on years of educational experience to create intuitive,
              accessible digital solutions that truly serve user needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
