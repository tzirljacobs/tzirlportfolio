import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/tzirljacobs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 underline"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tzirl-jacobs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 underline"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:tjcreativeweb@gmail.com"
              className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 underline"
              aria-label="Email Me"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Copyright and Source */}
          <div className="text-sm text-slate-600 text-center">
            <p className="mb-2">© 2024 Tzirl Jacobs. All rights reserved.</p>
            <p className="text-xs">
              Hand-coded with React & Tailwind CSS —{' '}
              <a
                href="https://github.com/tzirljacobs/dev-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                View Source
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
