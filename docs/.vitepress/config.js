import { defineConfig } from 'vitepress'

// ⚠️ 部署到 GitHub Pages 项目页必须带仓库名前缀：
//    https://666QFF.github.io/RandomDanceGenerator/
// 若以后换成自定义域名或 666QFF.github.io 根仓库，把这里改成 '/' 即可。
const BASE = '/RandomDanceGenerator/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: BASE,

  // public/ 下的静态文件（如 xlsx 歌单模板）在 markdown 里以绝对路径引用时，
  // VitePress 的死链检查会把它当页面路由去解析而误报（.xlsx 不在其静态资源白名单里）。
  // 文件本身会被原样部署，链接带 base 前缀后可用，这里显式忽略这类误报。
  ignoreDeadLinks: [/\.xlsx$/],

  title: 'RandomDanceGen',
  description: '随机舞蹈音频视频生成器 · 使用文档',
  lang: 'zh-CN',
  lastUpdated: true,

  head: [
    // head 里的绝对路径不会被自动加 base，这里用常量拼，保持单一来源
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE}logo.png` }],
    ['meta', { name: 'theme-color', content: '#8B5CF6' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '歌单格式', link: '/guide/songlist' },
      { text: '常见问题', link: '/reference/faq' },
      { text: '溯源验真', link: '/reference/verify' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '歌单格式', link: '/guide/songlist' },
          { text: '使用教程', link: '/guide/usage' },
        ],
      },
      {
        text: '参考',
        items: [
          { text: '常见问题', link: '/reference/faq' },
          { text: '溯源验真', link: '/reference/verify' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/666QFF/RandomDanceGenerator' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清空',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 秋秋 · RandomDanceGen',
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: { level: [2, 3], label: '本页目录' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  // 本机（WorkBuddy 环境）带「批量删除守卫」，构建时自动清空 outDir 会被拦截并报
  // [safe-delete] 错误，因此显式关闭自动清空。产物文件名自带哈希，
  // 旧文件残留不影响访问；需要彻底干净时，手动把 docs/.vitepress/dist 删掉再构建。
  vite: {
    build: {
      emptyOutDir: false,
    },
  },
})
