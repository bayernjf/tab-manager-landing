// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cloudflare Pages 默认域名（部署后在 CF 控制台绑定自定义域名时同步修改）
const SITE = 'https://tab-manager.bayjf.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', en: 'en-US' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
