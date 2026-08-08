// Tab Garden i18n dictionary — flat key structure for zh (default) and en.
// String copy lives here as flat dotted keys; structured arrays (FAQ, changelog,
// demo data) are exported separately and indexed by language.

export type Lang = "zh" | "en";

// ---------------------------------------------------------------------------
// Flat string dictionaries
// ---------------------------------------------------------------------------

type Dict = Record<string, string>;

const zh: Dict = {
  // ---- Navbar ----
  "nav.features": "功能",
  "nav.why": "为什么不同",
  "nav.how": "工作原理",
  "nav.privacy": "隐私",
  "nav.faq": "FAQ",
  "nav.joinBeta": "加入内测",
  "nav.toggleMenu": "切换菜单",
  "nav.homeAria": "Tab Garden 首页",
  "nav.langZh": "中文",
  "nav.langEn": "EN",

  // ---- Hero ----
  "hero.betaBadge": "内测招募中",
  "hero.titleLine1": "不动浏览器标签，",
  "hero.titleLine2": "把混乱变成秩序",
  "hero.subtitle":
    "Tab Garden 用一张全屏看板把所有窗口的标签聚合、分组、稍后处理、跨设备保存——而你的浏览器标签栏始终保持原样。",
  "hero.noTabGroups": "不调用 tabGroups 权限",
  "hero.localFirst": "本地优先，不追踪",
  "hero.multiWindow": "多窗口聚合",
  "hero.joinBeta": "加入内测",
  "hero.learnFeatures": "了解功能",
  "hero.supports": "支持 Chrome · Edge · Manifest V3",

  // ---- Features ----
  "features.eyebrow": "核心功能",
  "features.title": "不是又一个标签管理器，是一套完整工作流",
  "features.subtitle":
    "从聚合、分组、稍后处理到跨设备保存，Tab Garden 把“找回那个标签”从 5 分钟压到 3 秒。",
  "features.f1.title": "虚拟分组看板",
  "features.f1.desc":
    "按域名自动聚合，或用 9 种颜色自定义分组——所有分组只存在于看板中，绝不调用 tabGroups 权限，浏览器标签栏始终原样。",
  "features.f1.tag1": "自动聚合",
  "features.f1.tag2": "9 色",
  "features.f1.tag3": "不碰浏览器",
  "features.f2.title": "全屏看板 · 多窗口聚合",
  "features.f2.desc":
    "跳出 390px 的弹窗拥挤。一张全屏看板聚合所有正常窗口的标签，按窗口来源标记，可按窗口过滤，搜索标题/URL/域名实时过滤。",
  "features.f2.tag1": "多窗口",
  "features.f2.tag2": "实时搜索",
  "features.f2.tag3": "窗口过滤",
  "features.f3.title": "拖拽与瀑布流布局",
  "features.f3.desc":
    "HTML5 拖拽：标签在分组间拖动、整组重新排序。自动补位的瀑布流网格，也可切换手动布局——桌面/平板/手机位置独立保存、互不覆盖。",
  "features.f3.tag1": "拖拽",
  "features.f3.tag2": "瀑布流",
  "features.f3.tag3": "按设备记忆",
  "features.f4.title": "稍后处理（标签 Snooze）",
  "features.f4.desc":
    "把「等会再看」的标签收起并关闭，自定义提醒时间（默认 09:00 / 14:00 / 18:00，最多 5 个）。到点看板高亮提醒，一键重新打开。",
  "features.f4.tag1": "关闭即归档",
  "features.f4.tag2": "定时提醒",
  "features.f5.title": "工作区 · 跨设备保存",
  "features.f5.desc":
    "手动挑选标签命名成工作区，只保存标题与 URL，同步到你自己的 Supabase。换电脑登录即可恢复或编辑，扩展绝不自动上传当前标签页。",
  "features.f5.tag1": "手动策展",
  "features.f5.tag2": "只同步标题+URL",
  "features.f6.title": "重复标签清理",
  "features.f6.desc":
    "一键扫描所有窗口，按精确 URL 聚合重复项，预览「保留/关闭」清单后确认清理。预览后状态变化的标签会自动跳过，避免误关。",
  "features.f6.tag1": "全窗口扫描",
  "features.f6.tag2": "预览确认",

  // ---- PainPoint ----
  "pain.eyebrow": "痛点",
  "pain.title": "找那个标签，不该花 5 分钟",
  "pain.subtitle":
    "我们都经历过：明知某个标签开着，却在 50 个拥挤的标题里翻来翻去。Tab Garden 的全屏看板让定位缩短到 3 秒。",
  "pain.step1.title": "打开看板",
  "pain.step1.body": "全屏看板聚合所有窗口标签，自动按域名归组",
  "pain.step2.title": "定位分组",
  "pain.step2.body": "按窗口过滤或搜索标题/URL/域名，3 秒锁定",
  "pain.step3.title": "点击直达",
  "pain.step3.body": "点击卡片即跳转到对应窗口并激活该标签",
  "pain.before": "以前",
  "pain.beforeTime": "~5 分钟",
  "pain.beforeHint": "在 50+ 标签里线性扫描、反复切换",
  "pain.withTabGarden": "用 Tab Garden",
  "pain.afterTime": "~3 秒",
  "pain.afterHint": "打开看板 → 进入对应分组 → 找到标签",
  "pain.stat1": "桌面瀑布流通道",
  "pain.stat2": "分组颜色",
  "pain.stat3": "看板刷新节流",

  // ---- WhyGarden ----
  "why.eyebrow": "为什么不同",
  "why.title": "别让标签管理器，反过来绑架你的浏览器",
  "why.subtitle":
    "很多扩展改完就改完了，关掉一片狼藉。Tab Garden 把所有秩序留在看板里，浏览器始终干净。",
  "why.usp1.title": "唯一不动浏览器标签的分组方案",
  "why.usp1.body":
    "其他标签管理器用 chrome.tabs.group 改写你的标签栏，关掉就留下一堆彩色色块。Tab Garden 的分组是纯虚拟的，只活在看板里，关闭扩展浏览器立刻恢复原样。",
  "why.usp2.title": "无框架、无打包器、无 SDK",
  "why.usp2.body":
    "纯 TypeScript 由 tsc 编译，package.json 只有 2 个开发依赖。加载快、体积小、可审计。没有 React/Vue 运行时，也没有 Supabase SDK 进你的浏览器。",
  "why.usp3.title": "RLS 行级权限，数据归你",
  "why.usp3.body":
    "同步走你自己的 Supabase，每张表都用 auth.uid() = user_id 做行级隔离。service_role 密钥永不进入扩展，只有 anon/publishable key 在构建里。",
  "why.usp4.title": "全量导入导出，无锁定",
  "why.usp4.body":
    "设置、域名规则、忽略网站一键导出 JSON。导入前预览规则/网站数量并明确确认才会覆盖。你的工作流不绑定任何账号体系。",
  "why.canDo": "Tab Garden 能做到的",
  "why.cmp1": "虚拟分组（不改浏览器标签栏）",
  "why.cmp2": "全屏看板（非 390px 弹窗）",
  "why.cmp3": "多窗口聚合 + 窗口过滤",
  "why.cmp4": "内置标签 Snooze / 稍后处理",
  "why.cmp5": "重复标签预览清理",
  "why.cmp6": "按设备类型独立记忆布局",
  "why.cmp7": "本地优先 + 可自托管 Supabase",

  // ---- HowItWorks ----
  "how.eyebrow": "工作原理",
  "how.title": "四步把标签花园种起来",
  "how.step1.title": "装上扩展，打开看板",
  "how.step1.body":
    "安装后点击工具栏图标，从弹窗一键打开全屏看板。可选开启「新标签页替换」，让每次新建标签直达看板——也可随时关闭，立即恢复浏览器原生新标签页。",
  "how.step2.title": "自动聚合或自定义分组",
  "how.step2.body":
    "看板默认按域名自动聚合（可设 2/3/4 个标签阈值）；也可在弹窗勾选标签、命名分组、选 9 种颜色创建自定义组。还能用域名规则精确匹配，把多域名归为一组。",
  "how.step3.title": "稍后处理与重复清理",
  "how.step3.body":
    "暂不看的标签点稍后按钮、选提醒时间即关闭归档；想清理冗余时一键扫描重复 URL，预览确认后批量关闭。",
  "how.step4.title": "登录后跨设备同步",
  "how.step4.body":
    "连接你自己的 Supabase 账户，设置、域名规则、忽略网站、看板布局、工作区全部同步。换设备登录即恢复你的全部秩序。",

  // ---- Privacy (component) ----
  "privacyComp.eyebrow": "隐私与数据",
  "privacyComp.title": "你的数据，归你所有",
  "privacyComp.subtitle":
    "Tab Garden 不在服务器上囤积你的浏览记录。本地优先存储 + 可自托管 Supabase 同步，权限只申请「tabs」「storage」与可选的 Supabase 主机权限。",
  "privacyComp.permissionsTitle": "扩展申请的全部权限",
  "privacyComp.permissionsNote": "不申请 tabGroups、history、bookmarks、cookies 等任何敏感权限。",
  "privacyComp.perm1": "tabs",
  "privacyComp.perm2": "storage",
  "privacyComp.perm3": "host: *.supabase.co (可选)",
  "privacyComp.point1.title": "本地优先",
  "privacyComp.point1.body":
    "所有分组、布局、稍后处理项、自定义组默认只存在 chrome.storage.local，不经过任何服务器。",
  "privacyComp.point2.title": "不自动上传标签",
  "privacyComp.point2.body":
    "扩展绝不自动或实时上传你当前打开的标签页。工作区同步的是你手动挑选并命名的标题+URL 集合，运行时 ID 全部剥离。",
  "privacyComp.point3.title": "RLS 行级隔离",
  "privacyComp.point3.body":
    "同步走你自己的 Supabase，每张表用 auth.uid() = user_id 隔离。service_role 密钥永不进入扩展，只有 anon key 在构建里。",
  "privacyComp.point4.title": "全量导出，零锁定",
  "privacyComp.point4.body":
    "设置、域名规则、忽略网站一键导出 JSON，导入前预览数量并明确确认才覆盖。不绑定任何账号体系。",

  // ---- CTA ----
  "cta.betaBadge": "内测招募中",
  "cta.title": "准备好整理你的标签花园了吗？",
  "cta.subtitle":
    "加入内测，第一时间体验新功能，并直接反馈给我们。你的浏览器标签栏不会被改动——这是 Tab Garden 的承诺。",
  "cta.joinBeta": "加入内测",
  "cta.orInstall": "或者直接在商店安装：",
  "cta.chrome": "Chrome 扩展",
  "cta.edge": "Edge 扩展",
  "cta.received": "已收到，感谢支持 ✓",

  // ---- FAQ (component) ----
  "faqComp.eyebrow": "常见问题",
  "faqComp.title": "你可能想问的",
  "faqComp.viewAll": "查看全部 FAQ",

  // ---- Footer ----
  "footer.product": "产品",
  "footer.resources": "资源",
  "footer.changelog": "更新日志",
  "footer.privacy": "隐私政策",
  "footer.terms": "使用条款",
  "footer.joinBeta": "加入内测",
  "footer.tagline": "不动浏览器标签的虚拟看板。本地优先、可自托管同步的浏览器标签管理扩展。",
  "footer.supports": "支持 Chrome · Edge · Manifest V3",
  "footer.copyright": "© {year} Tab Garden. All rights reserved.",
  "footer.builtWith": "Built with Astro · No tracking",

  // ---- HeroTabsDemo ----
  "demo.group.dev": "开发",
  "demo.group.later": "稍后读",
  "demo.group.work": "工作",
  "demo.group.social": "社交",
  "demo.badge.window1": "窗口 1",
  "demo.badge.window2": "窗口 2",
  "demo.badge.reminder": "提醒 14:00",
  "demo.phase.before": "整理前",
  "demo.phase.after": "已整理",
  "demo.footer.left": "浏览器标签栏 · 未改动",
  "demo.footer.right": "看板视图",

  // ---- Layout defaults ----
  "layout.defaultTitle": "Tab Garden | 不动浏览器标签的虚拟看板，把混乱变成秩序",
  "layout.defaultDescription":
    "Tab Garden 是一款本地优先的浏览器标签管理扩展：虚拟分组看板、稍后处理、工作区跨设备同步、重复标签清理。Chrome 与 Edge 可用，不修改你的浏览器标签。",
  "layout.softwareAppDesc":
    "本地优先的浏览器标签管理扩展：虚拟分组看板、稍后处理、工作区跨设备同步、重复标签清理。不修改你的浏览器标签。",

  // ---- FAQ page ----
  "faqPage.title": "常见问题 | Tab Garden",
  "faqPage.description":
    "Tab Garden 的常见问题解答：虚拟分组、本地优先隐私、工作区跨设备同步、稍后处理等。",
  "faqPage.h1": "常见问题",
  "faqPage.subtitle": "关于虚拟分组、隐私、工作区与稍后处理的答疑。",
  "faqPage.moreTitle": "还有其他问题？",
  "faqPage.moreBody": "加入内测，直接在群里向我们提问。",
  "faqPage.backToHome": "返回首页加入内测",

  // ---- Changelog page ----
  "changelogPage.title": "更新日志 | Tab Garden",
  "changelogPage.description": "Tab Garden 的版本更新记录",
  "changelogPage.h1": "更新日志",

  // ---- Privacy page ----
  "privacyPage.title": "隐私政策 | Tab Garden",
  "privacyPage.description":
    "Tab Garden 隐私政策：本地优先存储、不追踪浏览记录、Supabase 自托管同步、数据范围与权限说明。",
  "privacyPage.h1": "隐私政策",
  "privacyPage.updated": "最后更新：2026-08-05",
  "privacyPage.intro":
    "Tab Garden 是一款本地优先的浏览器标签管理扩展。本政策说明我们如何（实际上几乎不）处理你的数据，以及你在使用 Supabase 同步时需要了解的事项。",
  "privacyPage.s1.title": "1. 本地优先，默认不离开浏览器",
  "privacyPage.s1.body":
    "Tab Garden 的全部核心功能——虚拟分组、看板布局、稍后处理项、自定义分组、域名规则——默认只保存在浏览器本地的 chrome.storage.local 中，不经过任何服务器。我们没有任何后端服务器接收或存储你的标签数据。",
  "privacyPage.s2.title": "2. 不追踪、不分析、不上传当前标签",
  "privacyPage.s2.body":
    "Tab Garden 不包含任何分析 SDK、追踪像素或第三方统计代码。扩展绝不会自动或实时上传你当前打开的标签页。你的浏览记录不会被收集、传输或出售。",
  "privacyPage.s3.title": "3. 跨设备同步（可选）",
  "privacyPage.s3.body":
    "如果你希望跨设备同步设置、域名规则、看板布局和工作区，需要自行注册并连接你自己的 Supabase 项目。同步密钥由你掌握，Tab Garden 不持有你的 Supabase 凭据。同步的数据范围仅限：稳定设置、域名规则、忽略网站列表、看板分组元数据、看板布局元数据，以及你手动保存的工作区快照（标签标题与 URL）。",
  "privacyPage.s4.title": "4. 数据范围与运行时 ID",
  "privacyPage.s4.body":
    "工作区快照仅保存标签的标题与 URL，绝不包含运行时 ID（tabId、windowId）。浏览器标签的运行时状态（tabId、windowId、虚拟看板归属键）只保存在本地，永不上传。扩展不会自动上传当前打开的标签页——只有你显式保存为工作区的内容才会同步。",
  "privacyPage.s5.title": "5. 扩展权限说明",
  "privacyPage.s5.body":
    "Tab Garden 仅申请以下权限：tabs（读取标签标题、URL 以在看板中展示）、storage（本地存储设置与看板数据）、可选的 Supabase 主机权限（仅在启用同步时使用）。扩展不申请 tabGroups、history、bookmarks、cookies、webRequest 等任何敏感权限。分组只存在于看板中，绝不调用 chrome.tabs.group。",
  "privacyPage.s6.title": "6. 数据导出与删除",
  "privacyPage.s6.body":
    "你可以在扩展选项页一键导出全部本地数据为 JSON 文件。删除扩展会清除所有本地数据。如使用 Supabase 同步，你可以在自己的 Supabase 控制台随时删除 user_settings 等表中的数据。",
  "privacyPage.s7.title": "7. Supabase RLS 行级安全",
  "privacyPage.s7.body":
    "同步表启用行级安全（RLS），策略基于 auth.uid() = user_id 限制数据所有权。只有你本人认证后才能读写自己的数据。service_role 密钥永不进入扩展或构建产物。",
  "privacyPage.s8.title": "8. 联系方式",
  "privacyPage.s8.body": "如有隐私相关问题，请通过扩展选项页的反馈入口联系我们。",

  // ---- Terms page ----
  "termsPage.title": "使用条款 | Tab Garden",
  "termsPage.description": "Tab Garden 浏览器扩展使用条款。",
  "termsPage.h1": "使用条款",
  "termsPage.updated": "最后更新：2026-08-05",
  "termsPage.intro":
    "欢迎使用 Tab Garden 浏览器扩展（以下简称“本扩展”）。使用本扩展即表示你同意以下条款。请仔细阅读。",
  "termsPage.s1.title": "1. 服务描述",
  "termsPage.s1.body":
    "Tab Garden 是一款浏览器标签管理扩展，提供虚拟分组看板、稍后处理、工作区跨设备同步与重复标签清理功能。本扩展支持 Chrome 与 Edge（Manifest V3）。",
  "termsPage.s2.title": "2. 免责声明",
  "termsPage.s2.body":
    "本扩展按“现状”提供，不提供任何明示或暗示的保证。作者不对因使用本扩展造成的任何数据丢失、业务中断或其他损害承担责任。本扩展不修改浏览器原生标签分组，但用户应自行做好数据备份。",
  "termsPage.s3.title": "3. 使用许可",
  "termsPage.s3.body":
    "本扩展基础功能免费。你被授予非独占、不可转让的许可，用于个人或商业环境中的标签管理。不得对本扩展进行逆向工程、二次分发或去除版权声明。",
  "termsPage.s4.title": "4. 用户数据与隐私",
  "termsPage.s4.body":
    "关于数据处理的详细说明请参阅隐私政策。本扩展不收集、不追踪、不出售你的浏览记录。跨设备同步由你自行连接的 Supabase 项目提供，数据所有权归你。",
  "termsPage.s5.title": "5. 第三方服务",
  "termsPage.s5.body":
    "本扩展的可选同步功能依赖 Supabase（supabase.co）。使用同步功能时，你的数据将按你自己的 Supabase 项目配置进行存储和传输，受 Supabase 服务条款约束。本扩展不内置任何 Supabase SDK，所有交互通过 REST API 完成。",
  "termsPage.s6.title": "6. 条款变更",
  "termsPage.s6.body":
    "作者保留随时修改本条款的权利。条款变更后继续使用本扩展即视为接受新条款。重大变更将通过扩展更新说明通知。",
  "termsPage.s7.title": "7. 联系方式",
  "termsPage.s7.body": "如有条款相关问题，请通过扩展选项页的反馈入口联系我们。",
};

