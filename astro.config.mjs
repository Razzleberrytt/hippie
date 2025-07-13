import { defineConfig } from 'astro/config';
import github from '@astrojs/github';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://razzleberrytt.github.io/hippie/', // Ensure this is your GitHub Pages site path
  base: '/hippie/', // Required for subpath deployment
  output: 'static',
  adapter: github(),
  integrations: [tailwind()],
});
