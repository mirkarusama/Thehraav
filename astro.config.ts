import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site';

// The live address comes from src/config/site.ts.
// You can also override it on Railway with a SITE_URL variable, which is handy when you switch to a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || site.url,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
