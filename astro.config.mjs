// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { basename, extname } from 'node:path';

// Local-only photo picker at /curate (see src/curate/curate.astro).
// Only exists while running `astro dev`; it is never part of the built site.
/** @returns {import('astro').AstroIntegration} */
function curate() {
  return {
    name: 'curate',
    hooks: {
      'astro:config:setup': ({ command, injectRoute, updateConfig }) => {
        if (command !== 'dev') return;
        injectRoute({ pattern: '/curate', entrypoint: './src/curate/curate.astro' });
        updateConfig({
          vite: {
            plugins: [{
              name: 'curate-save',
              configureServer(server) {
                server.middlewares.use('/__curate/save', (req, res) => {
                  if (req.method !== 'POST') { res.statusCode = 405; return res.end('POST only'); }
                  let body = '';
                  req.on('data', (chunk) => { body += chunk; });
                  req.on('end', async () => {
                    try {
                      const { order, hidden } = JSON.parse(body);
                      const ok = (a) => Array.isArray(a) && a.every((s) => typeof s === 'string');
                      if (!ok(order) || !ok(hidden)) throw new Error('order and hidden must be string lists');
                      const file = new URL('./src/data/home.json', import.meta.url);
                      await writeFile(file, JSON.stringify({ order, hidden }, null, 2) + '\n');
                      res.end('ok');
                    } catch (err) {
                      res.statusCode = 400;
                      res.end(String(err instanceof Error ? err.message : err));
                    }
                  });
                });
              },
            }],
          },
        });
      },
    },
  };
}

// Local-only Instagram grid planner at /instagram (see src/curate/instagram.astro).
// Plan and existing-post images live in ./instagram/ (git-ignored, never published).
/** @returns {import('astro').AstroIntegration} */
function instagramPlanner() {
  const dir = new URL('./instagram/', import.meta.url);
  const existingDir = new URL('./instagram/existing/', import.meta.url);
  const types = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
  /** @param {any} req */
  const readBody = (req, limit) => new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on('data', (c) => { size += c.length; if (size > limit) { reject(new Error('File too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
  return {
    name: 'instagram-planner',
    hooks: {
      'astro:config:setup': ({ command, injectRoute, updateConfig }) => {
        if (command !== 'dev') return;
        injectRoute({ pattern: '/instagram', entrypoint: './src/curate/instagram.astro' });
        updateConfig({
          vite: {
            plugins: [{
              name: 'instagram-planner',
              configureServer(server) {
                // Save the plan: { queue: [photo ids in posting order], existing: [file names, newest first] }
                server.middlewares.use('/__instagram/save', async (req, res) => {
                  try {
                    if (req.method !== 'POST') throw new Error('POST only');
                    const { queue, existing } = JSON.parse(String(await readBody(req, 1e6)));
                    const ok = (a) => Array.isArray(a) && a.every((s) => typeof s === 'string');
                    if (!ok(queue) || !ok(existing)) throw new Error('queue and existing must be string lists');
                    await mkdir(dir, { recursive: true });
                    await writeFile(new URL('plan.json', dir), JSON.stringify({ queue, existing }, null, 2) + '\n');
                    res.end('ok');
                  } catch (err) { res.statusCode = 400; res.end(String(err instanceof Error ? err.message : err)); }
                });
                // Upload one existing post image (raw body, name in the x-filename header)
                server.middlewares.use('/__instagram/upload', async (req, res) => {
                  try {
                    if (req.method !== 'POST') throw new Error('POST only');
                    const original = basename(decodeURIComponent(String(req.headers['x-filename'] || 'image.jpg')));
                    const ext = extname(original).toLowerCase();
                    if (!types[ext]) throw new Error('Use JPG, PNG or WebP images');
                    const name = `${Date.now()}-${original.replace(/[^\w.-]+/g, '_')}`;
                    await mkdir(existingDir, { recursive: true });
                    await writeFile(new URL(name, existingDir), await readBody(req, 40e6));
                    res.end(name);
                  } catch (err) { res.statusCode = 400; res.end(String(err instanceof Error ? err.message : err)); }
                });
                // Serve existing post images to the planner
                server.middlewares.use('/__instagram/existing/', async (req, res) => {
                  const name = basename(decodeURIComponent((req.url || '').split('?')[0]));
                  const type = types[extname(name).toLowerCase()];
                  try {
                    if (!type) throw new Error();
                    const data = await readFile(new URL(name, existingDir));
                    res.setHeader('content-type', type); res.end(data);
                  } catch { res.statusCode = 404; res.end('Not found'); }
                });
              },
            }],
          },
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://castrovaron.com',
  integrations: [mdx(), sitemap(), curate(), instagramPlanner()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["es", "en", "fr", "kr", "hu"],
    defaultLocale: "en",
  }

});
