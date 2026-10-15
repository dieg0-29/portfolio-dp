/**
 * Datos personales del portafolio.
 * Los valores marcados con MOCK son provisionales y deben reemplazarse por los definitivos.
 */
import avatar from '../assets/mock/avatar.svg'; // MOCK: reemplazar por la foto de perfil (p. ej. ../assets/profile.jpg)

export type Localized = { es: string; en: string };

export const site = {
  name: 'Diego Pinedo',
  avatar,
  role: { es: 'Desarrollador Full-Stack', en: 'Full-Stack Developer' } satisfies Localized,
  tagline: {
    es: 'Diseño y desarrollo aplicaciones web de punta a punta, cuidando el rendimiento, la accesibilidad y la experiencia de quien las usa.',
    en: 'I design and build end-to-end web applications, with a focus on performance, accessibility and user experience.',
  } satisfies Localized,
  email: 'correo@ejemplo.com', // MOCK
  socials: {
    github: 'https://github.com/dieg0-29',
    linkedin: 'https://www.linkedin.com/in/usuario', // MOCK
  },
  cv: {
    es: '/cv/cv-diego-pinedo-es.pdf', // MOCK: reemplazar los PDF en public/cv/
    en: '/cv/cv-diego-pinedo-en.pdf',
  } satisfies Localized,
  available: true,
  about: {
    // MOCK: biografía de 2 a 3 párrafos cortos.
    es: [
      'Soy desarrollador full-stack con experiencia creando aplicaciones web modernas, desde la interfaz hasta la API y la base de datos. Me gusta transformar problemas complejos en productos simples e intuitivos.',
      'Trabajo principalmente con TypeScript, React, Astro y Node.js. Me importan el código limpio, las buenas prácticas de UI/UX y que cada proyecto se sienta rápido y cuidado en cualquier dispositivo.',
      'Actualmente busco sumarme a un equipo donde pueda seguir creciendo, aportar desde el primer día y construir software que tenga impacto real.',
    ],
    en: [
      "I'm a full-stack developer with experience building modern web applications, from the interface to the API and the database. I enjoy turning complex problems into simple, intuitive products.",
      'I mainly work with TypeScript, React, Astro and Node.js. I care about clean code, solid UI/UX practices, and making every project feel fast and polished on any device.',
      "I'm currently looking to join a team where I can keep growing, contribute from day one, and build software with real impact.",
    ],
  },
  facts: [
    // MOCK
    { key: 'about.location', value: { es: 'Ciudad, País', en: 'City, Country' } },
    { key: 'about.focus', value: { es: 'Frontend · APIs · UX', en: 'Frontend · APIs · UX' } },
    { key: 'about.languages', value: { es: 'Español (nativo), Inglés (B2)', en: 'Spanish (native), English (B2)' } },
  ] as const,
} as const;

/** Habilidades agrupadas por categoría. MOCK: ajustar al stack tecnológico real. */
export const skills: { title: Localized; icon: 'layout' | 'server' | 'database' | 'wrench'; items: string[] }[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    icon: 'layout',
    items: ['TypeScript', 'JavaScript', 'React', 'Astro', 'Next.js', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    icon: 'server',
    items: ['Node.js', 'Express', 'REST APIs', 'Python', 'Autenticación JWT'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    icon: 'database',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'SQL'],
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    icon: 'wrench',
    items: ['Git & GitHub', 'Docker', 'Vercel', 'Figma', 'Vitest', 'Linux'],
  },
];
