export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Diego Pinedo — Desarrollador Full-Stack',
    'meta.description':
      'Portafolio de Diego Pinedo: proyectos, habilidades y experiencia en desarrollo web full-stack.',
    'skip': 'Saltar al contenido',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.menu': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'theme.toggle': 'Cambiar tema claro/oscuro',
    'lang.switch': 'Ver en English',
    'hero.available': 'Disponible para nuevas oportunidades',
    'hero.greeting': 'Hola, soy',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV',
    'hero.statProjects': 'proyectos',
    'hero.statInProgress': 'en progreso',
    'hero.statTech': 'tecnologías',
    'hero.avatarAlt': 'Foto de Diego Pinedo',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Construyo productos web claros, rápidos y bien hechos',
    'about.location': 'Ubicación',
    'about.focus': 'Enfoque',
    'about.languages': 'Idiomas',
    'skills.eyebrow': 'Habilidades',
    'skills.title': 'Tecnologías con las que trabajo',
    'skills.subtitle': 'Herramientas que uso a diario para llevar ideas a producción.',
    'projects.eyebrow': 'Proyectos',
    'projects.title': 'Trabajo seleccionado',
    'projects.subtitle': 'Lo que he construido y lo que estoy construyendo ahora mismo.',
    'projects.filterAll': 'Todos',
    'projects.filterDone': 'Terminados',
    'projects.filterProgress': 'En progreso',
    'projects.filterLabel': 'Filtrar proyectos por estado',
    'projects.showing': 'Mostrando {n} proyectos',
    'status.done': 'Terminado',
    'status.in-progress': 'En progreso',
    'projects.featured': 'Destacado',
    'projects.details': 'Ver detalles',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.back': 'Volver a proyectos',
    'projects.stack': 'Tecnologías',
    'projects.year': 'Año',
    'projects.status': 'Estado',
    'experience.eyebrow': 'Trayectoria',
    'experience.title': 'Experiencia y formación',
    'experience.present': 'Actualidad',
    'contact.eyebrow': 'Contacto',
    'contact.title': '¿Trabajamos juntos?',
    'contact.subtitle':
      'Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones. Escríbeme y te respondo pronto.',
    'contact.email': 'Enviar correo',
    'contact.copy': 'Copiar correo',
    'contact.copied': '¡Copiado!',
    'footer.built': 'Hecho con Astro y Tailwind CSS.',
    'footer.top': 'Volver arriba',
    '404.title': 'Página no encontrada',
    '404.text': 'La página que buscas no existe o fue movida.',
    '404.home': 'Ir al inicio',
  },
  en: {
    'meta.title': 'Diego Pinedo — Full-Stack Developer',
    'meta.description':
      'Portfolio of Diego Pinedo: projects, skills and experience in full-stack web development.',
    'skip': 'Skip to content',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.switch': 'Ver en Español',
    'hero.available': 'Open to new opportunities',
    'hero.greeting': "Hi, I'm",
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',
    'hero.statProjects': 'projects',
    'hero.statInProgress': 'in progress',
    'hero.statTech': 'technologies',
    'hero.avatarAlt': 'Photo of Diego Pinedo',
    'about.eyebrow': 'About me',
    'about.title': 'I build clear, fast and well-crafted web products',
    'about.location': 'Location',
    'about.focus': 'Focus',
    'about.languages': 'Languages',
    'skills.eyebrow': 'Skills',
    'skills.title': 'Technologies I work with',
    'skills.subtitle': 'Tools I use every day to take ideas to production.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected work',
    'projects.subtitle': "What I've built and what I'm building right now.",
    'projects.filterAll': 'All',
    'projects.filterDone': 'Completed',
    'projects.filterProgress': 'In progress',
    'projects.filterLabel': 'Filter projects by status',
    'projects.showing': 'Showing {n} projects',
    'status.done': 'Completed',
    'status.in-progress': 'In progress',
    'projects.featured': 'Featured',
    'projects.details': 'View details',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.back': 'Back to projects',
    'projects.stack': 'Tech stack',
    'projects.year': 'Year',
    'projects.status': 'Status',
    'experience.eyebrow': 'Journey',
    'experience.title': 'Experience & education',
    'experience.present': 'Present',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's work together",
    'contact.subtitle':
      "I'm open to job opportunities, freelance projects and collaborations. Drop me a line and I'll get back to you soon.",
    'contact.email': 'Send email',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',
    'footer.built': 'Built with Astro and Tailwind CSS.',
    'footer.top': 'Back to top',
    '404.title': 'Page not found',
    '404.text': "The page you're looking for doesn't exist or has moved.",
    '404.home': 'Go home',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Ruta equivalente en el idioma indicado (es: sin prefijo, en: /en/...). */
export function localizePath(path: string, lang: Lang) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

/** Quita el prefijo de idioma de una ruta: /en/projects/x -> /projects/x */
export function stripLang(pathname: string) {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}
