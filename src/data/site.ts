/**
 * Datos personales del portafolio.
 * Los valores marcados con MOCK son provisionales y deben reemplazarse por los definitivos.
 */
import type { IconName } from '../components/ui/Icon.astro';
import avatar from '../assets/mock/avatar.svg'; // MOCK: reemplazar por la foto de perfil (p. ej. ../assets/profile.jpg)

export type Localized = { es: string; en: string };

export const site = {
  name: 'Diego Pinedo',
  fullName: 'Diego Alonso Pinedo Aponte',
  avatar,
  role: {
    es: 'Desarrollador web · Estudiante de Ingeniería de Sistemas',
    en: 'Web developer · Systems Engineering student',
  } satisfies Localized,
  tagline: {
    es: 'Diseño y desarrollo plataformas web de punta a punta, desde la base de datos hasta la interfaz, y lidero equipos tecnológicos en la Universidad Nacional de Ingeniería.',
    en: 'I design and build end-to-end web platforms, from the database to the interface, and lead tech teams at the National University of Engineering (UNI) in Lima, Peru.',
  } satisfies Localized,
  email: 'diego.pinedo1229@gmail.com',
  socials: {
    github: 'https://github.com/dieg0-29',
    linkedin: 'https://www.linkedin.com/in/diego-alonso-pinedo-aponte-998ab1351/',
  },
  cv: {
    es: '/cv/cv-diego-pinedo-es.pdf', // MOCK: reemplazar los PDF en public/cv/
    en: '/cv/cv-diego-pinedo-en.pdf',
  } satisfies Localized,
  available: true,
  about: {
    es: [
      'Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional de Ingeniería (UNI), en el quinto superior de mi promoción, con experiencia en diseño y arquitectura de sistemas, desarrollo web y gestión de bases de datos. Me interesa seguir aprendiendo sobre arquitectura cloud.',
      'He participado en la creación de soluciones integrales a través de plataformas web y en la automatización de procesos operativos. Trabajo principalmente con Astro, Next.js, Supabase y PostgreSQL.',
      'También lidero equipos tecnológicos: coordino el desarrollo de plataformas orientadas a mejorar la experiencia del usuario y aplico metodologías ágiles con GitHub Projects y GitFlow.',
    ],
    en: [
      "I'm a Systems Engineering student at the National University of Engineering (UNI) in Lima, Peru, ranked in the top fifth of my class, with experience in systems design and architecture, web development and database management. I'm keen to keep learning about cloud architecture.",
      "I've helped build end-to-end solutions through web platforms and automate operational processes. I mainly work with Astro, Next.js, Supabase and PostgreSQL.",
      'I also lead tech teams: I coordinate the development of platforms focused on improving user experience and apply agile practices with GitHub Projects and GitFlow.',
    ],
  },
  facts: [
    { key: 'about.location', icon: 'map-pin', value: { es: 'Lima, Perú', en: 'Lima, Peru' } },
    {
      key: 'about.education',
      icon: 'graduation',
      value: { es: 'Ingeniería de Sistemas, UNI (7.º ciclo)', en: 'Systems Engineering, UNI (7th term)' },
    },
    {
      key: 'about.focus',
      icon: 'layout',
      value: { es: 'Desarrollo web · Bases de datos · Cloud', en: 'Web development · Databases · Cloud' },
    },
  ] as const,
} as const;

/** Habilidades agrupadas por categoría. */
export const skills: { title: Localized; icon: IconName; items: string[] }[] = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    icon: 'layout',
    items: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: { es: 'Backend y datos', en: 'Backend & data' },
    icon: 'database',
    items: ['NestJS', 'Python', 'Java', 'PostgreSQL', 'Supabase', 'Prisma ORM'],
  },
  {
    title: { es: 'Gestión y versionado', en: 'Workflow & version control' },
    icon: 'wrench',
    items: ['Git', 'GitHub', 'GitHub Projects', 'GitFlow', 'Vercel'],
  },
  {
    title: { es: 'Certificaciones', en: 'Certifications' },
    icon: 'star',
    items: ['Power BI Intermedio (UNI)', 'Excel Intermedio'],
  },
];
