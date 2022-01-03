const nav = require("./nav");

module.exports = {
  // 基础配置
  base: "/web-javascript/", // 部署站点的基础路径
  description: "星光不问赶路人 时光不负有心人",
  locales: {
    "/": {
      title: "JavaScript学习笔记",
      description: "",
    },
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [
    '@vuepress/medium-zoom',
    "demo-block",
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: "",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "theorem",
        before: (info) => `<div class="theorem"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "TIP",
          "/zh/": "提示",
        },
      },
    ],
  ],
  port: 3009,
  dest: "dist", // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa
  themeConfig: {
    editLinks: true,
    docsDir: "src", // 假如文档不是放在仓库的根目录下
    locales: {
      "/": {
        docsBranch: "master", // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),
      },
    },
  },
}
