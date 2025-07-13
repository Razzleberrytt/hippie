import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import githubPages from 'astro-github-pages';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://razzleberrytt.github.io',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    githubPages()
  ],
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
