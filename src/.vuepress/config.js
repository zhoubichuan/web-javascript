const nav = require("./nav");

module.exports = {
  // 基础配置
  base: "/web-javascript/", // 部署站点的基础路径
  description: "JavaScript相关知识点",
  locales: {
    // 默认标题
    "/": {
      title: "JavaScript学习笔记",
      description: "",
    },
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  head: [
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
      },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js",
      },
    ],
    // 添加链接 pwa 的 manifest 如果需要
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000",
      },
    ],
  ],
  plugins: [
    "demo-block",
    // you can use this plugin multiple times
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

    // this is how VuePress Default Theme use this plugin
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

  // 主题配置
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
