'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { FolderGit2, Calendar, Github, Linkedin } from 'lucide-react';

interface PortfolioProps {
  lang: Language;
}

export const PortfolioGrid: React.FC<PortfolioProps> = ({ lang }) => {
  const t = translations[lang].portfolio;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? t.items
    : t.items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-brand-600 to-ai-600 text-white shadow-lg shadow-brand-600/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Date & Links */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-brand-400" />
                    <span>{item.date}</span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex items-center gap-2">
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-[11px] font-medium"
                        title="Ver Repositório no GitHub"
                      >
                        <Github className="w-3 h-3 text-white" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {item.linkedinUrl && (
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-brand-500 hover:bg-slate-800 text-brand-400 hover:text-brand-300 transition-all text-[11px] font-medium"
                        title="Ver Detalhes no LinkedIn"
                      >
                        <Linkedin className="w-3 h-3 text-brand-400" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 mt-6 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
