import React, { useState } from 'react';
import { educationAndExperience, technicalSkills } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, BookOpen, Layers } from 'lucide-react';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section
      id="experience"
      className="relative bg-black text-white py-28 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header: Academics & Experience */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Academics & <span className="font-light italic text-neutral-400">Experience</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 tracking-wider font-light">
            Educational foundation (8.4 CGPA), software engineering internship, peer-reviewed research, certifications, and technical skills.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 flex-wrap">
          {[
            { id: 'experience', label: 'EXPERIENCE & RESEARCH' },
            { id: 'academics', label: 'EDUCATION' },
            { id: 'certifications', label: 'CERTIFICATIONS' },
            { id: 'skills', label: 'SKILLS MATRIX' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-mono tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-white text-white bg-white/10 font-bold'
                  : 'border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Experience & Research */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-10">
            {educationAndExperience.experience.map((exp, idx) => (
              <div key={exp.role} className="p-8 border border-neutral-800 bg-neutral-950/60 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-4 mb-6">
                  <div>
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border rounded ${
                      idx === 0
                        ? 'text-emerald-400 bg-emerald-950/50 border-emerald-800/50'
                        : 'text-purple-400 bg-purple-950/50 border-purple-800/50'
                    }`}>
                      {idx === 0 ? 'Industry Internship' : 'Research Publication'}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-neutral-400 font-mono">{exp.company} ({exp.location})</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'academics' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {educationAndExperience.education.map((edu, idx) => (
              <div
                key={edu.degree}
                className="p-8 border border-neutral-800 bg-neutral-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-sm text-neutral-400">{edu.institution} — {edu.location}</p>
                  <p className="text-xs text-neutral-500">{edu.notes}</p>
                </div>
                <div className="text-left sm:text-right min-w-[140px]">
                  <span className="text-sm font-mono font-bold text-white bg-neutral-900 px-3 py-1 border border-neutral-700 rounded block sm:inline-block">
                    {edu.score}
                  </span>
                  <p className="text-[11px] font-mono text-neutral-500 mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {educationAndExperience.certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 border border-neutral-800 bg-neutral-950/60 flex flex-col justify-between space-y-4 hover:border-neutral-600 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded">
                    {cert.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-3 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{cert.issuer}</p>
                </div>
                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Issued: {cert.date}</span>
                  <Award className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Skills Matrix based on previous resume */}
        {activeTab === 'skills' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-neutral-800 bg-neutral-950/60 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-800 pb-2">
                Languages & Core CS
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {technicalSkills.languages.map((item) => (
                  <span key={item} className="text-xs font-mono px-3 py-1 bg-white/5 border border-neutral-700 text-white">
                    {item}
                  </span>
                ))}
                {technicalSkills.coreCs.map((item) => (
                  <span key={item} className="text-xs font-mono px-3 py-1 bg-white/5 border border-neutral-700 text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-neutral-800 bg-neutral-950/60 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-800 pb-2">
                AI / ML & Deep Learning
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {technicalSkills.aiMlDeepLearning.map((item) => (
                  <span key={item} className="text-xs font-mono px-3 py-1 bg-white/5 border border-neutral-700 text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-neutral-800 bg-neutral-950/60 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-800 pb-2">
                Web & Backend APIs
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {technicalSkills.webApis.map((item) => (
                  <span key={item} className="text-xs font-mono px-3 py-1 bg-white/5 border border-neutral-700 text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-neutral-800 bg-neutral-950/60 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-800 pb-2">
                GenAI, Automation & Tools
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {technicalSkills.genAiAutomation.concat(technicalSkills.databasesTools).map((item) => (
                  <span key={item} className="text-xs font-mono px-3 py-1 bg-white/5 border border-neutral-700 text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
