import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;
export type Experience = CollectionEntry<'experience'>;

/** "es/taskflow" -> "taskflow" */
export const slugOf = (entry: { id: string }) => entry.id.split('/').slice(1).join('/');

/** Proyectos del idioma: destacados primero, luego por `order` y año. */
export async function getProjects(lang: Lang) {
  const items = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return items.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      a.data.order - b.data.order ||
      b.data.year - a.data.year,
  );
}

/** Experiencia del idioma, de la más reciente a la más antigua. */
export async function getExperience(lang: Lang) {
  const items = await getCollection('experience', ({ id }) => id.startsWith(`${lang}/`));
  return items.sort(
    (a, b) =>
      (b.data.end?.getTime() ?? Infinity) - (a.data.end?.getTime() ?? Infinity) ||
      b.data.start.getTime() - a.data.start.getTime(),
  );
}

export function formatMonth(date: Date, lang: Lang) {
  const s = new Intl.DateTimeFormat(lang === 'es' ? 'es' : 'en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
  return s.charAt(0).toUpperCase() + s.slice(1);
}
