import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 md:py-32"
      style={{ backgroundImage: "url('/bg-tech.jpg')" }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-medium text-softwhite mb-6">
          Tzirl Jacobs
        </h1>

        <p className="text-xl md:text-2xl text-softwhite mb-8 max-w-2xl mx-auto">
          UX/Web Developer at a tech startup, bridging UX, design, and
          full-stack development — powered by Python, React, SQL and AI tools
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="bg-accent text-navy font-medium px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent font-medium px-8 py-3 rounded-lg hover:bg-accent hover:text-navy transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
