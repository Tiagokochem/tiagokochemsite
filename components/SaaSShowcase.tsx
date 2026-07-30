'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { ExternalLink, Check, Layers, Zap, ShieldCheck } from 'lucide-react';

interface SaaSProps {
  lang: Language;
}

export const SaaSShowcase: React.FC<SaaSProps> = ({ lang }) => {
  const t = translations[lang].saas;

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

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className="space-y-6">
                
                {/* Header Card */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-brand-400 text-xs font-semibold mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {item.domain}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white transition-all shadow-md flex items-center gap-1 text-xs font-bold"
                  >
                    <span>Acessar</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Tags Tech */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
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
