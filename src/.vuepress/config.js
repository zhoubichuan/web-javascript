module.exports = {
  // 基础配置
  base: "/Web-JavaScript/", // 部署站点的基础路径
  description: "JavaScript相关知识点",
  locales: {
    // 默认标题
    "/": {
      title: "JavaScript笔记",
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
        nav: [{
          text: '基础知识',
          items: [{
            text: '一.HTML & H5',
            link: '/base/1.html/1.三栏布局'
          },
          {
            text: '二.CSS & CSS3',
            link: '/base/2.css/1.清除浮动'
          },
          {
            text: '三.JavaScript',
            link: '/base/3.javascript/1.预解释'
          },
          {
            text: '四.移动WebApp',
            link: '/base/mobile/1.index',
          },
          {
            text: '五.ES6要点记录',
            link: '/base/es6/1.let'
          },
          {
            text: ' 六.其他知识点',
            link: '/base/1.stack/1.dataType'
          }
          ]
        },
        {
          text: '专项知识',
          items: [{
            text: '一.性能优化',
            link: '/special/performance/1.index'
          },
          {
            text: '二.代码规范',
            link: '/special/standard/1.index'
          },
          {
            text: '三.前端监控',
            link: '/special/monitor/1.index'
          },
          {
            text: '四.安全防范',
            link: '/special/security/1.index'
          },
          {
            text: '五.设计模式',
            link: '/special/design/1.index',
          },
          {
            text: '六.跨域方式',
            link: '/special/cross/1.index',
          },
          {
            text: '七.前端测试',
            link: '/special/test/1.index',
          },
          {
            text: '八.网络请求',
            link: '/special/http/1.http'
          }
          ]
        },
        {
          text: '高级知识',
          items: [{
            text: '一.微前端',
            link: '/senior/micro/1.index'
          },
          {
            text: '二.断点续传',
            link: '/senior/file/1.index'
          },
          {
            text: '三.相关工具',
            link: '/senior/utils/1.index',
          }
          ]
        },
        {
          text: '原理知识',
          items: [{
            text: '一.Promise',
            link: '/source/promise/inde'
          },
          {
            text: '二.浏览器渲染机制',
            link: '/source/browser/1.browser'
          }
          ]
        },
        {
          text: '阅读书籍',
          items: [{
            text: '一.JavaScript高级程序设计',
            link: '/read/book1/inde'
          },
          {
            text: '二.编程艺术',
            link: '/read/book2/inde'
          },
          {
            text: '三.你不知道的JS',
            link: '/read/book3/inde'
          },
          {
            text: '四.JS设计与开发',
            link: '/read/book4/inde'
          },
          {
            text: '五.高性能JS',
            link: '/read/book5/inde'
          }
          ]
        }
        ],
        sidebar: {
          '/base/1.html/': [
            '1.三栏布局'
          ],
          '/base/2.css/': [
            '1.清除浮动',
            '2.3d旋转色子',
            '3.水平垂直居中'
          ],
          '/base/3.javascript/': [ //一、堆栈内存和闭包作用域
            '1.预解释', //9 种数据类型区别及相互转换
            '2.闭包',
            '3.this关键字',
            '4.call和apply深入',
            '5.作用域和作用域链',
            '6.面向对象',
            '7.原型和继承',
            '8.JS中的封装、继承和多态',
            '9.DOM实现原理和DOM深入',
            '10.正则表达式及实战',
            '11.JSON和JSON的解析',
            '12.事件、事件传播和委托',
            '13.DOM二级事件兼容性问题解决',
            '14.事件原理和自定义事件',
            '15.事件驱动和事件发射器',
            '16.拖拽和原生拖拽事件',
            '17.手机的 touch gesture 事件模型',
            '18.Ajax',
            '19.函数中参数的传递方式',
            '21.nodeJS',
            '22.Ajax 同源策略和跨域',
            '23.惰性函数',
            '24.函数柯里化',
            '25.大数据处理',
            '26.内存管理',
            '27.模拟new的实现',
            '28.bind实现原理',
            '29.数据类型检查常用的方法',
            '30.JS中的函数参数传递到底是按值传递还是按引用传递'
          ],
          '/base/1.stack/': [ //一、堆栈内存和闭包作用域
            '1.dataType',
            '3.heapStack',
            '12.async',
            '13.module',
          ],
          "/source/promise/": [
            "1.index",
          ],
          "/source/browser/": [
            //三、同步异步编程及浏览器渲染机制
            "1.browser",
            "2.tree",
            "3.reflow",
            "4.async",
            "5.eventLoop",
            "6.microtaskMacrotask",
            "7.crp",
            "8.skeleton",
            "9.test",
          ],
          "/base/mobile/": [
            //移动端开发
            "1.index",
            "1.page",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
          ],
          "/base/es6/": [
            //五、ES6+核心知识和源码分析
            "1.scope",
            "2.constant",
            "3.deconstruction",
            "4.string",
            "5.function",
            "6.object",
            "7.class",
            "8.general",
            "9.collect",
            "10.module"
          ],
// 专项知识
          '/special/performance/': [ //性能优化
            '1.index',
            '1.CDN', //cdn
            '2.cache', //缓存
            '3.store',
            '4.render',
            '5.api',
            '6.form',
            '7.checkBox',
            '8.EventLoop',
            '9.alert',
            '10.serviceRender', //服务端渲染
            '11.debounceAndThrottle', //防抖与节流
            '12.webpack'
          ],
          '/special/standard/': [
            '1.index'
          ],
          '/special/monitor/': [ //前端监控
            '1.index'
          ],
          '/special/security/': [ //前端安全
            '1.index',
            '1.xss',
            '2.csrf',
            '3.doos',
            '4.http'
          ],
          '/special/design/': [//设计模式
            '1.index',
            '1.factory',
            '2.abstract',
            '3.single',
            '4.prototype',
            '5.made',
            '6.adapter',
            '7.decorator',
            '8.proxy',
            '9.appearance',
            '10.pickup',
            '11.combination',
            '12.flyweight',
            '13.strategy',
            '14.module',
            '15.observer',
            '16.iterator',
            '17.chain',
            '18.command',
            '19.memorandum',
            '20.state',
            '21.visitor',
            '22.mediator',
            '23.interpreter'
          ],
          '/special/cross/': [//跨域
            '1.index',
            '1.browser',
            '2.cors',
            '3.nginx',
            '4.http-proxy-middleware',
            '5.jsonp',
            '6.domain',
            '7.name',
            '8.hash',
            '9.postMessage',
            '10.webSocket',
          ],
          '/special/test/': [ // 测试
            '1.index'
          ],
          '/special/http/': [ // 测试
            '1.http',
            '2.https',
            '3.tcp',
            '4.catch',
            '5.dns'
          ],
// 高级知识
          '/senior/micro/': [
            '1.index'
          ],
          '/senior/file/': [
            '1.index'
          ],
          '/senior/utils/': [
            '1.index',
          ],
          "/senior/crossDomain/": [
            //跨域
            "inde",
            "1.demote",
            "2.cors",
            "3.nginx",
            "4.http-proxy-middleware",
            "5.jsonp",
            "6.domain",
            "7.name",
            "8.hash",
            "9.postMessage",
            "10.webSocket",
          ],
          "/read/book1/": [
            "inde",
            "chapter1",
            "chapter2",
            "chapter3",
            "chapter4",
            "chapter5",
            "chapter6",
            "chapter7",
          ],
          "/read/book2/": ["inde"],
          "/read/book3/": ["inde"],
          "/read/book4/": ["inde"],
          "/read/book5/": ["inde"],
        },
      },
    },
  },
}
