'use client';

import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { MessageSquare, ArrowRight, Github, Linkedin, Mail, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-ai-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.badge}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              <span className="block font-sans text-slate-100">Tiago Kochem</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-blue-400 to-ai-400">
                {t.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-300">
              {t.titleSub}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/5545988443877?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20freelance%20%2F%20consultoria."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                {t.ctaPrimary}
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                {t.ctaSecondary}
                <ArrowRight className="w-4 h-4 text-brand-400" />
              </a>
            </div>

            {/* Social Shortcuts */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Social:</span>
              <a
                href="https://www.linkedin.com/in/tiagokochem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 hover:text-brand-400 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Tiagokochem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:tiagok989@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 hover:text-amber-400 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Image & Card Right */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Animated Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-ai-500 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
              
              {/* Photo Container */}
              <div className="relative glass-card rounded-3xl p-4 overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/profile.jpg"
                    alt="Tiago Kochem - AI Engineer & Full Stack Developer"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Tag Below Image */}
                <div className="pt-4 pb-1 text-center space-y-1">
                  <h3 className="font-bold text-white text-lg">Tiago Kochem</h3>
                  <p className="text-xs text-brand-400 font-semibold">PHP / Laravel • AI Engineering • Next.js</p>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full Stack & AI Engineer Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 text-center hover:border-brand-500/40 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-ai-400">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
