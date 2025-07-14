import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import adapter from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://razzleberrytt.github.io/your-repo-name/',
  base: '/hippie/',
  output: 'static',
  adapter: adapter(),
  integrations: [tailwind()],
});
