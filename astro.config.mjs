// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yurii-s4.github.io',
  base: '/',
  build: {
    // Emit clean URLs like /about instead of /about.html
    format: 'directory',
  },
});
