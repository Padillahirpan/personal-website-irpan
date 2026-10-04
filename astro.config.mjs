// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// [CONTOH] Ganti URL di bawah dengan domain asli (atau set env PUBLIC_SITE_URL saat build).
const site = process.env.PUBLIC_SITE_URL ?? 'https://irpan.example.com';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      // Dual theme: light/dark di-switch lewat CSS variables (lihat global.css)
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
