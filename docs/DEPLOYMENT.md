# 部署 — tab-manager-landing（Tab Garden）

更新时间：2026-09-09

## 站点信息
- Pages 域名：`https://tabgarden.pages.dev`（Pages 项目名 `tabgarden`）
- 技术栈：Astro 7 + Tailwind CSS 4 + React 19 + `@astrojs/sitemap`
- Node：`>=22.12.0`；包管理器 npm
- 特性：中英双语（按 URL 自动识别）、完整 SEO（hreflang + JSON-LD）、GEO（`llms.txt` / `robots.txt`）、
  暗色模式、**无追踪、无分析、无 Cookie**

## 构建
```bash
npm install
npm run dev       # localhost:4321
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## Cloudflare Pages（Git 集成，自动构建）
1. Cloudflare Pages → Create a project → Connect to Git → 选本仓库。
2. 构建配置：

| 配置项 | 值 |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22`（必要时设 `NODE_VERSION=22`） |
| Environment variables | 无（不需要任何环境变量） |

3. 项目名设为 `tabgarden` 以获得 `tabgarden.pages.dev` 域名。
4. 保存部署，之后每次 push 自动构建。

## 发布后验证
1. 中英双语首页按 URL 正确切换。
2. `sitemap.xml`、`robots.txt`、`llms.txt` 可访问。
3. JSON-LD（WebSite / WebPage / SoftwareApplication / FAQPage）校验通过。
4. 确认页面**没有**注入任何分析脚本或 Cookie。

## 改域名时的同步点
- `astro.config.mjs` 的 `site`
- `public/robots.txt` 的 Sitemap 行
- JSON-LD 里的站点 URL
