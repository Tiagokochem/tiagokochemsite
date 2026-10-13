'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/lib/translations';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { SaaSShowcase } from '@/components/SaaSShowcase';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { Experience } from '@/components/Experience';
import { CertificationsSkills } from '@/components/CertificationsSkills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { CVModal } from '@/components/CVModal';

export default function Home() {
  const [lang, setLang] = useState<Language>('pt');
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-brand-500 selection:text-white">
      
      {/* Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Hero Section */}
      <Hero lang={lang} />

      {/* Services for Clients / Freelance */}
      <Services lang={lang} />

      {/* Own Live Products (Nuvartis featured, DevBrief) */}
      <SaaSShowcase lang={lang} />

      {/* Featured Case Studies */}
      <FeaturedProjects lang={lang} />

      {/* Other Projects (collapsed) */}
      <PortfolioGrid lang={lang} />

      {/* Professional Career Experience */}
      <Experience lang={lang} />

      {/* Skills Matrix & Certifications */}
      <CertificationsSkills lang={lang} />

      {/* Education */}
      <Education lang={lang} />

      {/* Contact & Proposal Form */}
      <Contact lang={lang} />

      {/* Printable CV Modal */}
      <CVModal
        lang={lang}
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Tiago Kochem | {lang === 'pt' ? 'Desenvolvimento de sistemas, integrações e automação.' : 'Custom software, integrations, and automation.'}</p>
          <p className="text-slate-600">tiagok989@gmail.com • +55 (45) 98844-3877</p>
        </div>
      </footer>

    </main>
  );
}
