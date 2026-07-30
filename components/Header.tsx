'use client';

import React, { useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { Globe, FileText, Send, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicos', label: t.services },
    { href: '#saas', label: t.saas },
    { href: '#portfolio', label: t.portfolio },
    { href: '#trajetoria', label: t.experience },
    { href: '#skills', label: t.skills },
    { href: '#formacao', label: t.education },
    { href: '#contato', label: t.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-ai-500 flex items-center justify-center font-bold text-white shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            TK
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-brand-400 transition-colors">
              Tiago Kochem
            </span>
            <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              AI & Software Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Language Selector */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900/80 border border-slate-800 rounded-full p-1 text-xs">
            <button
              onClick={() => setLang('pt')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${lang === 'pt' ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${lang === 'en' ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EN
            </button>
          </div>

          {/* View Resume Button */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4 text-brand-400" />
            {t.viewCV}
          </button>

          {/* Request Proposal CTA */}
          <a
            href="#contato"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-ai-600 hover:from-brand-500 hover:to-ai-500 shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02]"
          >
            <Send className="w-3.5 h-3.5" />
            {t.requestProposal}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5 text-xs mr-2">
            <button
              onClick={() => setLang('pt')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${lang === 'pt' ? 'bg-brand-600 text-white' : 'text-slate-400'}`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${lang === 'en' ? 'bg-brand-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-brand-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-brand-400" />
              {t.viewCV}
            </button>

            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-ai-600 shadow-lg"
            >
              <Send className="w-4 h-4" />
              {t.requestProposal}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
