import { X, ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Project Details"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Header */}
        <div className="space-y-2 border-b border-neutral-800 pb-5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/50 px-2 py-0.5 border border-emerald-800/50 rounded">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.stats}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-neutral-400">
            {project.subtitle}
          </p>
        </div>

        {/* Project Description */}
        <div className="py-6 space-y-5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
          <p>{project.description}</p>

          <div className="p-4 bg-neutral-900/60 border border-neutral-800 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-white" />
              Key Innovations & Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 bg-black border border-neutral-700 text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-800">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 font-mono text-xs uppercase tracking-wider font-bold transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-300 uppercase tracking-widest"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