const en: Dict = {
  // ---- Navbar ----
  "nav.features": "Features",
  "nav.why": "Why Different",
  "nav.how": "How It Works",
  "nav.privacy": "Privacy",
  "nav.faq": "FAQ",
  "nav.joinBeta": "Join Beta",
  "nav.toggleMenu": "Toggle menu",
  "nav.homeAria": "Tab Garden home",
  "nav.langZh": "中文",
  "nav.langEn": "EN",

  // ---- Hero ----
  "hero.betaBadge": "Beta recruiting now",
  "hero.titleLine1": "Tame your tabs without touching",
  "hero.titleLine2": "the browser tab bar",
  "hero.subtitle":
    "Tab Garden gathers every window's tabs into one full-screen board, group them, snooze them, sync workspaces across devices, while your browser tab bar stays exactly as it is.",
  "hero.noTabGroups": "No tabGroups permission",
  "hero.localFirst": "Local-first, no tracking",
  "hero.multiWindow": "Multi-window aggregation",
  "hero.joinBeta": "Join the beta",
  "hero.learnFeatures": "Explore features",
  "hero.supports": "Supports Chrome · Edge · Manifest V3",

  // ---- Features ----
  "features.eyebrow": "Core features",
  "features.title": "Not just another tab manager: a complete workflow",
  "features.subtitle":
    "From aggregation and grouping to snooze and cross-device sync, Tab Garden shrinks “find that tab” from 5 minutes to 3 seconds.",
  "features.f1.title": "Virtual grouping board",
  "features.f1.desc":
    "Auto-group by domain or create custom groups in 9 colors; every group lives only in the board, never calls chrome.tabs.group, and your browser tab bar stays untouched.",
  "features.f1.tag1": "Auto-group",
  "features.f1.tag2": "9 colors",
  "features.f1.tag3": "No browser change",
  "features.f2.title": "Full-screen board · multi-window",
  "features.f2.desc":
    "Escape the cramped 390px popup. One full-screen board aggregates tabs from all normal windows, marks them by source window, filters by window, and searches title/URL/domain in real time.",
  "features.f2.tag1": "Multi-window",
  "features.f2.tag2": "Live search",
  "features.f2.tag3": "Window filter",
  "features.f3.title": "Drag-and-drop masonry layout",
  "features.f3.desc":
    "HTML5 drag: move tabs between groups, reorder entire groups. Auto-flowing masonry grid with optional manual layout; desktop / tablet / phone positions are saved independently and never overwrite each other.",
  "features.f3.tag1": "Drag",
  "features.f3.tag2": "Masonry",
  "features.f3.tag3": "Per-device memory",
  "features.f4.title": "Snooze tabs (Deferred Tabs)",
  "features.f4.desc":
    "Tuck away “read later” tabs and close them with custom reminder times (default 09:00 / 14:00 / 18:00, up to 5). The board highlights them when due; one click reopens.",
  "features.f4.tag1": "Close to archive",
  "features.f4.tag2": "Timed reminder",
  "features.f5.title": "Workspaces · cross-device sync",
  "features.f5.desc":
    "Manually curate tabs into a named workspace storing only titles and URLs, synced to your own Supabase. Sign in on another device to restore or edit; the extension never auto-uploads current tabs.",
  "features.f5.tag1": "Manual curation",
  "features.f5.tag2": "Syncs title + URL only",
  "features.f6.title": "Duplicate tab cleanup",
  "features.f6.desc":
    "One-click scan across all windows, aggregate duplicates by exact URL, preview the keep/close list and confirm. Tabs whose state changed after preview are skipped to avoid accidental closing.",
  "features.f6.tag1": "All-window scan",
  "features.f6.tag2": "Preview confirm",

  // ---- PainPoint ----
  "pain.eyebrow": "Pain point",
  "pain.title": "Finding that tab shouldn't take 5 minutes",
  "pain.subtitle":
    "We've all been there: you know a tab is open, yet you're scrolling through 50 cramped titles. Tab Garden's full-screen board cuts it down to 3 seconds.",
  "pain.step1.title": "Open the board",
  "pain.step1.body": "Full-screen board aggregates tabs from all windows, auto-grouped by domain",
  "pain.step2.title": "Locate the group",
  "pain.step2.body": "Filter by window or search title/URL/domain: lock on in 3 seconds",
  "pain.step3.title": "Click to jump",
  "pain.step3.body": "Click a card to switch to the window and activate that tab",
  "pain.before": "Before",
  "pain.beforeTime": "~5 min",
  "pain.beforeHint": "Linear scanning through 50+ tabs, switching back and forth",
  "pain.withTabGarden": "With Tab Garden",
  "pain.afterTime": "~3 sec",
  "pain.afterHint": "Open board → enter group → find tab",
  "pain.stat1": "Desktop masonry lanes",
  "pain.stat2": "Group colors",
  "pain.stat3": "Board refresh throttle",

  // ---- WhyGarden ----
  "why.eyebrow": "Why different",
  "why.title": "Don't let a tab manager hijack your browser",
  "why.subtitle":
    "Many extensions leave a mess when removed. Tab Garden keeps all order in the board so your browser stays clean.",
  "why.usp1.title": "The only grouping that never touches browser tabs",
  "why.usp1.body":
    "Other tab managers call chrome.tabs.group and rewrite your tab bar, leaving colored blobs when removed. Tab Garden's groups are purely virtual: they live in the board, and removing the extension restores the browser instantly.",
  "why.usp2.title": "No framework, no bundler, no SDK",
  "why.usp2.body":
    "Plain TypeScript compiled by tsc, with only 2 dev dependencies in package.json. Fast to load, small in size, fully auditable. No React/Vue runtime, no Supabase SDK shipped into your browser.",
  "why.usp3.title": "RLS row-level security, your data",
  "why.usp3.body":
    "Sync runs through your own Supabase, every table isolated with auth.uid() = user_id. The service_role key never enters the extension; only the anon/publishable key is in the build.",
  "why.usp4.title": "Full import / export, zero lock-in",
  "why.usp4.body":
    "Export settings, domain rules, and ignored sites as JSON in one click. Preview counts before import and confirm explicitly to overwrite. Your workflow isn't tied to any account system.",
  "why.canDo": "What Tab Garden delivers",
  "why.cmp1": "Virtual grouping (no browser tab bar change)",
  "why.cmp2": "Full-screen board (not a 390px popup)",
  "why.cmp3": "Multi-window aggregation + window filter",
  "why.cmp4": "Built-in tab snooze / deferred tabs",
  "why.cmp5": "Duplicate tab preview cleanup",
  "why.cmp6": "Independent layout memory per device type",
  "why.cmp7": "Local-first + self-hostable Supabase",

  // ---- HowItWorks ----
  "how.eyebrow": "How it works",
  "how.title": "Grow your tab garden in four steps",
  "how.step1.title": "Install and open the board",
  "how.step1.body":
    "After install, click the toolbar icon to open the full-screen board from the popup. Optionally enable “new tab override” so every new tab opens the board; turn it off anytime to restore the native new tab page.",
  "how.step2.title": "Auto-group or customize",
  "how.step2.body":
    "The board auto-groups by domain by default (set a 2/3/4 tab threshold); or select tabs in the popup, name a group, pick from 9 colors. Use domain rules to match multiple domains into one group.",
  "how.step3.title": "Snooze and deduplicate",
  "how.step3.body":
    "Click snooze on tabs you'll read later, pick a reminder time and they close and archive. To clean up, scan duplicate URLs in one click and batch-close after preview.",
  "how.step4.title": "Sign in for cross-device sync",
  "how.step4.body":
    "Connect your own Supabase account to sync settings, domain rules, ignored sites, board layout, and workspaces. Sign in on another device to restore your full setup.",

  // ---- Privacy (component) ----
  "privacyComp.eyebrow": "Privacy & data",
  "privacyComp.title": "Your data belongs to you",
  "privacyComp.subtitle":
    "Tab Garden doesn't hoard your browsing history on a server. Local-first storage + self-hostable Supabase sync; the extension only requests “tabs”, “storage”, and an optional Supabase host permission.",
  "privacyComp.permissionsTitle": "All permissions requested by the extension",
  "privacyComp.permissionsNote": "Does not request tabGroups, history, bookmarks, cookies, or any sensitive permission.",
  "privacyComp.perm1": "tabs",
  "privacyComp.perm2": "storage",
  "privacyComp.perm3": "host: *.supabase.co (optional)",
  "privacyComp.point1.title": "Local-first",
  "privacyComp.point1.body":
    "All groups, layout, snoozed items, and custom groups live only in chrome.storage.local by default, never touching a server.",
  "privacyComp.point2.title": "No auto-upload of tabs",
  "privacyComp.point2.body":
    "The extension never auto-uploads or streams your currently open tabs. Workspaces sync only the titles + URLs you manually curate, with runtime IDs stripped.",
  "privacyComp.point3.title": "RLS row-level isolation",
  "privacyComp.point3.body":
    "Sync goes through your own Supabase, every table isolated with auth.uid() = user_id. The service_role key never enters the extension; only the anon key is in the build.",
  "privacyComp.point4.title": "Full export, zero lock-in",
  "privacyComp.point4.body":
    "Export settings, domain rules, and ignored sites as JSON in one click; preview counts before import and confirm to overwrite. No account system lock-in.",

  // ---- CTA ----
  "cta.betaBadge": "Beta recruiting now",
  "cta.title": "Ready to tend your tab garden?",
  "cta.subtitle":
    "Join the beta to experience new features first and send feedback directly. Your browser tab bar won't be touched: that's the Tab Garden promise.",
  "cta.joinBeta": "Join the beta",
  "cta.orInstall": "Or install directly from the store:",
  "cta.chrome": "Chrome extension",
  "cta.edge": "Edge extension",
  "cta.received": "Received, thank you ✓",

  // ---- FAQ (component) ----
  "faqComp.eyebrow": "FAQ",
  "faqComp.title": "Things you might ask",
  "faqComp.viewAll": "View all FAQs",

  // ---- Footer ----
  "footer.product": "Product",
  "footer.resources": "Resources",
  "footer.changelog": "Changelog",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.joinBeta": "Join Beta",
  "footer.tagline":
    "The virtual board that never touches your browser tabs. A local-first, self-hostable tab manager extension.",
  "footer.supports": "Supports Chrome · Edge · Manifest V3",
  "footer.copyright": "© {year} Tab Garden. All rights reserved.",
  "footer.builtWith": "Built with Astro · No tracking",

  // ---- HeroTabsDemo ----
  "demo.group.dev": "Dev",
  "demo.group.later": "Read later",
  "demo.group.work": "Work",
  "demo.group.social": "Social",
  "demo.badge.window1": "Window 1",
  "demo.badge.window2": "Window 2",
  "demo.badge.reminder": "Reminder 14:00",
  "demo.phase.before": "Before",
  "demo.phase.after": "Organized",
  "demo.footer.left": "Browser tab bar · unchanged",
  "demo.footer.right": "Board view",

  // ---- Layout defaults ----
  "layout.defaultTitle": "Tab Garden | The virtual board that tames tab chaos without touching your browser",
  "layout.defaultDescription":
    "Tab Garden is a local-first browser tab manager extension: virtual grouping board, snooze tabs, cross-device workspace sync, duplicate cleanup. Available for Chrome and Edge, and never modifies your browser tabs.",
  "layout.softwareAppDesc":
    "A local-first browser tab manager extension: virtual grouping board, snooze tabs, cross-device workspace sync, duplicate cleanup. Never modifies your browser tabs.",

  // ---- FAQ page ----
  "faqPage.title": "FAQ | Tab Garden",
  "faqPage.description":
    "Tab Garden FAQ: virtual grouping, local-first privacy, cross-device workspace sync, deferred tabs and more.",
  "faqPage.h1": "Frequently Asked Questions",
  "faqPage.subtitle": "Answers about virtual grouping, privacy, workspaces, and deferred tabs.",
  "faqPage.moreTitle": "Still have questions?",
  "faqPage.moreBody": "Join the beta and ask us directly in the community.",
  "faqPage.backToHome": "Back to home and join the beta",

  // ---- Changelog page ----
  "changelogPage.title": "Changelog | Tab Garden",
  "changelogPage.description": "Tab Garden version history and release notes.",
  "changelogPage.h1": "Changelog",

  // ---- Privacy page ----
  "privacyPage.title": "Privacy Policy | Tab Garden",
  "privacyPage.description":
    "Tab Garden privacy policy: local-first storage, no tracking, self-hosted Supabase sync, data scope and permissions.",
  "privacyPage.h1": "Privacy Policy",
  "privacyPage.updated": "Last updated: 2026-08-05",
  "privacyPage.intro":
    "Tab Garden is a local-first browser tab manager extension. This policy explains how we (barely) handle your data and what you should know when using Supabase sync.",
  "privacyPage.s1.title": "1. Local-first: data stays in your browser by default",
  "privacyPage.s1.body":
    "All core features of Tab Garden (virtual groups, board layout, snoozed items, custom groups, domain rules) are stored only in the browser's local chrome.storage.local. We do not run any backend server that receives or stores your tab data.",
  "privacyPage.s2.title": "2. No tracking, no analytics, no tab upload",
  "privacyPage.s2.body":
    "Tab Garden contains no analytics SDK, tracking pixel, or third-party statistics code. The extension never auto-uploads or streams your currently open tabs. Your browsing history is never collected, transmitted, or sold.",
  "privacyPage.s3.title": "3. Cross-device sync (optional)",
  "privacyPage.s3.body":
    "If you want to sync settings, domain rules, board layout, and workspaces across devices, you must register and connect your own Supabase project. The sync credentials are yours; Tab Garden does not hold your Supabase secrets. Synced data is limited to: stable settings, domain rules, ignored-site lists, board group metadata, board layout metadata, and workspace snapshots (tab titles and URLs) you manually save.",
  "privacyPage.s4.title": "4. Data scope and runtime IDs",
  "privacyPage.s4.body":
    "Workspace snapshots store only tab titles and URLs, never runtime IDs (tabId, windowId). Runtime browser state (tabId, windowId, virtual board assignment keys) is stored locally only and never uploaded. The extension does not auto-upload your currently open tabs; only content you explicitly save as a workspace is synced.",
  "privacyPage.s5.title": "5. Extension permissions",
  "privacyPage.s5.body":
    "Tab Garden requests only these permissions: tabs (read tab titles and URLs for display in the board), storage (local settings and board data), and an optional Supabase host permission (used only when sync is enabled). The extension does not request tabGroups, history, bookmarks, cookies, webRequest, or any sensitive permission. Groups exist only in the board; chrome.tabs.group is never called.",
  "privacyPage.s6.title": "6. Data export and deletion",
  "privacyPage.s6.body":
    "You can export all local data as a JSON file from the extension options page. Removing the extension clears all local data. If you use Supabase sync, you can delete rows from tables such as user_settings in your own Supabase dashboard at any time.",
  "privacyPage.s7.title": "7. Supabase RLS row-level security",
  "privacyPage.s7.body":
    "Sync tables have row-level security (RLS) enabled, with policies based on auth.uid() = user_id to enforce data ownership. Only you, after authenticating, can read or write your own data. The service_role key never enters the extension or build artifacts.",
  "privacyPage.s8.title": "8. Contact",
  "privacyPage.s8.body": "For privacy-related questions, reach us via the feedback entry in the extension options page.",

  // ---- Terms page ----
  "termsPage.title": "Terms of Service | Tab Garden",
  "termsPage.description": "Terms of service for the Tab Garden browser extension.",
  "termsPage.h1": "Terms of Service",
  "termsPage.updated": "Last updated: 2026-08-05",
  "termsPage.intro":
    "Welcome to the Tab Garden browser extension (“the Extension”). By using the Extension you agree to the following terms. Please read them carefully.",
  "termsPage.s1.title": "1. Service description",
  "termsPage.s1.body":
    "Tab Garden is a browser tab management extension providing a virtual grouping board, tab snooze, cross-device workspace sync, and duplicate tab cleanup. The Extension supports Chrome and Edge (Manifest V3).",
  "termsPage.s2.title": "2. Disclaimer",
  "termsPage.s2.body":
    "The Extension is provided “as is” without any express or implied warranty. The author is not liable for any data loss, business interruption, or other damages arising from the use of the Extension. The Extension does not modify native browser tab groups, but users should maintain their own backups.",
  "termsPage.s3.title": "3. Usage license",
  "termsPage.s3.body":
    "The core features of the Extension are free. You are granted a non-exclusive, non-transferable license to use the Extension for tab management in personal or commercial environments. You may not reverse-engineer, redistribute, or remove copyright notices from the Extension.",
  "termsPage.s4.title": "4. User data and privacy",
  "termsPage.s4.body":
    "See the Privacy Policy for detailed data handling. The Extension does not collect, track, or sell your browsing history. Cross-device sync is provided by a Supabase project you connect yourself; data ownership remains yours.",
  "termsPage.s5.title": "5. Third-party services",
  "termsPage.s5.body":
    "The optional sync feature relies on Supabase (supabase.co). When using sync, your data is stored and transmitted per your own Supabase project configuration and is subject to Supabase's terms of service. The Extension does not bundle any Supabase SDK; all interaction is via REST API.",
  "termsPage.s6.title": "6. Changes to terms",
  "termsPage.s6.body":
    "The author reserves the right to modify these terms at any time. Continued use of the Extension after changes constitutes acceptance of the new terms. Material changes will be communicated via extension update notes.",
  "termsPage.s7.title": "7. Contact",
  "termsPage.s7.body": "For terms-related questions, reach us via the feedback entry in the extension options page.",
};

