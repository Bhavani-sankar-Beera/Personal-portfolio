import React from 'react';
import { Brain, Sparkles, Layers, TrendingUp, Cpu } from 'lucide-react';
import { specializations } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  Layers: Layers,
  TrendingUp: TrendingUp,
};

export default function Specializations() {
  return (
    <section
      id="specialized"
      className="relative bg-black text-white py-20 sm:py-28 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Section Header matching the reference template */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.2em] uppercase text-white">
            I'M SPECIALIZED IN
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base font-light leading-relaxed max-w-2xl mx-auto px-2">
            Committed and energetic AI/ML Engineer with production-grade experience in building intelligent platforms, generative AI workflows, and deep learning architectures.
          </p>
        </div>

        {/* 4 Pillars Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-12 sm:pt-20">
          {specializations.map((spec) => {
            const IconComponent = iconMap[spec.icon] || Cpu;
            return (
              <div
                key={spec.id}
                className="group relative flex flex-col items-center text-center p-3.5 sm:p-6 border border-neutral-900/60 bg-neutral-950/40 hover:border-neutral-700 hover:bg-neutral-900/30 transition-all duration-300"
              >
                {/* Top serial number */}
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors mb-2 sm:mb-4">
                  {spec.num}
                </span>

                {/* Minimalist Line Icon matching reference */}
                <div className="w-10 h-10 sm:w-14 sm:h-14 mb-3 sm:mb-6 rounded-none border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-white transition-all duration-300">
                  <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 stroke-[1.5]" />
                </div>

                {/* Title in bold uppercase */}
                <h3 className="text-[11px] sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-white mb-1.5 sm:mb-3">
                  {spec.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-neutral-400 leading-relaxed font-light line-clamp-4 sm:line-clamp-none">
                  {spec.description}
                </p>

                {/* Hover line micro-interaction */}
                <div className="mt-4 sm:mt-6 w-6 sm:w-8 h-[1px] bg-neutral-800 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-white transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Technical Highlights Bar: 2 cols on mobile, 4 on desktop */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-neutral-900/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase">Core Frameworks</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-200">PyTorch • TensorFlow • FastAPI</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase">Generative AI</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-200">Google Gemini • OpenAI • n8n</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase">Full-Stack Tech</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-200">React.js • Django • Supabase</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase">Languages</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-200">Python • JavaScript • Java • SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
