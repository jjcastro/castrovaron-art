import type { ImageMetadata } from "astro";

// All photos live in src/assets/works/<slug>/<name>.jpg
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/works/**/*.jpg",
  { eager: true },
);

export function photo(slug: string, name: string): ImageMetadata {
  const file = files[`/src/assets/works/${slug}/${name}.jpg`];
  if (!file) throw new Error(`Missing photo: ${slug}/${name}.jpg`);
  return file.default;
}

export interface Piece {
  title: string;
  lines: string[]; // type, materials, dimensions, notes
}

export interface Photo {
  name: string;
  alt: string;
  caption?: string;
  // Where the photo appears; leave out to show it everywhere.
  //   "home": the home grid   "row": the project's row on the Work page
  //   "page": the piece's own page
  show?: ("home" | "row" | "page")[];
}

export interface Work {
  slug: string;
  title: string;
  year: string;
  summary: string; // one line shown under the cover on the home page
  text: string[]; // paragraphs; may use <em> for italics
  pieces: Piece[];
  photos: Photo[];
}

export const works: Work[] = [
  {
    slug: "untitled-rings",
    title: "Untitled",
    year: "2025",
    summary: "Rings. Sterling silver; 18 karat gold wire.",
    text: [],
    pieces: [
      {
        title: "Untitled (2025)",
        lines: ["Ring", "Sterling silver", "35mm x 23mm x 23mm"],
      },
      {
        title: "Untitled (2025)",
        lines: ["Ring", "18 karat gold wire", "35mm x 23mm x 23mm"],
      },
    ],
    photos: [
      { name: "01", alt: "A hand wearing a silver and a gold wire ring" },
      { name: "02", alt: "An outstretched hand wearing both wire rings" },
      { name: "03", alt: "Sterling silver wire ring on black" },
      { name: "04", alt: "18 karat gold wire ring on black" },
    ],
  },
  {
    slug: "ready-made-clasp",
    title: "Ready-made clasp",
    year: "2025",
    summary: "Necklace. Reclaimed walnut bark and sapwood, sterling silver.",
    text: [
      "The wood used to make this piece was recovered from a felled walnut tree in a demolition site in South London.",
      "While cutting the cross section into sheets, I found a beautiful piece of bark which held attached together to the sapwood, almost like a hug. I made a silver structure to use it as a natural “ready-made” clasp.",
    ],
    pieces: [
      {
        title: "Ready-made clasp (2025)",
        lines: [
          "Necklace",
          "Reclaimed walnut bark and sapwood, sterling silver, Spanish leather cord, epoxy glue",
          "110mm x 90mm x 30mm",
        ],
      },
    ],
    photos: [
      { name: "01", alt: "Walnut bark and sapwood pendant with silver tubes, front" },
      { name: "02", alt: "Walnut bark and sapwood pendant with silver tubes, back" },
    ],
  },
  {
    slug: "loom-rings",
    title: "Loom Rings",
    year: "2025–2026",
    summary: "A series of rings that are also looms. Silver, nickel silver, cotton thread.",
    text: [
      "Maya women have long woven on backstrap looms — portable looms tied to the body, with one end fastened around the weaver's waist. The weaver's own posture and movement create the tension needed to weave, making her an active part of the machine rather than a separate operator of it.",
      "Loom Rings extends this idea: wearable objects that themselves produce other wearable objects. The loom ring functions as a miniature loom worn on the finger, generating small cloth rings sized to fit the wearer who made them.",
    ],
    pieces: [
      {
        title: "Loom Ring (2026)",
        lines: ["Hollow ring", "Nickel silver, cotton thread, borax patina", "36mm x 66mm x 12mm"],
      },
      {
        title: "Circular Loom Ring (2025)",
        lines: ["Cast ring", "Sterling silver, red cotton thread", "12mm x 30mm x 30mm"],
      },
      {
        title: "Loom Shuttle Ring (2026)",
        lines: ["Ring", "Nickel silver, borax patination", "48mm x 43mm x 19mm"],
      },
    ],
    photos: [
      { name: "01", alt: "Loom Ring: nickel silver ring with red woven thread", caption: "Loom Ring (2026)" },
      { name: "02", alt: "Circular Loom Ring: silver band wrapped with red thread", caption: "Circular Loom Ring (2025)" },
      { name: "03", alt: "A woman wearing the Loom Shuttle Ring", caption: "Loom Shuttle Ring (2026)" },
      { name: "04", alt: "Loom Shuttle Ring worn on a raised fist", caption: "Loom Shuttle Ring (2026)" },
      { name: "05", alt: "Loom Shuttle Ring worn on a hand at the wrist", caption: "Loom Shuttle Ring (2026)" },
      { name: "06", alt: "Loom Shuttle Ring on the back of a hand", caption: "Loom Shuttle Ring (2026)" },
      { name: "07", alt: "Loom Shuttle Ring on a hand resting on an arm", caption: "Loom Shuttle Ring (2026)" },
      { name: "ref-loom", alt: "A Maya artist weaving on a backstrap loom", caption: "Maya artist using a backstrap loom. Photo: pjhap.wordpress.com" },
    ],
  },
  {
    slug: "engagement-rings",
    title: "Engagement rings",
    year: "2025",
    summary: "A matching pair. Sterling silver, 14 karat riveted wire.",
    text: [
      "I proposed to my now-husband with this ring. It's made of soldered sterling silver sheet, with five gold wires held in tension by small riveted ends.",
      "While fidgeting with it, my husband bent the ring's walls inward — just enough that the wires started to rattle loose inside. He was worried he'd broken it, but I loved the tactility of the loose wires, the new rattling noise, the accident of it.",
      "I realised that my original vision, where the wire is held in place, was unnecessarily rigid; the tactility, the playfulness of the loose wires made it more interesting, more fun.",
      "When I made my own matching ring, I made the rods 2mm longer on purpose, so mine would rattle too. I wear it every day and it reminds me that even when things don't go as planned, being open to surprises can actually bring the most joy.",
    ],
    pieces: [
      {
        title: "My husband's ring (2025)",
        lines: ["Engagement ring with natural patina from daily wear", "Sterling silver, 14 karat riveted wire"],
      },
      {
        title: "My ring (2025)",
        lines: ["Engagement ring", "Sterling silver, 14 karat riveted wire"],
      },
    ],
    photos: [
      { name: "01", alt: "Silver ring with gold wires set into a cut-out wall", caption: "My husband's ring (2025)" },
      { name: "02", alt: "Silver band with riveted gold wires", caption: "My ring (2025)" },
    ],
  },
  {
    slug: "silver-and-pearl",
    title: "Silver and pearl",
    year: "2025–2026",
    summary: "Brooch and necklace. Sterling silver, pearl.",
    text: [
      "Silver is hard, cold, elemental. It takes whatever shape you give it and holds it. It's also the best conductor, taking on heat easier than any other metal.",
      "Pearls are the opposite: organic, fragile, formed slowly and imperfectly by a living thing. Where silver conducts heat, pearls can't tolerate it — even slight warmth will ruin them.",
      "Working with both means constantly negotiating between control and surrender, precision and irregularity.",
    ],
    pieces: [
      {
        title: "Untitled (2026)",
        lines: ["Brooch", "Sterling silver, pearl", "63mm x 24mm x 12mm"],
      },
      {
        title: "Pearl Links Necklace (2025)",
        lines: ["Necklace, sold under the MINILITH brand", "Sterling silver, pearl", "Many sizes"],
      },
    ],
    photos: [
      { name: "01", alt: "A man wearing a silver and pearl brooch on a black jumper", caption: "Untitled (2026)" },
      { name: "02", alt: "A woman wearing a silver link necklace with pearls", caption: "Pearl Links Necklace (2025)" },
    ],
  },
  {
    slug: "inlay-sapwood-necklace",
    title: "Inlay sapwood necklace",
    year: "2025",
    summary: "Necklace. Walnut sapwood, sterling silver, fine silver wire.",
    text: [
      "The wood used to make this piece was recovered from a felled walnut tree in a demolition site in South London.",
      "In this necklace, malleable fine silver wire dances playfully with the organic patterns generated by the felled tree, where sapwood meets hardwood or bark.",
      "This is one of three necklaces I made by experimenting with all three boundaries of walnut wood: hardwood (core), sapwood and bark.",
    ],
    pieces: [
      {
        title: "Inlay sapwood necklace (2025)",
        lines: ["Necklace", "Walnut sapwood, sterling silver, fine silver wire, leather cord"],
      },
      {
        title: "Silver inlay prototypes (2025)",
        lines: ["Brooch samples", "Walnut sapwood, fine silver wire"],
      },
    ],
    photos: [
      { name: "01", alt: "A man wearing a necklace of walnut blocks inlaid with silver wire", caption: "Inlay sapwood necklace (2025)" },
      { name: "02", alt: "Three walnut samples with wavy silver wire inlay", caption: "Silver inlay prototypes (2025)" },
    ],
  },
  {
    slug: "bark-necklace",
    title: "Bark necklace",
    year: "2025",
    summary: "Necklace. Walnut bark, sterling silver, leather cord.",
    text: [],
    pieces: [
      {
        title: "Bark necklace (2025)",
        lines: ["Necklace", "Walnut bark, sterling silver, leather cord, epoxy"],
      },
    ],
    photos: [
      { name: "01", alt: "A woman wearing a long necklace of walnut bark pieces" },
      { name: "02", alt: "Walnut bark necklace laid flat" },
    ],
  },
  {
    slug: "seoul-french-embassy-ring",
    title: "Seoul French Embassy Ring",
    year: "2025",
    summary: "Ring. Sterling silver.",
    text: [
      "Made during my first stay in Korea, this ring is inspired by the French Embassy building in Seoul — a 1962 concrete structure by Korean architect Kim Chung-up (김중업), apprenticed under Le Corbusier. Its roof curves like the eaves of a traditional Korean roof, creating a silhouette cast in raw concrete, floating on columns (pilotis).",
      "Korea moves fast, and looks forward — 20th century buildings like this one have largely been demolished and replaced. This one was spared, undergoing a sensitive restoration in 2023 by Cho Min-suk (조민석) of Mass Studies and Yoon Tae-hoon of Sathy.",
      "The ring mirrors the building's most recognizable feature via a curved silver sheet held up by four floating columns. Today, the building is celebrated as part of Seoul's modern built heritage.",
    ],
    pieces: [
      {
        title: "Seoul French Embassy Ring (2025)",
        lines: ["Ring", "Sterling silver", "35mm x 23mm x 20mm"],
      },
    ],
    photos: [
      { name: "01", alt: "A hand holding a silver ring with a curved roof on four columns" },
      { name: "02", alt: "Fingers holding the Seoul French Embassy Ring, its curved silver roof on four columns" },
      { name: "ref-embassy", alt: "Black and white photo of the French Embassy in Seoul", caption: "The French Embassy in Seoul by Kim Chung-up (김중업), made of reinforced cast concrete. Photo: SPACE, 1966" },
      { name: "ref-palace", alt: "Geunjeongjeon hall at Gyeongbokgung Palace", caption: "The roof of Geunjeongjeon (근정전), the main hall of Gyeongbokgung Palace (경복궁), Seoul. Photo: Ongchangwei / Dreamstime.com" },
    ],
  },
  {
    slug: "preston-ring",
    title: "Preston Ring",
    year: "2023",
    summary: "Ring. Sterling silver.",
    text: [
      "This ring is inspired by Preston Bus Station — a 1969 Brutalist landmark designed by Keith Ingham and Charles Wilson, with its distinctive sweeping concrete balconies once making it one of the largest bus stations in Europe.",
      "Threatened with demolition in 2012, it was saved by public campaigning and a growing appreciation for Brutalist architecture, earning Grade II listed status in 2013 and reopening after restoration in 2018.",
    ],
    pieces: [
      {
        title: "Preston Ring (2023)",
        lines: ["Ring", "Sterling silver", "20mm x 20mm x 9mm"],
      },
    ],
    photos: [
      { name: "01", alt: "Silver ring with stacked curved ridges" },
      { name: "02", alt: "Silver ring with stacked curved ridges, another angle" },
    ],
  },
  {
    slug: "croydon-ring",
    title: "Croydon Ring",
    year: "2023",
    summary: "3D printed ring, MINILITH launch collection. Sterling silver.",
    text: [],
    pieces: [
      {
        title: "Croydon Ring (2023)",
        lines: ["3D printed ring", "Sterling silver", "Made as part of the MINILITH launch collection"],
      },
    ],
    photos: [
      { name: "01", alt: "A raised hand wearing the Croydon Ring in front of a tower block" },
      { name: "02", alt: "Six Croydon Rings in a row on black" },
      { name: "ref-croydon", alt: "No.1 Croydon tower, black and white", caption: "No.1 Croydon. Photo: Will Collin" },
    ],
  },
  {
    slug: "stet-fortuna-domus",
    title: "Stet fortuna domus",
    year: "2025",
    summary: "Art medal for the British Art Medal Society. Bronze.",
    text: [
      "The crux of Britain's housing crisis lies in the transformation of the home from a basic necessity into a financial asset. House prices—now far beyond reach of the average Briton—have grown into a ticking time bomb upon which the entire British economy relies. For renters, the cost of renting a home has risen faster than anytime in recorded history, and even those lucky enough to pay a mortgage instead now face unaffordable monthly payments through higher interest rates.",
      "<em>This bronze medal illustrates the current state of British housing: a luxury good that for many Britons represents the most significant barrier to financial stability and opportunity.</em>",
      "Acquired for the permanent collection of the British Museum, the Royal Mint, the Goldsmiths' Company and the American Numismatic Society in New York, as well as other private collections around the world.",
      "Awarded Bronze Award in the Smallworkers category, Goldsmiths' Craft & Design Awards 2026. The original design was awarded Gold Award in the Design category, Goldsmiths' Craft & Design Awards 2024.",
    ],
    pieces: [
      {
        title: "Stet fortuna domus (2025)",
        lines: [
          "Art medal",
          "Bronze and patina",
          "90mm",
          "Cast by South London Foundry",
          "Commission by the British Art Medal Society",
        ],
      },
    ],
    photos: [
      { name: "01", alt: "Bronze medal, front: a vault door", caption: "Photo: British Art Medal Society" },
      { name: "02", alt: "Bronze medal, back: a cracked keyhole", caption: "Photo: British Art Medal Society" },
    ],
  },  {
    slug: "wearing-the-city",
    title: "Wearing the City",
    year: "2026",
    summary: "Brooches. Nickel silver, brass, copper, road marking thermoplastic, glass beads.",
    text: [
      "These brooches are made, among other materials, with thermoplastic road paint: the same paint used to mark streets all over the world. The arrows, lines and colours we walk over every day, worn on the body instead.",
    ],
    pieces: [
      {
        title: "Wearing the City (2026)",
        lines: ["Brooches", "Nickel silver, brass, copper, road marking thermoplastic, glass beads"],
      },
    ],
    photos: [
      { name: "collage", alt: "Three brooches worn under a Seoul overpass: a black and yellow disc, a red and white block, and an open ring with pins", show: ["row"] },
      { name: "street-1", alt: "A black and yellow disc brooch worn on a red shirt under a Seoul overpass", show: ["home", "page"] },
      { name: "street-2", alt: "A red and white brooch worn on a grey shirt", show: ["home", "page"] },
      { name: "street-3", alt: "An open ring brooch with pins and yellow road paint, worn on a red shirt", show: ["home", "page"] },
      { name: "01", alt: "Three brooches on a cutting mat: a blue arrow, a yellow and orange swirl, and an orange ring" },
      { name: "03", alt: "The back of the orange ring brooch, showing its pin" },
      { name: "04", alt: "A Seoul street with yellow and white road markings" },
    ],
  },
];

