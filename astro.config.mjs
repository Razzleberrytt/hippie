import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [sitemap()],
  site: 'https://razzleberrytt.github.io/hippie/',
  base: '/hippie/'
});
