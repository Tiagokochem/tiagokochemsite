import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tiago-kochem.vercel.app'),
  title: 'Tiago Kochem | AI Engineer & Full Stack Developer | PHP, Laravel, React, Node.js',
  description: 'Portfólio & Estúdio de Soluções de TI de Tiago Kochem. Especialista em Engenharia de IA Aplicada (LangGraph, OpenAI, RAG, n8n), Desenvolvimento SaaS Full Stack (Laravel, Vue 3, React, Next.js) e Sistemas de Alta Escala.',
  keywords: [
    'Tiago Kochem',
    'AI Engineer',
    'Full Stack Developer',
    'PHP Specialist',
    'Laravel Developer',
    'Vue.js',
    'React',
    'Next.js',
    'LangGraph',
    'RAG',
    'AI Agents',
    'n8n Automation',
    'PagRent',
    'DevBrief',
    'Freelancer PHP',
    'Desenvolvedor Freelancer',
  ],
  authors: [{ name: 'Tiago Kochem', url: 'https://github.com/Tiagokochem' }],
  creator: 'Tiago Kochem',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: 'https://tiago-kochem.vercel.app',
    title: 'Tiago Kochem | AI & Full Stack Studio',
    description: 'Transformando Desafios em SaaS de Alta Escala, Agentes de IA e Soluções de Performance.',
    siteName: 'Tiago Kochem Studio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Tiago Kochem - AI Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Kochem | AI Engineer & Full Stack Developer',
    description: 'Engenheiro de IA Aplicada & Desenvolvedor Full Stack Sênior (PHP, Laravel, React, Node.js).',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tiago Kochem',
    jobTitle: 'AI Engineer & Full Stack Developer',
    url: 'https://github.com/Tiagokochem',
    sameAs: [
      'https://www.linkedin.com/in/tiagokochem',
      'https://github.com/Tiagokochem',
      'https://pagrent.com.br',
      'https://devbrief.online',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'LLM',
      'LangGraph',
      'RAG',
      'PHP',
      'Laravel',
      'Vue.js',
      'React',
      'Next.js',
      'Docker',
      'AWS',
      'PostgreSQL',
    ],
  };

  return (
    <html lang="pt-BR" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
