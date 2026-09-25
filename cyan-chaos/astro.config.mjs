// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Sincronizar con src/data/site.ts → siteUrl
const siteUrl = 'https://camarasyalarmassanjose.lat';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});