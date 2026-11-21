// Merges the translation files over the English data in works.ts.
import {
  works,
  projects,
  studioPhotos,
  photo,
  type Work,
  type Project,
  type GalleryPhoto,
} from "./works";
import type { Translation } from "./translations/types";
import es from "./translations/es";
import kr from "./translations/kr";
import { languages, type Lang } from "../i18n";

const translations: Partial<Record<Lang, Translation>> = { es, kr };

const prefixOf = (lang: Lang) => languages.find((l) => l.code === lang)!.prefix;

export function localWork(work: Work, lang: Lang): Work {
  const t = translations[lang]?.works[work.slug];
  if (!t) return work;
  return {
    ...work,
    title: t.title,
    summary: t.summary,
    text: t.text ?? work.text,
    pieces: work.pieces.map((p, i) => t.pieces?.[i] ?? p),
    photos: work.photos.map((p) => ({ ...p, ...t.photos?.[p.name] })),
  };
}

export function localProject(project: Project, lang: Lang): Project {
  const t = translations[lang]?.projects[project.slug];
  return t ? { ...project, title: t.title, text: t.text ?? project.text } : project;
}

export const localWorks = (lang: Lang) => works.map((w) => localWork(w, lang));
export const localProjects = (lang: Lang) => projects.map((p) => localProject(p, lang));

export function localWorkBySlug(slug: string, lang: Lang): Work {
  const work = works.find((w) => w.slug === slug);
  if (!work) throw new Error(`Unknown work: ${slug}`);
  return localWork(work, lang);
}

export function localProjectFor(workSlug: string, lang: Lang): Project | undefined {
  const project = projects.find((p) => p.works.includes(workSlug));
  return project && localProject(project, lang);
}

// Same ids as allPhotos in works.ts, with translated text and links.
export function localPhotos(lang: Lang): GalleryPhoto[] {
  const prefix = prefixOf(lang);
  const studio = translations[lang]?.studio;
  return [
    ...localWorks(lang).flatMap((w) =>
      w.photos.filter((p) => !p.show || p.show.includes("home")).map((p) => ({
        id: `${w.slug}/${p.name}`,
        alt: p.alt,
        label: `${w.title} (${w.year})`,
        href: `${prefix}/work/${w.slug}/`,
        image: photo(w.slug, p.name),
      })),
    ),
    ...studioPhotos.map((p) => ({
      id: `studio/${p.name}`,
      alt: studio?.alts[p.name] ?? p.alt,
      label: studio?.label ?? "Studio",
      image: photo("studio", p.name),
    })),
  ];
}
