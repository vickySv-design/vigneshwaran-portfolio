import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Achievements } from './components/Achievements';
import { Hackathons } from './components/Hackathons';
import { Certifications } from './components/Certifications';
import { CertificateModal } from './components/CertificateModal';
import { Education } from './components/Education';
import { Timeline } from './components/Timeline';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  // Theme state: default dark mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Modal states
  const [selectedCertificateId, setSelectedCertificateId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'light bg-slate-50 text-slate-900'}`}>
      
      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Main Sticky Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <WhatIDo />
        <Experience onOpenCertificateModal={(id) => setSelectedCertificateId(id)} />
        <Skills />
        <Projects />
        <Research onOpenCertificateModal={(id) => setSelectedCertificateId(id)} />
        <Achievements onOpenCertificateModal={(id) => setSelectedCertificateId(id)} />
        <Hackathons onOpenCertificateModal={(id) => setSelectedCertificateId(id)} />
        <Certifications onOpenModal={(id) => setSelectedCertificateId(id)} />
        <Education />
        <Timeline />
        <CurrentlyExploring />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Certificate Lightbox Modal */}
      <CertificateModal
        certificateId={selectedCertificateId}
        onClose={() => setSelectedCertificateId(null)}
      />

      {/* Resume Overview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
};

export default App;