// Projects group works on the /work/ page, in this order.
// `text` is the project description; leave it empty to use the work's own
// text when a project has a single work.
export interface Project {
  slug: string;
  title: string;
  text: string[]; // paragraphs; may use <em> for italics
  works: string[]; // work slugs
}

export const projects: Project[] = [
  {
    slug: "wearing-the-city",
    title: "Wearing the City",
    text: [],
    works: ["wearing-the-city"],
  },
  {
    slug: "walnut",
    title: "Walnut",
    text: [
      "The wood used to make these pieces was recovered from a felled walnut tree in a demolition site in South London.",
      "I made three necklaces by experimenting with all three boundaries of walnut wood: hardwood (core), sapwood and bark.",
    ],
    works: ["ready-made-clasp", "inlay-sapwood-necklace", "bark-necklace"],
  },
  { slug: "cocktail-rings", title: "Cocktail rings", text: [], works: ["untitled-rings"] },
  { slug: "loom-rings", title: "Loom Rings", text: [], works: ["loom-rings"] },
  { slug: "engagement-rings", title: "Engagement rings", text: [], works: ["engagement-rings"] },
  { slug: "silver-and-pearl", title: "Silver and pearl", text: [], works: ["silver-and-pearl"] },
  {
    slug: "architecture-rings",
    title: "Architecture rings",
    text: [],
    works: ["seoul-french-embassy-ring", "preston-ring", "croydon-ring"],
  },
  { slug: "stet-fortuna-domus", title: "Stet fortuna domus", text: [], works: ["stet-fortuna-domus"] },
];

