import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'specialized', label: 'Specialized' },
  { id: 'works', label: 'Projects' },
  { id: 'experience', label: 'Academics' },
  { id: 'contact', label: 'Contact' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center gap-3 sm:gap-4 pointer-events-auto">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={`Jump to ${section.label}`}
            className="group relative flex items-center justify-end p-1"
          >
            {/* Tooltip on hover (desktop only) */}
            <span className="hidden sm:block absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-mono tracking-widest uppercase text-white bg-neutral-900 border border-neutral-800 px-2 py-0.5 pointer-events-none whitespace-nowrap">
              {section.label}
            </span>

            {/* Dot matching reference image */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white ring-2 sm:ring-4 ring-white/20'
                  : 'w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neutral-600 hover:bg-neutral-400 group-hover:scale-125'
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
