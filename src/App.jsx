import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specializations from './components/Specializations';
import Works from './components/Works';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-white selection:text-black">
      {/* Top Navbar with clear slide-over right sidebar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section matching reference image with portrait integration */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* I'M SPECIALIZED IN section */}
        <Specializations />

        {/* Our Works section (Personal portfolio removed) */}
        <Works onSelectProject={(project) => setSelectedProject(project)} />

        {/* Trajectory: Experience, Education, Certifications & Skills */}
        <ExperienceEducation />

        {/* Lets Talk / Contact section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Right Indicator Navigation */}
      <FloatingNav />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
