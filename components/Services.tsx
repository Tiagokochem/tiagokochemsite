'use client';

import React from 'react';
import { Language, translations, whatsappLink } from '@/lib/translations';
import { Bot, Code, Plug, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;
  const wa = translations[lang].whatsapp;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-ai-400" />;
      case 'Plug':
        return <Plug className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-950/80 border border-ai-500/30 text-ai-400 text-xs font-bold uppercase tracking-wider">
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60">
                <a
                  href={whatsappLink(`${wa.serviceMessage}${item.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>{t.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
