import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static',
  site: 'https://razzleberrytt.github.io',
  integrations: [react(), tailwind(), github()],
  vite: {
    build: {
      target: 'esnext'
    }
  }
});
