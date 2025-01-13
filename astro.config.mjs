// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';

import icon from 'astro-icon';

import vue from '@astrojs/vue';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.flemingtechnologies.cl',
  integrations: [
    tailwindcss(),
    icon({
      include: {
        mdi: ['*'],
      },
    }),
    vue(),
    sitemap(),
  ],
});
