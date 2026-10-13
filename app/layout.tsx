import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL } from '@/lib/translations';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const title = 'Tiago Kochem | Desenvolvedor Laravel Freelancer, Integrações e Automação';
const description =
  'Desenvolvo sistemas web em Laravel, integrações de APIs e automações com IA e WhatsApp para empresas. Projetos no ar e código aberto. Fale comigo pelo WhatsApp.';

export const viewport: Viewport = {
  themeColor: '#090d16',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: 'Tiago Kochem',
  keywords: [
    'Tiago Kochem',
    'desenvolvedor Laravel freelancer',
    'desenvolvedor PHP freelancer',
    'desenvolvedor full stack freelancer',
    'desenvolvimento de sistemas sob medida',
    'integração de APIs',
    'integração com marketplaces',
    'integração Mercado Livre',
    'automação de processos',
    'automação de WhatsApp',
    'prospecção no WhatsApp',
    'agentes de IA',
    'LangGraph',
    'FastAPI',
    'Vue.js',
    'freelance Laravel developer',
  ],
  authors: [{ name: 'Tiago Kochem', url: SITE_URL }],
  creator: 'Tiago Kochem',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '16J2Bjw0JbhNzdsintzJtjHciXTCqDhIfVYj4BbmtfI',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Tiago',
    lastName: 'Kochem',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: SITE_URL,
    title,
    description,
    siteName: 'Tiago Kochem',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Tiago Kochem',
      inLanguage: ['pt-BR', 'en'],
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Tiago Kochem',
      jobTitle: 'Desenvolvedor Full Stack',
      description,
      url: SITE_URL,
      image: `${SITE_URL}/profile.jpg`,
      email: 'mailto:tiagok989@gmail.com',
      telephone: '+55-45-98844-3877',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Marechal Cândido Rondon',
        addressRegion: 'PR',
        addressCountry: 'BR',
      },
      sameAs: [
        'https://www.linkedin.com/in/tiagokochem',
        'https://github.com/Tiagokochem',
      ],
      knowsAbout: [
        'PHP',
        'Laravel',
        'Vue.js',
        'Python',
        'FastAPI',
        'API Integration',
        'Process Automation',
        'WhatsApp Automation',
        'E-commerce Integration',
        'AI Agents',
        'LangGraph',
        'PostgreSQL',
        'Docker',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Tiago Kochem | Desenvolvimento de Sistemas e Automação',
      url: SITE_URL,
      image: `${SITE_URL}/profile.jpg`,
      telephone: '+55-45-98844-3877',
      email: 'tiagok989@gmail.com',
      founder: { '@id': `${SITE_URL}/#person` },
      availableLanguage: ['Portuguese', 'English'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sistemas web e APIs com Laravel' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integrações e automação de processos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soluções com IA aplicada e automação de WhatsApp' } },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'Projetos',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'WebApplication', name: 'Nuvartis', url: 'https://nuvartis.com', applicationCategory: 'BusinessApplication', creator: { '@id': `${SITE_URL}/#person` } } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'WebApplication', name: 'DevBrief', url: 'https://devbrief.online', applicationCategory: 'BusinessApplication', creator: { '@id': `${SITE_URL}/#person` } } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'SoftwareSourceCode', name: 'SaaS de Prospecção no WhatsApp', codeRepository: 'https://github.com/Tiagokochem/vendaprojeto', programmingLanguage: 'Python', author: { '@id': `${SITE_URL}/#person` } } },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable}`}>
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
