// Languages with their own pages under src/pages/<code>/.
// To add French or Hungarian later: add it here, add a translation file in
// src/data/translations/, and copy src/pages/es/ to src/pages/<code>/.
export const languages = [
  { code: "en", label: "ENG", prefix: "", htmlLang: "en" },
  { code: "es", label: "ESP", prefix: "/es", htmlLang: "es" },
  { code: "kr", label: "한국어", prefix: "/kr", htmlLang: "ko" },
] as const;

export type Lang = (typeof languages)[number]["code"];

// Interface words (menu, links, page titles).
export const ui: Record<Lang, {
  work: string;
  about: string;
  workTitle: string;
  aboutTitle: string;
  next: string;
  allWork: string;
  description: string;
}> = {
  en: {
    work: "work",
    about: "about",
    workTitle: "Work",
    aboutTitle: "About",
    next: "Next",
    allWork: "All work",
    description:
      "Jewellery and small objects by Juan Castro-Varón, a Colombian-British designer, artist and engineer based in London.",
  },
  es: {
    work: "obra",
    about: "acerca de",
    workTitle: "Obra",
    aboutTitle: "Acerca de",
    next: "Siguiente",
    allWork: "Toda la obra",
    description:
      "Joyas y pequeños objetos de Juan Castro-Varón, diseñador, artista e ingeniero colombo-británico basado en Londres.",
  },
  kr: {
    work: "작업",
    about: "소개",
    workTitle: "작업",
    aboutTitle: "소개",
    next: "다음",
    allWork: "전체 작업",
    description:
      "런던을 기반으로 활동하는 콜롬비아계 영국인 디자이너, 아티스트, 엔지니어 후안 카스트로-바론의 주얼리와 작은 오브제.",
  },
};

export function localeFromPath(pathname: string) {
  const match = pathname.match(/^\/(es|kr)(?=\/|$)(.*)$/);
  const code: Lang = match ? (match[1] as Lang) : "en";
  let rest = match ? match[2] || "/" : pathname;
  if (!rest.endsWith("/")) rest += "/";
  const lang = languages.find((l) => l.code === code)!;
  return { code, prefix: lang.prefix, htmlLang: lang.htmlLang, rest };
}

// Every page exists in every language, so switching keeps you on the same page.
export function pathInLanguage(pathname: string, prefix: string) {
  return prefix + localeFromPath(pathname).rest;
}
