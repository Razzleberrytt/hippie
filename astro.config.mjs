import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import postcss from './postcss.config.cjs'; // 👈 optional if needed manually

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://Razzleberrytt.github.io/hippie',
  base: '/hippie/',
});
