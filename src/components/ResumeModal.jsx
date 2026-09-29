import React from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-neutral-800 p-4 sm:p-8 max-h-[94vh] flex flex-col justify-between overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 text-neutral-400 hover:text-white transition-colors z-10 p-1.5 border border-neutral-800 hover:border-white bg-black/50"
          aria-label="Close Resume"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-800 pb-4 sm:pb-5 pr-8 sm:pr-0">
          <div>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-neutral-400">
              Curriculum Vitae • Verified Profile
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-[11px] sm:text-xs font-mono text-neutral-400">
              {personalInfo.title} • CGPA 8.4/10 • GMRIT
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/assets/resume.pdf"
              download="Beera_Bhavani_Sankar_Resume.pdf"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black hover:bg-neutral-200 font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white font-mono text-[11px] sm:text-xs transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="my-3 sm:my-5 flex-1 min-h-[380px] sm:min-h-[520px] border border-neutral-800 bg-neutral-900 rounded overflow-hidden relative">
          <iframe
            src="/assets/resume.pdf?v=latest#toolbar=0"
            title="Beera Bhavani Sankar Resume"
            className="w-full h-full min-h-[380px] sm:min-h-[520px] border-0"
          />
        </div>

        {/* Footer info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-3 sm:pt-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white flex items-center gap-1.5">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a href={`tel:${personalInfo.phone}`} className="hover:text-white flex items-center gap-1.5">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              github.com/Bhavani-sankar-Beera
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-300 uppercase tracking-widest text-[10px] sm:text-[11px]"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
