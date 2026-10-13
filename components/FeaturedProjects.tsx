'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { Star, ExternalLink, Github } from 'lucide-react';

interface FeaturedProjectsProps {
  lang: Language;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ lang }) => {
  const t = translations[lang].featured;

  return (
    <section id="projetos" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <article
              key={item.title}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-brand-400 text-xs font-semibold mb-3">
                    {item.kind}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-rose-400 mb-1">{t.problemLabel}</h4>
                    <p className="text-slate-300">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">{t.solutionLabel}</h4>
                    <p className="text-slate-300">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-ai-400 mb-1">{t.roleLabel}</h4>
                    <p className="text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t.demoLabel}
                    </a>
                  )}
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      {t.repoLabel}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
