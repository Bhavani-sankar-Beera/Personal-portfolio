import React, { useState, useEffect } from 'react';
import { X, FileText, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  const navLinks = [
    { num: '01', label: 'ABOUT ME', href: '#specialized' },
    { num: '02', label: 'PROJECTS', href: '#works' },
    { num: '03', label: 'ACADEMICS & EXPERIENCE', href: '#experience' },
    { num: '04', label: 'LETS TALK', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md py-4 border-b border-neutral-900 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Stylized Monogram Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-85"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border-2 border-white font-black text-2xl tracking-tighter uppercase select-none transition-transform group-hover:scale-105 bg-black">
              <span>B</span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold tracking-[0.25em] text-white">BHAVANI SANKAR</span>
              <span className="text-[10px] tracking-[0.2em] text-neutral-400">AI/ML ENGINEER</span>
            </div>
          </a>

          {/* Desktop Navigation Links (CV button removed per user request) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="minimal-nav-link text-xs tracking-[0.2em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Clear Hamburger Toggle Button with label */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="group flex items-center gap-2.5 px-3 py-2 border border-neutral-800 hover:border-white bg-neutral-950/80 transition-all duration-200 focus:outline-none"
            aria-label="Open Navigation Sidebar"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-white hidden sm:inline">
              MENU
            </span>
            <div className="flex flex-col justify-center items-end gap-1 w-5">
              <span className="w-5 h-[2px] bg-white transition-all"></span>
              <span className="w-3.5 h-[2px] bg-white transition-all group-hover:w-5"></span>
              <span className="w-4 h-[2px] bg-white transition-all"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Dimmed Backdrop Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Crystal Clear Slide-Over Right Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#0a0a0a] border-l border-neutral-800 shadow-2xl flex flex-col justify-between p-8 sm:p-10 transition-transform duration-300 ease-out transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Sidebar Navigation"
      >
        {/* Top Header of Sidebar */}
        <div>
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white flex items-center justify-center font-bold text-white font-mono text-sm">
                B
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-white uppercase">
                  BHAVANI SANKAR
                </p>
                <p className="text-[10px] font-mono text-neutral-400">
                  AI/ML & Full Stack
                </p>
              </div>
            </div>

            {/* Clear Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-800 hover:border-white text-xs font-mono tracking-wider text-neutral-300 hover:text-white bg-neutral-900/60 transition-colors"
              aria-label="Close Sidebar"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links with numbers and smooth hover */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="group flex items-center justify-between p-3.5 border border-transparent hover:border-neutral-800 hover:bg-neutral-900/50 transition-all rounded"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                    {item.num}
                  </span>
                  <span className="text-base font-bold tracking-wider text-neutral-200 group-hover:text-white uppercase transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>

          {/* Resume Download Action Button inside Sidebar */}
          <div className="mt-8 pt-6 border-t border-neutral-800">
            <button
              onClick={() => {
                setSidebarOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>PREVIEW & DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>

        {/* Bottom Quick Contact & Socials in Sidebar */}
        <div className="border-t border-neutral-800 pt-6 space-y-4">
          <div className="space-y-1.5 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2 text-neutral-400">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 border border-neutral-800 hover:border-white hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 border border-neutral-800 hover:border-white hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2 border border-neutral-800 hover:border-white hover:text-white transition-colors"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
