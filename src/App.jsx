import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import CycleAway from './pages/projects/CycleAway.jsx';
import MatrixEH from './pages/projects/MatrixEH.jsx';
import KingsUX from './pages/projects/KingsUX.jsx';
import UXCaseStudy from './pages/projects/UXCaseStudy.jsx';
import Portfolio from './pages/projects/Portfolio.jsx'; // Import the new Portfolio component
import AIComparator from './pages/projects/AIComparator'; // Import AIComparator component
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/cycleaway" element={<CycleAway />} />
        <Route path="/projects/matrixeh" element={<MatrixEH />} />
        <Route path="/projects/kings-ux" element={<KingsUX />} />
        <Route path="/projects/ux-case-study" element={<UXCaseStudy />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />{' '}
        {/* Add this line with your other project routes */}
        <Route path="/projects/ai-comparator" element={<AIComparator />} /> {/* New route for AI Comparator */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* ✅ Shows on every page */}
    </>
  );
}

export default App;
