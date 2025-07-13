import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://razzleberrytt.github.io/hippie/',
  base: '/hippie/',
  output: 'static',
  integrations: [tailwind()],
});
