module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    repo: 'vuejs/vuepress',
    lastUpdated: 'Last Updated',
    nav: [
      { text: "git", link: "/skill/git.md" },
      { text: "文档", link: "/文档/首页.md" },
      {
        text: "小程序开发记录",
        link: "/目录/小程序开发记录.md",
        items: [
          { text: "列表", link: "/小程序开发记录/列表.md" },
          { text: "2021-11-04", link: "/小程序开发记录/2021-11-04.md" },
          { text: "2021-11-05", link: "/小程序开发记录/2021-11-05.md" },
        ],
      },
    ],
    // 多个侧边栏基础版,每页显示不同的侧边栏
    // 'skill/': [
    //   'git'
    // ],
    // '文档/': [
    //   '首页'
    // ],
    // '小程序开发记录/': [
    //   '列表',
    //   '2021-11-04',
    //   '2021-11-05'
    // ],

    // 侧边栏分组，其中path可以不设置，就没有点击效果
    // [
    //   {
    //     title: 'git系列',   // 必要的
    //     path: 'skill/git',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       'skill/git'
    //     ]
    //   },
    //   {
    //     title: '文档系列',   // 必要的
    //     path: '文档/首页',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '文档/首页'
    //     ]
    //   },
    //   {
    //     title: '小程序开发记录',   // 必要的
    //      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       {
    //         title:'列表',
    //         collapsable: false,
    //         sidebarDepth: 1,
    //         children:['小程序开发记录/列表',]
    //       },
    //       {
    //         title:'日记',
    //         collapsable: false,
    //         sidebarDepth: 1,
    //         children:[
    //           '小程序开发记录/2021-11-04',
    //           '小程序开发记录/2021-11-05',
    //           '小程序开发记录/2021-11-08',
    //           '小程序开发记录/2021-11-09',
    //           '小程序开发记录/2021-11-10',
    //           '小程序开发记录/2021-11-11',
    //           '小程序开发记录/2021-11-12',
    //         ]
    //       }
    //     ]
    //   }
    // ]

    // 结合版，每页显示不同的侧边栏且还能分组
    sidebar: {
      "/skill/": ["git"],
      "/文档/": ["首页"],
      "/小程序开发记录/": [
        {
          title: "列表",
          collapsable: false,
          sidebarDepth: 1,
          children: ["/小程序开发记录/列表"],
        },
        {
          title: "日记",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            "/小程序开发记录/2021-11-04",
            "/小程序开发记录/2021-11-05",
            "/小程序开发记录/2021-11-08",
            "/小程序开发记录/2021-11-09",
            "/小程序开发记录/2021-11-10",
            "/小程序开发记录/2021-11-11",
            "/小程序开发记录/2021-11-12",
          ],
        },
      ],
    },
    sidebarDepth: 2,
    collapsable: false,
  },
};
