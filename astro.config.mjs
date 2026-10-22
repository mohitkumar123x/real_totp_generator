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
      filter: (page) => {
        // Exclude root redirect
        if (page === 'https://realtotpgenerator.com/' || page === 'https://realtotpgenerator.com') {
          return false;
        }
        // Exclude error pages
        if (page.includes('/404') || page.includes('/500')) {
          return false;
        }
        // Exclude low-value utility and legal boilerplate pages
        const lowValuePaths = ['/about', '/contact', '/disclaimer', '/privacy', '/terms'];
        if (lowValuePaths.some((path) => page.includes(path))) {
          return false;
        }
        return true;
      },
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
        if (item.url === 'https://realtotpgenerator.com/en/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/en/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.endsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
