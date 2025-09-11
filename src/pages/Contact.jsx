import React from 'react';
import { Mail, Github, Linkedin, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-navy mb-6 text-center">
        Get in Touch
      </h1>

      <p className="text-xl text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Currently working as a UX/Web Developer at a tech startup. Always happy
        to connect and discuss technology, UX, or potential collaborations.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Cards */}
        <div className="bg-softwhite p-8 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Mail size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-2">Email</h2>
              <a
                href="mailto:tjcreativeweb@gmail.com"
                className="text-slate-600 hover:text-accent transition-colors inline-flex items-center gap-2 group"
              >
                tjcreativeweb@gmail.com
                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-softwhite p-8 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Linkedin size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-2">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/tzirl-jacobs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent transition-colors inline-flex items-center gap-2 group"
              >
                Connect on LinkedIn
                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-softwhite p-8 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Github size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-2">GitHub</h2>
              <a
                href="https://github.com/tzirljacobs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-accent transition-colors inline-flex items-center gap-2 group"
              >
                View My Projects
                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-softwhite p-8 rounded-lg hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Clock size={24} className="text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-2">
                Current Status
              </h2>
              <p className="text-slate-600">
                Currently working as a UX/Web Developer at a transport tech
                startup. Open to connecting about technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-softwhite rounded-lg p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <MapPin size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy mb-2">Location</h2>
            <p className="text-slate-600">Based in UK</p>
            <p className="text-slate-600 mt-1">
              Available for Remote/Hybrid roles
            </p>
            <p className="text-slate-600 mt-1">
              US Citizen - Eligible for US positions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
