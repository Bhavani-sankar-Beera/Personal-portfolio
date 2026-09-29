import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-12 border-t border-neutral-900 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and copyright */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-white flex items-center justify-center font-bold text-white font-mono text-sm">
            B
          </div>
          <div>
            <p className="font-mono uppercase tracking-widest text-neutral-300 text-[11px]">
              BEERA BHAVANI SANKAR
            </p>
            <p className="text-[10px] text-neutral-600 font-mono">
              AI/ML Engineer • Full Stack Developer • Andhra Pradesh, India
            </p>
          </div>
        </div>

        {/* Center: Socials */}
        <div className="flex items-center gap-5 text-neutral-400">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-white transition-colors"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
