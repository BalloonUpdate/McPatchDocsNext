import process from 'node:process'
import { defaultTheme, defineUserConfig } from 'vuepress'

console.log(process.env.VUEPRESS_BASE);

const __BASE = (process.env.VUEPRESS_BASE ?? '/') as '/' | `/${string}/`

export default defineUserConfig({
    base: __BASE,
    lang: 'zh-CN',
    title: 'McPatch文档',
    description: 'McPatch的帮助文档',
    theme: defaultTheme({
        repo: 'BalloonUpdate/McPatchDocs',
        sidebarDepth: 0,
        backToHome: "回首页",
        contributorsText: "贡献者们",
        lastUpdatedText: "上次更新于",
        editLinkText: "在Github上编辑此页面",
        sidebar: [
            { text: '介绍', link: '/' },
            { text: '安装教程', link: '/guide' },
        ]
    })
})