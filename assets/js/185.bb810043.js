(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{743:function(s,a,t){"use strict";t.r(a);var n=t(38),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"五-npm-的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-npm-的变量"}},[s._v("#")]),s._v(" 五 npm 的变量")]),s._v(" "),t("p",[s._v("npm 为加高效的执行 npm script 做了大量的优化，"),t("a",{attrs:{href:"https://juejin.im/book/5a1212bc51882531ea64df07/section/5a1213d4f265da4335625b4a",target:"_blank",rel:"noopener noreferrer"}},[s._v("创建并运行 npm script 命令"),t("OutboundLink")],1),s._v(" 里面讲到的环境变量特性能让我们在 npm script 中直接调用依赖包里的可执行文件，更强大的是，npm 还提供了 "),t("code",[s._v("$PATH")]),s._v(" 之外的更多的变量，比如当前正在执行的命令、包的名称和版本号、日志输出的级别等。")]),s._v(" "),t("p",[s._v("DRY（Don't Repeat Yourself）是基本的编程原则，在 npm script 中使用预定义变量和自定义变量让我们更容易遵从 DRY 原则，因为使用这些变量之后，npm script 就具备了自适应的能力，我们可以直接把积累起来的 npm script 使用到其他项目里面，而不用做任何修改。")]),s._v(" "),t("h2",{attrs:{id:"_1-预定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-预定义变量"}},[s._v("#")]),s._v(" 1. 预定义变量")]),s._v(" "),t("p",[s._v("首先我们来看预定义变量，通过运行 "),t("code",[s._v("npm run env")]),s._v(" 就能拿到完整的变量列表，这个列表非常长，这里我使用 "),t("code",[s._v("npm run env | grep npm_package | sort")]),s._v(" 拿到部分排序后的预定义环境变量：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 作者信息"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_author_email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wangshijun2010@gmail.com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_author_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wangshijun\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_author_url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://github.com/wangshijun\n// 依赖信息"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_devDependencies_markdownlint_cli")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("^0.5.0\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_devDependencies_mocha")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("^4.0.1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_devDependencies_npm_run_all")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("^4.1.2\n// 各种 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" script\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_scripts_lint")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("npm-run-all --parallel lint:*\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_scripts_lint_css")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stylelint *.less\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_scripts_lint_js")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eslint *.jsß\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_scripts_lint_js_fix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("npm run lint:js -- --fix\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_scripts_lint_json")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jsonlint --quiet *.json\n// 基本信息\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(".0\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_gitHead")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3796e548cfe406ec33ab837ac00bcbd6ee8a38a0\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_license")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MIT\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_main")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("index.js\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hello-npm-script\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_readmeFilename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("README.md\n// 依赖的配置\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_nyc_exclude_0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("**/*.spec.js\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("npm_package_nyc_exclude_1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".*.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("变量的使用方法遵循 shell 里面的语法，直接在 npm script 给想要引用的变量前面加上 "),t("code",[s._v("$")]),s._v(" 符号即可。比如：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dummy"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo $npm_package_name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("回到我们的项目，测试覆盖率归档是比较常见的需求，因为它方便我们追踪覆盖率的变化趋势，最彻底的做法是归档到 CI 系统里面，对于简单项目，则可以直接归档到文件系统中，即把收集到的覆盖率报告按版本号去存放。")]),s._v(" "),t("p",[s._v("比如，我们在根目录下新建 coverage_archive 目录存储覆盖率归档，并利用变量机制把归档和版本号关联起来。具体的 npm script 修改如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("diff --git a/package.json b/package.json\nindex d297f2e..d86f65c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/package.json\n+++ b/package.json\n@@ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" @@\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n-    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"precover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf coverage"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nyc --reporter=html npm test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf .nyc_output && opn coverage/index.html"')]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:cleanup"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm -rf coverage && rm -rf .nyc_output"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:archive"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("主要改动是：增加 cover:cleanup 和 cover:archive 命令，并且修改 postcover 命令。下面对使用了环境变量的 npm script 稍作解释：")]),s._v(" "),t("p",[s._v("cover:archive 做了 2 件事情：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("mkdir -p coverage_archive/$npm_package_version")]),s._v(" 准备当前版本号的归档目录；")]),s._v(" "),t("li",[t("code",[s._v("cp -r coverage/* coverage_archive/$npm_package_version")]),s._v("，直接复制文件来归档；")])]),s._v(" "),t("p",[s._v("而 postcover 做了 3 件事情：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("npm run cover:archive")]),s._v("，归档本次覆盖率报告；")]),s._v(" "),t("li",[t("code",[s._v("npm run cover:cleanup")]),s._v("，清理本次覆盖率报告；")]),s._v(" "),t("li",[t("code",[s._v("opn coverage_archive/$npm_package_version/index.html")]),s._v("，直接预览覆盖率报告；")])]),s._v(" "),t("p",[s._v("配置好之后，我们直接运行 "),t("code",[s._v("npm run cover")]),s._v("，最后的目录结构如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600f6b21ec7b5f9?w=1820&h=878&f=png&s=253518",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_2-自定义变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义变量"}},[s._v("#")]),s._v(" 2. 自定义变量")]),s._v(" "),t("p",[s._v("除了预定义变量外，我们还可以在 package.json 中添加自定义变量，并且在 npm script 中使用这些变量。")]),s._v(" "),t("p",[s._v("为把测试覆盖率报告分享给其他同事浏览，我们就不能使用 opn-cli 打开文件了，需要启动简单的 http 服务，把网址发给别人浏览，比如我们约定网址 "),t("code",[s._v("http://IP:3000")]),s._v("，这里的 IP 需要替换成自己的实际 IP。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("http-server"),t("OutboundLink")],1),s._v(" 提供了非常轻量的 http 服务，我们先把它加到 devDependencies 中：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i http-server -D    # 等价命令 npm install http-server --save-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("接下来，在 package.json 增加自定义端口配置和相应的 npm script 命令，完整的 diff 如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("diff --git a/package.json b/package.json\nindex d86f65c..abc9d01 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/package.json\n+++ b/package.json\n@@ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" @@\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n+  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n@@ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" @@\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nyc --reporter=html npm test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n-    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"')]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:serve"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http-server coverage_archive/$npm_package_version -p $npm_package_config_port"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cover:open"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"opn http://localhost:$npm_package_config_port"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postcover"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n@@ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-23")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" @@\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"chai"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.1.2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n+    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"http-server"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^0.10.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mocha"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("关于改动做以下几点解释：")]),s._v(" "),t("ul",[t("li",[s._v("新增的命令 "),t("code",[s._v("cover:serve")]),s._v(" 中同时使用了预定义变量 "),t("code",[s._v("$npm_package_version")]),s._v(" 和自定义变量 "),t("code",[s._v("$npm_package_config_port")]),s._v("；")]),s._v(" "),t("li",[s._v("预览覆盖率报告的方式从直接打开文件修改为打开网址： "),t("code",[s._v("http://localhost:$npm_package_config_port")]),s._v("；")]),s._v(" "),t("li",[s._v("postcover 命令要做的事情比较多，我们直接使用 npm-run-all 来编排子命令。")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("TIP#8")]),s._v("：注意这里给 cover:serve 和 cover:open 增加了并行参数 "),t("code",[s._v("--parallel")]),s._v("，因为 cover:serve 不会自动退出。")]),s._v(" "),t("p",[t("strong",[s._v("TIP#9")]),s._v("：可能有同学会好奇，是否可以在自定义变量的声明中使用预定义变量，笔者也有这种好奇，并且做过尝试，结果是不支持。")])]),s._v(" "),t("p",[s._v("修改完之后，我们再次运行 npm run cover，终端会在 cover:serve 之后进入等待状态：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600f6b886e6e423?w=1280&h=968&f=png&s=228450",alt:""}})]),s._v(" "),t("p",[s._v("同时浏览器会打开覆盖率报告，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600f6bb0e572ee4?w=976&h=554&f=png&s=70116",alt:""}})]),s._v(" "),t("hr")])}),[],!1,null,null,null);a.default=e.exports}}]);