import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  })],
  site: 'https://yourusername.github.io/hippie',
  base: '/hippie/',
});
