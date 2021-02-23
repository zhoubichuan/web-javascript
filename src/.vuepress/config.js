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
                link: '/basicKnowledge/stack/1.dataType'
              },
              {
                text: '二、面向对象程序设计',
                link: '/basicKnowledge/oop/1.objectOriented'
              },
              {
                text: '三、浏览器渲染机制',
                link: '/basicKnowledge/async/1.browser'
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
                link: '/basicKnowledge/http/1.http'
              }
            ]
          },
          {
            text: '专项知识',
            items: [{
                text: '一、前端性能优化',
                link: '/specialKnowledge/performance/1.CDN'
              },
              {
                text: '二、TypeScript',
                link: '/specialKnowledge/typeScript/15.api'
              },
              {
                text: '三、前端监控',
                link: '/specialKnowledge/monitor/13.jiankong'
              },
              {
                text: '四、安全防范',
                link: '/specialKnowledge/security/1.xss'
              },
              {
                text: '五、文件上传下载',
                link: '/specialKnowledge/security/1.xss'
              },
              {
                text: '六、移动端开发',
                link: '/specialKnowledge/h5/skill',
              }
            ]
          },
          {
            text: '阅读书籍',
            items: [{
                text: '一、JavaScript高级程序设计',
                link: '/principleKnowledge/book1/1.preparation'
              },
              {
                text: '二、JavaScript DOM 编程艺术',
                link: '/principleKnowledge/vuex'
              },
              {
                text: '三、你不知道的JavaScript',
                link: '/principleKnowledge/vue-router'
              },
              {
                text: '四、JavaScript设计模式与开发实践',
                link: '/principleKnowledge/element/Pagination'
              },
              {
                text: '五、高性能JavaScript',
                link: '/principleKnowledge/element/Pagination'
              }
            ]
          }
        ],
        sidebar: {
          '/basicKnowledge/stack/': [ //一、堆栈内存和闭包作用域
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
          '/basicKnowledge/async/': [ //三、同步异步编程及浏览器渲染机制
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
          '/basicKnowledge/http/': [ //六、AJAX/HTTP前后端数据通信
            '1.http',
            '2.https',
            '3.tcp',
            '4.catch',
            '5.dns',
            '6.http',
          ],
          '/specialKnowledge/h5/': [
            'skill',
            'bug',
            'webpack',
            'vscode',
            'test',
            'prem',
            'i18n'
          ],
          '/specialKnowledge/performance/': [ //性能优化
            '1.CDN', //cdn
            '2.cache', //缓存
            '3.componentCommunication',
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
          '/specialKnowledge/typeScript/': [
            '15.api'
          ],
          '/specialKnowledge/monitor/': [ //前端监控
            '13.jiankong'
          ],
          // '/specialKnowledge/npm/': [
          //   '1.recursionAndDynamics'
          // ],
          '/specialKnowledge/security/': [ //前端安全
            '1.xss',
            '2.csrf',
            '3.doos',
            '4.http'
          ],
          '/principleKnowledge/book1/': [
            '1.preparation',
            '2.dataDriven',
            '3.componentization',
            '4.deepResponsePrinciple',
            '5.compile',
            '6.extend',
            '7.vueRouter',
            '8.vuex'
          ],
          '/principleKnowledge/element/': [
            'Pagination',
            'Dialog',
            'Autocomplete',
            'Dropdown',
            'DropdownMenu',
            'DropdownItem',
            'Menu',
            'Submenu',
            'MenuItem',
            'MenuItemGroup',
            'Input',
            'InputNumber',
            'Radio',
            'RadioGroup',
            'RadioButton',
            'Checkbox',
            'CheckboxButton',
            'CheckboxGroup',
            'Switch',
            'Option',
            'OptionGroup',
            'Button',
            'ButtonGroup',
            'Table',
            'TableColumn',
            'DatePicker',
            'TimeSelect',
            'TimePicker',
            'Popover',
            'Tooltip',
            'Breadcrumb',
            'BreadcrumbItem',
            'Form',
            'FormItem',
            'Tabs',
            'TabPane',
            'Tag',
            'Tree',
            'Alert',
            'Slider',
            'Icon',
            'Row',
            'Col',
            'Upload',
            'Progress',
            'Spinner',
            'Badge',
            'Card',
            'Rate',
            'Steps',
            'Step',
            'Carousel',
            'Scrollbar',
            'CarouselItem',
            'Collapse',
            'CollapseItem',
            'Cascader',
            'ColorPicker',
            'Transfer',
            'Container',
            'Header',
            'Aside',
            'Main',
            'Footer',
            'Timeline',
            'TimelineItem',
            'Link', 'Divider',
            'Image',
            'Calendar',
            'Backtop',
            'PageHeader',
            'CascaderPanel',
            'Avatar',
            'Drawer',
            'Popconfirm',
            'CollapseTransition',
            'MessageBox'
          ]
        }
      }
    }
  },
}