module.exports = {
  // 基础配置
  base: '/Web-JavaScript/', // 部署站点的基础路径
  description: 'JavaScript相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'JavaScript笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    }],
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  plugins: [
    'demo-block',
    // you can use this plugin multiple times
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
            text: '基础知识',
            items: [{
                text: '一、堆栈内存和闭包作用域',
                link: '/basicKnowledge/1.stack/1.dataType'
              },
              {
                text: '二、面向对象程序设计',
                link: '/basicKnowledge/oop/1.objectOriented'
              },
              {
                text: '三、浏览器渲染机制',
                link: '/basicKnowledge/3.browser/1.browser'
              },
              {
                text: '四、DOM事件及设计模式',
                link: '/basicKnowledge/dom/1.event'
              },
              {
                text: '五、ES6+核心源码分析',
                link: '/basicKnowledge/es6/1.let'
              },
              {
                text: '六、AJAX/HTTP数据通信',
                link: '/basicKnowledge/6.http/1.http'
              }
            ]
          },
          {
            text: '专项知识',
            items: [{
                text: '一、性能优化',
                link: '/specialKnowledge/performance/1.CDN'
              },
              {
                text: '二、代码规范',
                link: '/specialKnowledge/standard/1.base'
              },
              {
                text: '三、前端监控',
                link: '/specialKnowledge/monitor/1.base'
              },
              {
                text: '四、安全防范',
                link: '/specialKnowledge/security/1.xss'
              },
              {
                text: '五、上传下载',
                link: '/specialKnowledge/fileLoadDown/1.base'
              },
              {
                text: '六、移动端',
                link: '/specialKnowledge/mobile/skill',
              },
              {
                text: '七、设计模式',
                link: '/specialKnowledge/design/index',
              }
            ]
          },
          {
            text: '阅读书籍',
            items: [{
                text: '一、高程4',
                link: '/principleKnowledge/book1/index'
              },
              {
                text: '二、编程艺术',
                link: '/principleKnowledge/book2/index'
              },
              {
                text: '三、你不知道的JS',
                link: '/principleKnowledge/book3/index'
              },
              {
                text: '四、JS设计与开发',
                link: '/principleKnowledge/book4/index'
              },
              {
                text: '五、高性能JS', 
                link: '/principleKnowledge/book5/index'
              }
            ]
          }
        ],
        sidebar: {
          '/basicKnowledge/1.stack/': [ //一、堆栈内存和闭包作用域
            '1.dataType', //9 种数据类型区别及相互转换
            '2.lexicalAnalysis',
            '3.heapStack',
            '4.bottomLayerOperation',
            '5.scope',
            '7.closure',
            '8.highLevelProgramming',
            '9.utils',
            '10.ui',
            '11.data',
            '12.skill',
            '13.com',
            '14.data',
            '15.api'
          ],
          '/basicKnowledge/oop/': [ //二、面向对象程序设计
            '1.objectOriented',
            '2.constructor',
            '3.prototype',
            '4.function',
            '5.this',
            '6.origin',
            '7.extends',
            '8.jQuery',
            '9.lodash'
          ],
          '/basicKnowledge/3.browser/': [ //三、同步异步编程及浏览器渲染机制
            '1.browser',
            '2.tree',
            '3.reflow',
            '4.async',
            '5.eventLoop',
            '6.microtaskMacrotask',
            '7.crp',
            '8.skeleton',
            '9.test'
          ],
          '/basicKnowledge/dom/': [ //四、DOM事件及设计模式
            '1.event'
          ],
          '/basicKnowledge/es6/': [ //五、ES6+核心知识和源码分析
            '1.let',
          ],
          '/basicKnowledge/6.http/': [ //六、AJAX/HTTP前后端数据通信
            '1.http',
            '2.https',
            '3.tcp',
            '4.catch',
            '5.dns',
            '6.http',
          ],
          '/specialKnowledge/performance/': [ //性能优化
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
          '/specialKnowledge/standard/': [
            '1.base'
          ],
          '/specialKnowledge/monitor/': [ //前端监控
            '1.base'
          ],
          // '/specialKnowledge/npm/': [
          //   '1.recursionAndDynamics'
          // ],
          '/specialKnowledge/fileLoadDown/': [ //文件上传下载
            '1.base'
          ],
          '/specialKnowledge/security/': [ //前端安全
            '1.xss',
            '2.csrf',
            '3.doos',
            '4.http'
          ],
          '/specialKnowledge/mobile/': [//移动端开发
            'skill',
            'bug',
            'webpack',
            'vscode',
            'test',
            'prem',
            'i18n'
          ],
          '/specialKnowledge/design/': [//设计模式
            'index',
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
          '/principleKnowledge/book1/': [
            'index',
            '2.dataDriven',
            '3.componentization',
            '4.deepResponsePrinciple',
            '5.compile',
            '6.extend',
            '7.vueRouter',
            '8.vuex'
          ],
          '/principleKnowledge/book2/': [
            'index',
          ],
          '/principleKnowledge/book3/': [
            'index',
          ],
          '/principleKnowledge/book4/': [
            'index',
          ],
          '/principleKnowledge/book5/': [
            'index',
          ],
        }
      }
    }
  },
}