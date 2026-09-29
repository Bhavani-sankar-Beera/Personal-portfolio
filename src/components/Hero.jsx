import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background subtle geometric accents & subtle radial illumination */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neutral-900/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 w-full grid grid-cols-12 gap-2 sm:gap-8 items-start pt-2 sm:pt-4">
        {/* Left Column: Typography & Action Links (7 cols on mobile, 6 cols on desktop) */}
        <div className="col-span-7 sm:col-span-6 flex flex-col justify-start space-y-3 sm:space-y-6 z-10 pr-1 sm:pr-0">
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 border border-neutral-800 rounded-full w-fit bg-neutral-950/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[9px] sm:text-[11px] font-mono tracking-widest uppercase text-neutral-300">
              Open to AI/ML & SDE Roles
            </span>
          </div>

          {/* Heading block directly matching the template's typography hierarchy */}
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-lg md:text-xl text-neutral-300 font-light tracking-wide">
              My Name is{' '}
              <span className="text-white font-extrabold uppercase tracking-wider block sm:inline">
                {personalInfo.displayName}
              </span>
            </p>
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              I am an <span className="underline decoration-1 underline-offset-4 sm:underline-offset-8 decoration-neutral-600 hover:decoration-white transition-colors">AI/ML Engineer</span>
            </h1>
            <p className="text-[11px] sm:text-base text-neutral-400 font-normal leading-snug">
              & Full Stack Developer crafting intelligent models and production platforms.
            </p>
          </div>

          {/* Subtitle / Location statement matching template's "I am based in somewhere in the world" */}
          <p className="text-[10px] sm:text-xs md:text-sm text-neutral-400 tracking-wider font-light leading-relaxed">
            I am based in <span className="text-neutral-200 font-medium">Andhra Pradesh, India</span> — specialized in Deep Learning, Generative AI (Google Gemini, n8n), and robust backend architectures.
          </p>

          {/* Action Links Row (Matching the template's minimal underline links) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1 sm:pt-2">
            <a
              href="#specialized"
              className="hero-action-link text-[10px] sm:text-xs"
            >
              ABOUT ME
            </a>
            <a
              href="#works"
              className="hero-action-link text-[10px] sm:text-xs"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="hero-action-link text-[10px] sm:text-xs"
            >
              HIRE ME
            </a>
            <button
              onClick={onOpenResume}
              className="hero-action-link text-[10px] sm:text-xs text-white font-bold"
            >
              VIEW RESUME
            </button>
          </div>

          {/* Social Icons Row (Matching the template's icon layout) */}
          <div className="flex items-center gap-3 sm:gap-5 pt-2 text-neutral-400">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <LeetCodeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Send Email"
              className="hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href={personalInfo.socials.phone}
              aria-label="Phone Contact"
              className="hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Quick Metrics Bar matching user's metrics screenshot */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-neutral-900 max-w-lg">
            <div>
              <p className="text-sm sm:text-2xl font-bold font-mono text-white">8.4<span className="text-[10px] sm:text-xs text-neutral-400 font-normal">/10</span></p>
              <p className="text-[8px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-medium">B.Tech CGPA</p>
            </div>
            <div>
              <p className="text-sm sm:text-2xl font-bold font-mono text-white">93%<span className="text-[10px] sm:text-xs text-neutral-400 font-normal">+</span></p>
              <p className="text-[8px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Model Acc</p>
            </div>
            <div>
              <p className="text-sm sm:text-2xl font-bold font-mono text-white">DQN</p>
              <p className="text-[8px] sm:text-[11px] uppercase tracking-wider text-neutral-500 font-medium">RL Research</p>
            </div>
          </div>
        </div>

        {/* Right Column: Photo on the side, slightly adjusted down for ideal vertical balance */}
        <div className="col-span-5 sm:col-span-6 flex flex-col items-center justify-start relative mt-1 sm:-mt-2 lg:-mt-4">
          <div className="relative w-[112%] sm:w-full max-w-[270px] sm:max-w-md lg:max-w-xl group">
            {/* Portrait Image Container */}
            <div className="relative overflow-hidden flex items-center justify-center bg-black">
              <img
                src="/assets/profile_dark_studio.png"
                alt={personalInfo.name}
                className="w-full h-auto object-cover max-h-[380px] sm:max-h-[580px] lg:max-h-[640px] select-none pointer-events-none transform scale-105 sm:scale-100 origin-top"
              />
              
              {/* Seamless Fade Gradient at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-28 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 z-20 hidden md:flex items-center gap-2 sm:gap-3 bg-black/90 backdrop-blur-md border border-neutral-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping"></div>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase font-mono text-neutral-300">
                Beera Bhavani Sankar • AI/ML & Full Stack
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#specialized"
        aria-label="Scroll down to specialization"
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600 hover:text-white transition-colors duration-300"
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-mono uppercase">Scroll</span>
        <div className="w-[1px] h-4 sm:h-6 bg-gradient-to-b from-neutral-500 to-transparent animate-pulse"></div>
      </a>
    </section>
  );
}
