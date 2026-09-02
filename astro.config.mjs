// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://realtotpgenerator.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          pt: 'pt',
          ko: 'ko',
          it: 'it',
          'zh-cn': 'zh-cn',
          'zh-tw': 'zh-tw',
          ar: 'ar',
          nl: 'nl',
          tr: 'tr',
          pl: 'pl',
          ru: 'ru',
          id: 'id',
          vi: 'vi',
          th: 'th',
          hi: 'hi',
          sv: 'sv',
          da: 'da',
          no: 'no',
          cs: 'cs',
          uk: 'uk',
          ro: 'ro',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url.endsWith('/en/')) {
          item.priority = 1.0;
        }
        return item;
      },
    }),
  ],
});
