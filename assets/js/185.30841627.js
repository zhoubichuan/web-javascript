(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{590:function(e,t,r){"use strict";r.r(t);var a=r(9),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"十一-自动刷新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十一-自动刷新"}},[e._v("#")]),e._v(" 十一.自动刷新")]),e._v(" "),t("p",[e._v("前端工程师日常开发最频繁（实际上最浪费时间）的操作是什么？可能你已经想到了，就是刷新页面，要让变更生效，需要重新加载，刷新页面的操作就变成了重复低效的操作。")]),e._v(" "),t("p",[e._v("于是社区里出现了 "),t("a",{attrs:{href:"https://www.npmjs.com/package/livereload",target:"_blank",rel:"noopener noreferrer"}},[e._v("LiveReload"),t("OutboundLink")],1),e._v(" 来把这个过程自动化，react 种子项目生成工具 "),t("a",{attrs:{href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("create-react-app"),t("OutboundLink")],1),e._v(" 中就使用了这种技术。")]),e._v(" "),t("p",[e._v("但随着技术的演化，在单页应用中刷新页面意味着客户端状态的全部丢失，特别是复杂的单页应用刷新意味着更大量的重复工作才能回到刷新前的状态，于是社区又捣鼓出了 "),t("a",{attrs:{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hot Module Replacement，简称为 HMR"),t("OutboundLink")],1),e._v("，比如使用 "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli"),t("OutboundLink")],1),e._v(" 创建的 "),t("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),t("OutboundLink")],1),e._v(" 种子项目中就包含这种特性，"),t("a",{attrs:{href:"https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-native"),t("OutboundLink")],1),e._v(" 也内置了这种特性，来帮助开发者提高效率。")]),e._v(" "),t("p",[e._v("读到这里，你可能会嘀咕，看起来 LiveReload 并不是最新的技术，还讨论它干啥，实际上它是自动刷新技术的鼻祖，后续的 HMR、HR 等都是它的改良版，动手配置下自动刷新，也能让你对这些技术的基本原理略知一二。")]),e._v(" "),t("p",[e._v("下面介绍如何在经典的前端项目中（引用了 css、js 的 html 页面）接入 LiveReload 的详细步骤：")]),e._v(" "),t("h2",{attrs:{id:"_1-安装项目依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装项目依赖"}},[e._v("#")]),e._v(" 1. 安装项目依赖")]),e._v(" "),t("p",[e._v("使用如下命令安装 "),t("a",{attrs:{href:"https://www.npmjs.com/package/livereload",target:"_blank",rel:"noopener noreferrer"}},[e._v("livereload"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("http-server"),t("OutboundLink")],1),e._v(" 到项目依赖中：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i livereload http-server -D\n# npm install livereload http-server --save-dev\n# yarn add livereload http-server -D\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h2",{attrs:{id:"_2-添加-npm-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加-npm-script"}},[e._v("#")]),e._v(" 2. 添加 npm script")]),e._v(" "),t("p",[e._v("按如下提示添加命令，方便我们启动 LiveReload 服务器和通过 HTTP 的方式访问页面：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('-    "cover:open": "scripty"\n+    "cover:open": "scripty",\n+    "client": "npm-run-all --parallel client:*",\n+    "client:reload-server": "livereload client/",\n+    "client:static-server": "http-server client/"\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("其中 client 命令能同时启动 livereload 服务、静态文件服务。")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("TIP#16")]),e._v("：可能有同学会问，为什么需要启动两个服务，其中 http-server 启动的是静态文件服务器，该服务启动后可以通过 http 的方式访问文件系统上的文件，而 livereload 是启动了自动刷新服务，该服务负责监听文件系统变化，并在文件系统变化时通知所有连接的客户端，在 "),t("code",[e._v("client/index.html")]),e._v(" 中嵌入的那段 js 实际上是和 livereload-server 连接的一个 livereload-client。")])]),e._v(" "),t("h2",{attrs:{id:"_3-在页面中嵌入-livereload-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-在页面中嵌入-livereload-脚本"}},[e._v("#")]),e._v(" 3. 在页面中嵌入 livereload 脚本")]),e._v(" "),t("p",[e._v("修改 client/index.html 嵌入 livereload 脚本（能够连接我们的 livereload 服务），diff 如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" <body>\n   <h2>LiveReload Demo</h2>\n+  <script>\n+    document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] +\n+      ':35729/livereload.js?snipver=1\"></' + 'script>')\n+  <\/script>\n </body>\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("blockquote",[t("p",[t("strong",[e._v("TIP#17")]),e._v("：livereload 是支持在启动时自定义端口的，如果你使用了自定义端口，在页面中嵌入的这段 js 里面的 "),t("code",[e._v("35729")]),e._v(" 也需要替换成对应的端口。")])]),e._v(" "),t("h2",{attrs:{id:"_4-启动服务并测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动服务并测试"}},[e._v("#")]),e._v(" 4. 启动服务并测试")]),e._v(" "),t("p",[e._v("最后，运行 npm run client 之后，截图如下，注意两个红框里面的输出表示服务启动成功：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/14/1605294cbbf843bc?w=1066&h=503&f=png&s=111997",alt:""}})]),e._v(" "),t("p",[e._v("然后，打开浏览器访问：http://localhost:8080，接着修改 client/main.css 并保存（"),t("strong",[e._v("别忘了保存")]),e._v("），你会发现浏览器自动刷新了。")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("TIP#18")]),e._v("：有代码洁癖的同学可能会问，在页面中嵌入的那段 js 在线上环境咋办？实际上在嵌入这段脚本的时候可以通过简单的手段（比如判断 location.hostname）去检查当前页面运行环境，如果是线上环境就不嵌入了，或者使用打包工具处理 html 文件，上线前直接去掉即可。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);