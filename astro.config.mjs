import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://razzleberrytt.github.io/hippie/',
  base: '/hippie/',
  output: 'static',
  adapter: staticAdapter(),
  integrations: [tailwind()],
});
