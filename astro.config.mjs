import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://razzleberrytt.github.io/hippie/', // your GitHub Pages site
  base: '/hippie/',                                // subpath for repo
  output: 'static',                                // needed for GitHub Pages
  adapter: staticAdapter(),
  integrations: [tailwind()],
});
