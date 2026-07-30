'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { MessageSquare, Mail, Send, Linkedin, Github, PhoneCall, Sparkles } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: t.types[0],
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Tiago! Meu nome é ${formData.name} (${formData.email}).\nProjeto: ${formData.projectType}\nDetalhes: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5545988443877?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.title}
          </h2>
          <p className="text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels Left */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Canais Diretos de Atendimento</h3>
              <p className="text-xs text-slate-400">
                Atendimento rápido para novos projetos, consultoria ou contratação freelance.
              </p>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/5545988443877?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-emerald-400 uppercase">WhatsApp Direto</span>
                  <span className="text-sm font-bold text-white">+55 (45) 98844-3877</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:tiagok989@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-400 uppercase">E-mail</span>
                  <span className="text-sm font-bold text-white">tiagok989@gmail.com</span>
                </div>
              </a>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tiagokochem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-brand-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Tiagokochem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">{t.formTitle}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:border-brand-500 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:border-brand-500 focus:outline-none transition-colors"
                    placeholder="seuemail@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  {t.projectTypeLabel}
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:border-brand-500 focus:outline-none transition-colors"
                >
                  {t.types.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  {t.messageLabel} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:border-brand-500 focus:outline-none transition-colors resize-none"
                  placeholder="Descreva brevemente sua ideia, desafio ou necessidade de contratação..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                {t.submitBtn}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
