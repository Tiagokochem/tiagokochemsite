'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { Cpu, Award, CheckCircle } from 'lucide-react';

interface CertificationsSkillsProps {
  lang: Language;
}

export const CertificationsSkills: React.FC<CertificationsSkillsProps> = ({ lang }) => {
  const tCert = translations[lang].certifications;

  const skillGroups = [
    {
      title: 'AI & Automation',
      skills: ['LLMs', 'Generative AI', 'RAG (Retrieval-Augmented Generation)', 'AI Agents (LangGraph)', 'OpenAI API Integration', 'Prompt Engineering', 'n8n Automation'],
      color: 'from-ai-500/20 to-purple-500/20 border-ai-500/30 text-ai-400',
    },
    {
      title: 'Back-end & Languages',
      skills: ['PHP', 'Laravel', 'Node.js', 'Spring Boot', 'Go', 'TypeScript', 'JavaScript', 'REST APIs', 'GraphQL', 'PHPUnit / Pest'],
      color: 'from-brand-500/20 to-blue-500/20 border-brand-500/30 text-brand-400',
    },
    {
      title: 'Front-end & Mobile',
      skills: ['Vue.js (Vue 3 / Composition)', 'React.js', 'Next.js', 'Inertia.js', 'Angular', 'Flutter', 'TailwindCSS', 'Bootstrap', 'Livewire'],
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    },
    {
      title: 'Cloud, DevOps & Databases',
      skills: ['AWS', 'Docker / Docker Compose', 'Redis', 'RabbitMQ', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'CI/CD Pipelines'],
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Matrix Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-950/80 border border-ai-500/30 text-ai-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Habilidades Técnicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Matriz de Tecnologias & Engenharia
          </h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 border bg-gradient-to-br ${group.color} transition-all`}
            >
              <h3 className={`text-lg font-bold mb-4 ${group.color.split(' ').pop()}`}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              {tCert.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {tCert.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tCert.items.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="glass-card rounded-xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
