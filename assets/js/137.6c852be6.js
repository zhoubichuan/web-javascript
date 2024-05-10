(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{557:function(s,a,r){"use strict";r.r(a);var t=r(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"七-跨平台兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-跨平台兼容"}},[s._v("#")]),s._v(" 七.跨平台兼容")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("不是所有的 shell 命令都是跨平台兼容的，甚至各种常见的文件系统操作也是不兼容的")]),s._v(" "),a("p",[a("strong",[s._v("特别说明，windows 环境的同学建议使用 git bash 来运行 npm script，使用 windows 自带的 cmd 可能会遇到比较多的问题")])])]),s._v(" "),a("h2",{attrs:{id:"_1-文件系统操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件系统操作"}},[s._v("#")]),s._v(" 1. 文件系统操作")]),s._v(" "),a("p",[s._v("npm script 中涉及到的文件系统操作包括文件和目录的创建、删除、移动、复制等操作，而社区为这些基本操作也提供了跨平台兼容的包，列举如下：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/isaacs/rimraf",target:"_blank",rel:"noopener noreferrer"}},[s._v("rimraf"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://www.npmjs.com/package/del-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("del-cli"),a("OutboundLink")],1),s._v("，用来删除文件和目录，实现类似于 "),a("code",[s._v("rm -rf")]),s._v(" 的功能；")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/cpr",target:"_blank",rel:"noopener noreferrer"}},[s._v("cpr"),a("OutboundLink")],1),s._v("，用于拷贝、复制文件和目录，实现类似于 "),a("code",[s._v("cp -r")]),s._v(" 的功能；")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/make-dir-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("make-dir-cli"),a("OutboundLink")],1),s._v("，用于创建目录，实现类似于 "),a("code",[s._v("mkdir -p")]),s._v(" 的功能；")])]),s._v(" "),a("p",[s._v("使用上面这几个小工具改造 npm script 的具体步骤如下：")]),s._v(" "),a("p",[s._v("第 1 步，添加开发依赖：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i rimraf cpr make-dir-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install rimraf cpr make-dir-cli --save-dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add rimraf cpr make-dir-cli -D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第 2 步，改造涉及文件系统操作的 npm script：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:cleanup"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf coverage && rm -rf .nyc_output"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:archive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var \\"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:cleanup"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rimraf coverage && rimraf .nyc_output"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:archive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var \\"make-dir coverage_archive/$npm_package_version && cpr coverage/* coverage_archive/$npm_package_version -o\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var opn http://localhost:$npm_package_config_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"')]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"precover"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run cover:cleanup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm-run-all cover:archive --parallel cover:serve cover:open"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("对改动的几点说明：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("rm -rf")]),s._v(" 直接替换成 "),a("code",[s._v("rimraf")]),s._v("；")]),s._v(" "),a("li",[a("code",[s._v("mkdir -p")]),s._v(" 直接替换成 "),a("code",[s._v("make-dir")]),s._v("；")]),s._v(" "),a("li",[a("code",[s._v("cp -r")]),s._v(" 的替换需特别说明下，"),a("code",[s._v("cpr")]),s._v(" 默认是不覆盖的，需要显示传入 "),a("code",[s._v("-o")]),s._v(" 配置项，并且参数必须严格是 "),a("code",[s._v("cpr <source> <destination> [options]")]),s._v(" 的格式，即配置项放在最后面；")]),s._v(" "),a("li",[s._v("把 "),a("code",[s._v("cover:cleanup")]),s._v(" 从 "),a("code",[s._v("postcover")]),s._v(" 挪到 "),a("code",[s._v("precover")]),s._v(" 里面去执行，规避 "),a("code",[s._v("cpr")]),s._v(" 没归档完毕覆盖率报告就被清空的问题；")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("TIP#13")]),s._v("：任何改动之后记得重新运行 npm run cover，确保所有的 npm script 还是按预期工作的")])]),s._v(" "),a("h2",{attrs:{id:"_2-引用变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用变量"}},[s._v("#")]),s._v(" 2. 引用变量")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/book/5a1212bc51882531ea64df07/section/5a12146951882531bb6c68fe",target:"_blank",rel:"noopener noreferrer"}},[s._v("2.2 在 npm script 中使用变量"),a("OutboundLink")],1),s._v(" 介绍了如何使用内置和预定义变量减少代码重复的技巧，如本节开头的例子，Linux 和 Windows 下引用变量的方式是不同的，Linux 下直接可以用 "),a("code",[s._v("$npm_package_name")]),s._v("，而 Windows 下必须使用 "),a("code",[s._v("%npm_package_name%")]),s._v("，我们可以使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-var",target:"_blank",rel:"noopener noreferrer"}},[s._v("cross-var"),a("OutboundLink")],1),s._v(" 实现跨平台的变量引用，具体步骤如下：")]),s._v(" "),a("p",[s._v("第 1 步，安装 cross-var 为开发依赖：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i cross-var "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install cross-var --save-dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add cross-var -D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第 2 步，改写引用变量 npm script，具体 diff 如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:cleanup"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf coverage && rm -rf .nyc_output"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:archive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http-server coverage_archive/$npm_package_version -p $npm_package_config_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"opn http://localhost:$npm_package_config_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:archive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var \\"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-var opn http://localhost:$npm_package_config_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("因为 cover:serve 和 cover:open 命令都比较简单，直接在原始命令前增加 cross-var 命令即可，而 cover:archive 内含了两条子命令，我们需要用引号把整个命令包起来（注意这里是用的双引号，且必须转义），然后在前面加上 cross-var。")]),s._v(" "),a("p",[s._v("此外，细心的同学可能发现引入 cross-var 之后，它竟然给我们安装了 babel，如果想保持依赖更轻量的话，可以考虑使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-var-no-babel",target:"_blank",rel:"noopener noreferrer"}},[s._v("cross-var-no-babel"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_3-设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置环境变量"}},[s._v("#")]),s._v(" 3. 设置环境变量")]),s._v(" "),a("p",[s._v("在 node.js 脚本和 npm script 使用环境变量也是比较常见的，比如我们在运行测试时，需要加上 "),a("code",[s._v("NODE_ENV=test")]),s._v("，或者在启动静态资源服务器时自定义端口号。因为不同平台的环境变量语法不同，我们可以使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/cross-env",target:"_blank",rel:"noopener noreferrer"}},[s._v("cross-env"),a("OutboundLink")],1),s._v(" 来实现 npm script 的跨平台兼容，具体步骤如下：")]),s._v(" "),a("p",[s._v("第 1 步，添加 cross-env 到开发依赖：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i cross-env "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install cross-env --save-dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add cross-env -D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第 2 步，改写使用了环境变量的 npm script：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n-    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV=test mocha tests/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=test mocha tests/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("上面的改动更简单，直接在设置了环境变量的命令前面加上 cross-env 即可。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("ul",[a("li",[s._v("所有使用引号的地方，建议使用双引号，并且加上转义；")]),s._v(" "),a("li",[s._v("没做特殊处理的命令比如 eslint、stylelint、mocha、opn 等工具本身都是跨平台兼容的；")]),s._v(" "),a("li",[s._v("还是强烈建议有能力的同学能使用 Linux 做开发，只要你入门并且熟练了，效率提升会惊人；")]),s._v(" "),a("li",[s._v("短时间内继续拥抱 Windows 的同学，可以考虑看看 Windows 10 里面引入的 "),a("a",{attrs:{href:"https://msdn.microsoft.com/en-us/commandline/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[s._v("Subsystem"),a("OutboundLink")],1),s._v("，让你不用虚拟机即可在 Windows 下使用大多数 Linux 命令。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);