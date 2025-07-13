import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://razzleberrytt.github.io/hippie',
  base: '/hippie/',
});
