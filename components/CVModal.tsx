'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { X, Printer, Mail, Phone, MapPin, Globe, Linkedin, Github, CheckCircle } from 'lucide-react';

interface CVModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const t = translations[lang].cvModal;
  const exp = translations[lang].experience;
  const edu = translations[lang].education;
  const cert = translations[lang].certifications;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50 print:hidden">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{t.title}</span>
          </h3>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all"
            >
              <Printer className="w-4 h-4" />
              {t.downloadBtn}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-slate-900 text-slate-100 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Header CV */}
          <div className="border-b border-slate-800 print:border-black pb-6 space-y-3">
            <h1 className="text-3xl font-extrabold text-white print:text-black">Tiago Kochem</h1>
            <h2 className="text-base font-bold text-brand-400 print:text-black">
              Developer Full Stack | AI Engineer | PHP | Laravel | Vue.js | LLM | Machine Learning | LangChain | RAG | AI Agents
            </h2>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400 print:text-slate-700 font-mono pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                Marechal Cândido Rondon, Paraná, Brazil
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                +55 (45) 98844-3877
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                tiagok989@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400 print:text-slate-700 font-mono pt-1">
              <span>LinkedIn: linkedin.com/in/tiagokochem</span>
              <span>GitHub: github.com/Tiagokochem</span>
              <span>Portfolio: tiagokochemsite.vercel.app</span>
              <span>Live: nuvartis.com | devbrief.online</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider print:text-black">Summary</h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Full Stack Developer building software since 2019, with PHP/Laravel and Vue.js as core stack. I build custom web systems, REST/GraphQL APIs, and integrations between platforms (e-commerce, marketplaces, ERPs, payment gateways, and shipping carriers), and apply AI (LangGraph, LangChain, OpenAI, RAG, n8n) where it solves a concrete business problem. Experienced with PostgreSQL, Redis, RabbitMQ, Docker, and CI/CD. Previous background running e-commerce businesses, which helps me understand the operational side of the systems I build.
            </p>
          </div>

          {/* Featured SaaS Products */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider print:text-black">Live Platforms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300">
                <h4 className="font-bold text-white print:text-black">Nuvartis (nuvartis.com)</h4>
                <p className="text-slate-400 print:text-slate-700 mt-1">
                  Complete e-commerce platform integrated with marketplaces (Mercado Livre, Magalu, Shopee), real-time shipping quotes (Correios, Melhor Envio, and carriers), streamlined checkout, and payment gateways.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300">
                <h4 className="font-bold text-white print:text-black">DevBrief (devbrief.online)</h4>
                <p className="text-slate-400 print:text-slate-700 mt-1">
                  Daily log and standup automation for tech teams. Installable PWA with offline support, AI-generated summaries, and subscription plans. Built with React and Node.js.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider print:text-black">Professional Experience</h3>
            <div className="space-y-6">
              {exp.items.map((item, idx) => (
                <div key={idx} className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold">
                    <span className="text-white print:text-black">{item.role} | <span className="text-brand-400 print:text-black">{item.company}</span></span>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{item.period} | {item.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-800 pl-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider print:text-black">Education & Post-Graduation</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              {edu.items.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-800/60 pb-2">
                  <div>
                    <span className="font-bold text-white print:text-black">{item.degree}</span>
                    <span className="block text-xs text-slate-400 print:text-slate-600">{item.institution}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider print:text-black">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {cert.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300 print:text-slate-800">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.title} | <em>{item.issuer}</em></span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