export function workBySlug(slug: string): Work {
  const work = works.find((w) => w.slug === slug);
  if (!work) throw new Error(`Unknown work: ${slug}`);
  return work;
}

export function projectFor(workSlug: string): Project | undefined {
  return projects.find((p) => p.works.includes(workSlug));
}

// Studio / process photos: not part of a work, shown on the home page only
// if you keep them in the picker. They don't link anywhere.
export const studioPhotos: Photo[] = [
  { name: "01", alt: "Engagement rings on a hand" },
  { name: "02", alt: "Threading red cotton on a loom ring" },
  { name: "03", alt: "Holding a plaster model of the medal" },
  { name: "04", alt: "A photo shoot in the studio" },
  { name: "05", alt: "Material samples laid out on paper" },
  { name: "06", alt: "A workbench with tools and silver sheet" },
  { name: "07", alt: "Trying on a ring prototype" },
  { name: "08", alt: "Camera set up over a jewellery shoot" },
  { name: "10", alt: "Prototypes and moulds on the bench" },
  { name: "11", alt: "Tools, wood and silver laid out from above" },
];

export interface GalleryPhoto {
  id: string; // "<slug>/<name>", used in src/data/home.json
  alt: string;
  label: string; // work title, shown in the picker and on hover
  href?: string;
  image: ImageMetadata;
}

// Every photo on the site, in the order of the works list.
export const allPhotos: GalleryPhoto[] = [
  ...works.flatMap((w) =>
    w.photos.filter((p) => !p.show || p.show.includes("home")).map((p) => ({
      id: `${w.slug}/${p.name}`,
      alt: p.alt,
      label: `${w.title} (${w.year})`,
      href: `/work/${w.slug}/`,
      image: photo(w.slug, p.name),
    })),
  ),
  ...studioPhotos.map((p) => ({
    id: `studio/${p.name}`,
    alt: p.alt,
    label: "Studio",
    image: photo("studio", p.name),
  })),
];
