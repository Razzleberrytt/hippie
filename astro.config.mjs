import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// Update this to your actual GitHub username
const username = 'razzleberrytt';

export default defineConfig({
  site: `https://${username}.github.io`,
  base: '/hippie/',
  output: 'static',
  integrations: [tailwind(), image()],
});
