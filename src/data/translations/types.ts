// Shape of a translation file. Anything left out falls back to English
// (src/data/works.ts). Dimensions and years are shared, so they aren't repeated.
export interface WorkTranslation {
  title: string;
  summary: string;
  text?: string[]; // paragraphs; may use <em> for italics
  pieces?: { title: string; lines: string[] }[]; // same order as in works.ts
  photos?: Record<string, { alt: string; caption?: string }>; // by photo name
}

export interface Translation {
  works: Record<string, WorkTranslation>; // by work slug
  projects: Record<string, { title: string; text?: string[] }>; // by project slug
  studio: { label: string; alts: Record<string, string> }; // by photo name
}