export const dictionaries: Record<Lang, Dict> = { zh, en };

// ---------------------------------------------------------------------------
// FAQ items (component shows a subset; page shows the full list)
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqComponentItems: Record<Lang, FaqItem[]> = {
  zh: [
    {
      question: "Tab Garden 会修改我浏览器的标签分组吗？",
      answer:
        "不会。Tab Garden 采用虚拟分组：所有自动/自定义分组只存在于扩展看板中，绝不调用 chrome.tabs.group 或申请 tabGroups 权限。关闭扩展，浏览器立刻恢复原样。",
    },
    {
      question: "Tab Garden 会收集我的浏览记录吗？",
      answer:
        "不会。你的标签数据默认只保存在本地浏览器中。跨设备同步需要你自己连接 Supabase 账户，密钥由你掌握，且扩展不会自动或实时上传当前打开的标签页。",
    },
    {
      question: "支持哪些浏览器？",
      answer:
        "目前支持 Chrome 和 Edge（Manifest V3）。Firefox 版本暂未支持，加入内测可优先体验新平台。",
    },
    {
      question: "工作区和工作区快照是什么？",
      answer:
        "工作区是你手动挑选并命名的标签集合，只保存标题和 URL。它会同步到你的 Supabase，可以在任意设备登录后恢复或编辑。扩展不会自动上传当前打开的标签页。",
    },
    {
      question: "稍后处理（Deferred Tabs）怎么工作？",
      answer:
        "在看板任意标签上点击稍后按钮，可选择预设提醒时间（默认 09:00 / 14:00 / 18:00，可在选项中自定义最多 5 个）。标签会被关闭并存入本地待恢复列表，到点后看板会高亮提醒，可一键重新打开。",
    },
    {
      question: "看板可以替换浏览器的新标签页吗？",
      answer:
        "可以。在选项中开启「在新标签页打开看板」后，每次新建标签会跳转到看板。该功能通过事件监听实现而非 chrome_url_overrides，随时关闭即可恢复浏览器原生新标签页，无需重启。",
    },
    {
      question: "这是免费工具吗？",
      answer:
        "基础功能免费。未来可能会推出面向团队或重度用户的 Pro 计划，但本地核心功能将始终保持免费。",
    },
  ],
  en: [
    {
      question: "Does Tab Garden modify my browser's tab groups?",
      answer:
        "No. Tab Garden uses virtual grouping: all auto/custom groups exist only in the extension board and never call chrome.tabs.group or request the tabGroups permission. Remove the extension and your browser reverts instantly.",
    },
    {
      question: "Does Tab Garden collect my browsing history?",
      answer:
        "No. Your tab data is stored only in the local browser by default. Cross-device sync requires you to connect your own Supabase account; the keys are yours, and the extension never auto-uploads your currently open tabs.",
    },
    {
      question: "Which browsers are supported?",
      answer:
        "Currently Chrome and Edge (Manifest V3). Firefox is not yet supported; join the beta to get early access to new platforms.",
    },
    {
      question: "What are workspaces and workspace snapshots?",
      answer:
        "A workspace is a named set of tabs you manually curate, storing only titles and URLs. It syncs to your Supabase so you can restore or edit it on any device after signing in. The extension never auto-uploads your currently open tabs.",
    },
    {
      question: "How do Deferred Tabs (snooze) work?",
      answer:
        "Click the snooze button on any tab in the board and choose a preset reminder time (default 09:00 / 14:00 / 18:00, up to 5 customizable in options). The tab closes and enters a local restore list; when due, the board highlights it and you can reopen with one click.",
    },
    {
      question: "Can the board replace the browser's new tab page?",
      answer:
        "Yes. Enable “Open board on new tab” in options and every new tab opens the board. This is implemented via event listeners rather than chrome_url_overrides; turn it off anytime to restore the native new tab page without restarting.",
    },
    {
      question: "Is this a free tool?",
      answer:
        "Core features are free. A Pro plan for teams or power users may be introduced in the future, but local core functionality will always remain free.",
    },
  ],
};

