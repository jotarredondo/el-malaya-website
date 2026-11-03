import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://elmalaya.cl',

    output: 'static',
    outDir: './dist',

    build: {
        format: 'directory',
    },

    integrations: [sitemap()],
});
