import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white px-4 py-4 border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-poppins font-bold text-navy hover:text-accent transition-colors"
        >
          TJ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? 'text-accent font-semibold'
                  : 'text-navy hover:text-accent'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? 'text-accent font-semibold'
                  : 'text-navy hover:text-accent'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? 'text-accent font-semibold'
                  : 'text-navy hover:text-accent'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="px-4 py-2 bg-accent text-navy rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy hover:text-accent transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 py-6 border-t border-slate-100">
          <div className="flex flex-col space-y-6 text-sm font-medium">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? 'text-accent font-semibold' : 'text-navy'
                } transition-colors`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? 'text-accent font-semibold' : 'text-navy'
                } transition-colors`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? 'text-accent font-semibold' : 'text-navy'
                } transition-colors`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-accent text-navy rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