export const faqPageItems: Record<Lang, FaqItem[]> = {
  zh: [
    ...faqComponentItems.zh,
    {
      question: "如何反馈问题或建议？",
      answer:
        "你可以通过页面底部的联系方式，或在扩展的选项页中直接提交反馈。内测用户优先进入私有讨论群。",
    },
  ],
  en: [
    ...faqComponentItems.en,
    {
      question: "How do I report issues or suggestions?",
      answer:
        "Use the contact links at the bottom of the page or submit feedback directly from the extension options page. Beta users get priority access to the private discussion group.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Changelog releases
// ---------------------------------------------------------------------------

export interface ChangelogRelease {
  version: string;
  date: string;
  title: string;
  items: string[];
}

export const changelogReleases: Record<Lang, ChangelogRelease[]> = {
  zh: [
    {
      version: "v0.3.0",
      date: "2026-07-25",
      title: "工作区与跨设备同步",
      items: [
        "新增工作区：手动挑选标签命名成集合，只同步标题与 URL",
        "支持连接用户自己的 Supabase 账户同步设置、规则、布局与工作区",
        "看板支持按设备类型（桌面/平板/手机）独立记忆手动布局",
        "优化暗黑模式下的视觉一致性",
      ],
    },
    {
      version: "v0.2.0",
      date: "2026-07-10",
      title: "稍后处理与重复标签清理",
      items: [
        "新增稍后处理（Deferred Tabs）：关闭标签并设置提醒时间",
        "看板新增「待恢复提醒」分区，到点高亮提醒",
        "新增重复标签扫描：按精确 URL 聚合，预览确认后批量清理",
        "修复标签过多时的滚动性能问题",
      ],
    },
    {
      version: "v0.1.0",
      date: "2026-06-20",
      title: "首个内测版",
      items: [
        "虚拟分组看板上线（不调用 tabGroups 权限）",
        "按域名自动聚合，支持 2/3/4 标签阈值",
        "支持自定义分组规则与 9 种颜色",
        "全屏看板聚合多窗口标签，支持搜索与窗口过滤",
      ],
    },
  ],
  en: [
    {
      version: "v0.3.0",
      date: "2026-07-25",
      title: "Workspaces & cross-device sync",
      items: [
        "New workspaces: manually curate tabs into named sets, syncing only titles and URLs",
        "Connect your own Supabase account to sync settings, rules, layout, and workspaces",
        "Board remembers manual layout independently per device type (desktop / tablet / phone)",
        "Improved dark-mode visual consistency",
      ],
    },
    {
      version: "v0.2.0",
      date: "2026-07-10",
      title: "Deferred tabs & duplicate cleanup",
      items: [
        "New Deferred Tabs: close tabs and set reminder times",
        "Board adds a “pending reminders” section, highlighted when due",
        "New duplicate tab scan: aggregate by exact URL, batch cleanup after preview",
        "Fixed scroll performance with many tabs",
      ],
    },
    {
      version: "v0.1.0",
      date: "2026-06-20",
      title: "First beta release",
      items: [
        "Virtual grouping board launched (no tabGroups permission)",
        "Auto-group by domain, supports 2/3/4 tab thresholds",
        "Custom grouping rules with 9 colors",
        "Full-screen board aggregating multi-window tabs, with search and window filter",
      ],
    },
  ],
};
