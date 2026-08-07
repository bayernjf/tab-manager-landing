# Handoff — tab-manager-landing

更新时间：2026-08-08

## 项目概况
Tab Garden（浏览器标签页管理扩展）落地页。Astro 7 静态站点，中英双语。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。
hub 站（bayjf）中 Tab Garden 卡片已指向 https://tab-manager-landing.pages.dev/ 及其 preview.png。

## 已完成（本地未推送，分支 dev）
- `87ce9e4` feat(pages): add custom 404 page
- `f8d9b48` feat(seo): add preview image for portfolio hub

## 注意点
- ⚠️ 本项目尚未部署！tab-manager-landing.pages.dev 目前不可访问。
- ⚠️ 域名不一致：astro.config / 布局里 baseUrl 写的是 https://tabgarden.pages.dev，但用户确认正式域名为 tab-manager-landing.pages.dev。部署前需统一改过来（canonical、og:url、sitemap、robots.txt 均受影响）。
- public/ 下有 og-image.jpg、og-image.svg、preview.png 三份图，最终应统一引用（社交平台需 PNG/JPG）。

## 下一步
1. 把仓库内所有 tabgarden.pages.dev 引用改为 tab-manager-landing.pages.dev。
2. 部署到 Cloudflare Pages（项目名 tab-manager-landing）。
3. 部署后验证 hub 站 Tab Garden 卡片图片与链接、og:image、404。
4. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
