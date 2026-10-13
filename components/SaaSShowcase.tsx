'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { ExternalLink, Check, Layers, Star } from 'lucide-react';

interface SaaSProps {
  lang: Language;
}

export const SaaSShowcase: React.FC<SaaSProps> = ({ lang }) => {
  const t = translations[lang].saas;
  const [main, ...rest] = t.items;

  return (
    <section id="saas" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Main Product */}
        <article className="relative glass-card rounded-3xl p-8 sm:p-10 border border-brand-500/40 shadow-2xl shadow-brand-500/10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {t.featuredBadge}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-brand-400 text-xs font-semibold">
                  {main.badge}
                </span>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">{main.name}</h3>
                <p className="text-sm font-mono text-slate-400">{main.domain}</p>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">{main.description}</p>
              <div className="flex flex-wrap gap-2">
                {main.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <ul className="space-y-3">
                {main.highlights.map((hl) => (
                  <li key={hl} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    {hl}
                  </li>
                ))}
              </ul>
              <a
                href={main.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold transition-all hover:scale-[1.01]"
              >
                {t.accessBtn} {main.domain}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>

        {/* Other Products */}
        {rest.length > 0 && (
          <div className={`mt-6 grid grid-cols-1 gap-6 ${rest.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {rest.map((item) => (
              <article
                key={item.name}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-brand-500/40 transition-all flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-brand-400 text-[11px] font-semibold mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-xs font-mono text-slate-400">{item.domain}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition-all flex items-center gap-1 text-xs font-bold"
                  >
                    {t.accessBtn}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
