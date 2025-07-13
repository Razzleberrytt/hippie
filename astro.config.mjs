import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import github from '@astrojs/github';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://razzleberrytt.github.io/',
  base: '/',
  integrations: [
    react(),
    tailwind(),
    github()
  ],
});
