import { allPhotos, type GalleryPhoto } from "./works";
import { localPhotos } from "./localize";
import type { Lang } from "../i18n";
import home from "./home.json";

// home.json is written by the /curate page (only available with `astro dev`).
//   order:  photo ids in the order you want them; photos not listed go at the end
//   hidden: photo ids left off the home page
export function orderedPhotos(
  photos: GalleryPhoto[] = allPhotos,
): (GalleryPhoto & { hidden: boolean })[] {
  const byId = new Map(photos.map((p) => [p.id, p]));
  const ordered = (home.order as string[])
    .map((id) => byId.get(id))
    .filter((p): p is GalleryPhoto => !!p);
  const listed = new Set(ordered.map((p) => p.id));
  const rest = photos.filter((p) => !listed.has(p.id));
  const hidden = new Set(home.hidden as string[]);
  return [...ordered, ...rest].map((p) => ({ ...p, hidden: hidden.has(p.id) }));
}

export function homePhotos(lang: Lang = "en"): GalleryPhoto[] {
  return orderedPhotos(localPhotos(lang)).filter((p) => !p.hidden);
}

// Split photos into columns, always adding to the shortest one, so the grid
// reads roughly left-to-right, top-to-bottom in the chosen order.
export function masonry<T extends { image: { width: number; height: number } }>(
  items: T[],
  columns: number,
): T[][] {
  const cols: T[][] = Array.from({ length: columns }, () => []);
  const heights = new Array(columns).fill(0);
  for (const item of items) {
    const i = heights.indexOf(Math.min(...heights));
    cols[i].push(item);
    heights[i] += item.image.height / item.image.width;
  }
  return cols;
}
