import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.verdeencasa.es',
  integrations: [sitemap()],
  output: 'static',
});
