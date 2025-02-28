const CONFIG = {
    // profile setting (required)
    profile: {
        name: 'kuri3',
        image: '/avatar.png', // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
        role: '主にキャッシュレスオタク',
        bio: '👨‍🎓一般的な男子大学生',
        email: '',
        linkedin: '',
        github: 'Kuri0421',
        instagram: '',
    },
    projects: [{
        name: `Kuri3の履歴書`,
        href: 'https://kuri3.cc'
    }],
    // blog setting (required)
    blog: {
        title: 'Kuri3のお気持ち表明',
        description: '',
        theme: 'light' // ['light', 'dark', 'auto']
    },

    // CONFIG configration (required)
    link: "https://kuri3.cc",
    since: 2023, // If leave this empty, current year will be used.
    lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
    ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
    seo: {
        keywords: ["Blog", "Website", "Notion"],
    },

    // notion configuration (required)
    notionConfig: {
        pageId: process.env.NOTION_PAGE_ID,
    },

// plugin configuration (optional)
googleAnalytics: {
  enable: false,
  config: {
    measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
  },
},
googleSearchConsole: {
  enable: false,
  config: {
    siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
},
utterances: {
  enable: false,
  config: {
    repo: "morethanmin/morethan-log",
    "issue-term": "og:title",
    label: "💬 Utterances",
  },
},
cusdis: {
  enable: true,
  config: {
    host: "https://cusdis.com",
    appid: "4997acdd-bb79-4b31-9fcd-ba434f42f588", // Embed Code -> data-app-id value
  },
},
isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG