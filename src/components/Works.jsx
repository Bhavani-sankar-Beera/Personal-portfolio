import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight, Activity, Eye, Database, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Works({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'AI / ML', 'FULL STACK', 'RESEARCH'];

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === filter || (filter === 'AI / ML' && p.category.includes('AI')));

  return (
    <section
      id="works"
      className="relative bg-black text-white py-20 sm:py-28 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Section Header: PROJECTS */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            PROJECTS
          </h2>
          <p className="text-[11px] sm:text-sm text-neutral-400 tracking-wider font-light px-2">
            Production AI platforms, deep neural architectures, and full-stack enterprise systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-6 mb-12 sm:mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 transition-all duration-200 ${
                filter === cat
                  ? 'border border-white text-white bg-white/10 font-bold'
                  : 'border border-transparent text-neutral-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2 columns on tablet and desktop, clean stacked/compact cards on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Visual / Mockup Container */}
              <div className="relative h-48 sm:h-64 bg-neutral-900/60 overflow-hidden flex items-center justify-center p-4 sm:p-6 border-b border-neutral-900">
                {/* Visual Representation based on project type */}
                {project.visualType === 'dashboard' && (
                  <div className="w-full h-full bg-white text-black p-4 sm:p-5 rounded shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5 sm:pb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-black"></div>
                        <span className="text-[10px] sm:text-xs font-bold tracking-tight font-mono">JobFlow AI Platform</span>
                      </div>
                      <span className="text-[8px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 bg-neutral-200 rounded font-semibold">ATS 95%+ Fit</span>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2 py-1 sm:py-2">
                      <div className="flex justify-between text-[9px] sm:text-[11px] text-neutral-600 font-mono">
                        <span>Gemini Semantic Match</span>
                        <span className="font-bold text-black">Autonomous Pipeline</span>
                      </div>
                      <div className="w-full bg-neutral-200 h-2 sm:h-2.5 rounded-full overflow-hidden">
                        <div className="bg-black h-full w-[95%]"></div>
                      </div>
                      <div className="flex gap-1 sm:gap-1.5 pt-1 flex-wrap">
                        <span className="text-[8px] sm:text-[9px] bg-neutral-100 px-1.5 py-0.5 border border-neutral-300 font-mono">Google Gemini</span>
                        <span className="text-[8px] sm:text-[9px] bg-neutral-100 px-1.5 py-0.5 border border-neutral-300 font-mono">n8n</span>
                        <span className="text-[8px] sm:text-[9px] bg-neutral-100 px-1.5 py-0.5 border border-neutral-300 font-mono">Supabase</span>
                      </div>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-500 font-mono flex items-center justify-between pt-1.5 sm:pt-2 border-t border-neutral-200">
                      <span>Live Career Intelligence Engine</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                    </div>
                  </div>
                )}

                {project.visualType === 'vision' && (
                  <div className="w-full h-full bg-white text-black p-4 sm:p-5 rounded shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5 sm:pb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-tight font-mono">DermaVision Deep Learning</span>
                      </div>
                      <span className="text-[8px] sm:text-[10px] font-mono bg-black text-white px-1.5 sm:px-2 py-0.5 rounded">93%+ Val Acc</span>
                    </div>
                    <div className="my-auto py-2 sm:py-3 text-center border border-dashed border-neutral-300 rounded bg-neutral-50">
                      <p className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-800">EfficientNet Neural Classifier</p>
                      <p className="text-[9px] sm:text-[10px] text-neutral-500">FastAPI Real-Time Web Inference</p>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-500 font-mono flex items-center justify-between pt-1.5 sm:pt-2 border-t border-neutral-200">
                      <span>Clinical Dermatology Classification</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                    </div>
                  </div>
                )}

                {project.visualType === 'quant' && (
                  <div className="w-full h-full bg-white text-black p-4 sm:p-5 rounded shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5 sm:pb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-tight font-mono">Bitcoin DQN Model</span>
                      </div>
                      <span className="text-[8px] sm:text-[10px] font-mono border border-neutral-800 px-1.5 sm:px-2 py-0.5 font-bold">Research</span>
                    </div>
                    <div className="space-y-1 sm:space-y-1.5 py-1 sm:py-2">
                      <div className="flex items-end justify-between h-10 sm:h-14 gap-1 sm:gap-1.5 px-2 sm:px-3 border-b border-neutral-200 pb-1">
                        <div className="w-2 sm:w-2.5 bg-neutral-300 h-5 sm:h-6"></div>
                        <div className="w-2 sm:w-2.5 bg-neutral-400 h-7 sm:h-10"></div>
                        <div className="w-2 sm:w-2.5 bg-black h-9 sm:h-12"></div>
                        <div className="w-2 sm:w-2.5 bg-neutral-400 h-6 sm:h-8"></div>
                        <div className="w-2 sm:w-2.5 bg-black h-10 sm:h-14"></div>
                        <div className="w-2 sm:w-2.5 bg-neutral-800 h-8 sm:h-11"></div>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-neutral-600 font-mono text-center">OHLCV Q-Learning Policy</p>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-500 font-mono flex items-center justify-between pt-1.5 sm:pt-2 border-t border-neutral-200">
                      <span>Peer-Reviewed RL Quantitative Finance</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                    </div>
                  </div>
                )}

                {project.visualType === 'database' && (
                  <div className="w-full h-full bg-white text-black p-4 sm:p-5 rounded shadow-2xl flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5 sm:pb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-tight font-mono">Django Library RBAC</span>
                      </div>
                      <span className="text-[8px] sm:text-[10px] font-mono bg-neutral-200 px-1.5 sm:px-2 py-0.5 font-bold">Topnotch</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2 py-1 sm:py-2 text-center my-auto">
                      <p className="text-[10px] sm:text-xs font-mono font-bold">Book Management & Inventory</p>
                      <p className="text-[9px] sm:text-[10px] text-neutral-500 font-mono">JWT Auth • Role-Based Access</p>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-500 font-mono flex items-center justify-between pt-1.5 sm:pt-2 border-t border-neutral-200">
                      <span>Enterprise Django Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500 mb-1.5 sm:mb-2">
                    <span className="uppercase tracking-widest text-neutral-400">{project.category}</span>
                    <span className="text-neutral-400 text-[10px] sm:text-[11px]">{project.stats}</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-400 font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="pt-1 sm:pt-2 flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 border border-neutral-800 text-neutral-400 bg-neutral-900/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-3 sm:pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase group-hover:text-white transition-colors flex items-center gap-1">
                    Details & Architecture <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  {project.liveUrl && (
                    <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 border border-emerald-900/60 rounded">
                      Live App
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
