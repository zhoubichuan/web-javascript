(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{437:function(s,t,n){"use strict";n.r(t);var a=n(9),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"十-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十-dom"}},[s._v("#")]),s._v(" 十.DOM")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("DOM 文档对象模型")])]),s._v(" "),t("h2",{attrs:{id:"_1-文档对象模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-文档对象模型"}},[s._v("#")]),s._v(" 1.文档对象模型")]),s._v(" "),t("ul",[t("li",[s._v("文档对象模型")]),s._v(" "),t("li",[s._v("节点层次")])]),s._v(" "),t("h2",{attrs:{id:"_2-常见操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见操作"}},[s._v("#")]),s._v(" 2.常见操作")]),s._v(" "),t("h3",{attrs:{id:"_2-1-获取元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-获取元素"}},[s._v("#")]),s._v(" 2.1 获取元素")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css选择器"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只选择符合的第一个，静态获取，后添加的元素不会加进来")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelectorAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css选择器"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取得 span 伪数组集合")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MatchesSelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body.page"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个方法能够判断能否 被以上两个方法选择返回")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementsByTagName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"标签名"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取标签名 集合")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementsByClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class名"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 class 集合")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementsByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name属性值"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用在表单元素")]),s._v("\n\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("namedItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// div 中 name 属性为 aa 的集合")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// div 中 name 属性为 aa 的集合")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tagName "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// DIV 在 HTML 中始终以大写表示")]),s._v("\n\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取得文档标题")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("URL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取得地址栏显示的 URL 不能修改")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domain "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 域 p2p.wrox.com 修改成 wrox.com 可以成功 修改成其他跨域会出错")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("referrer "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取得来源此页面的URL")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 特殊集合")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("anchors "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有带 name 特性的 a 标签")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("forms "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有 form 元素")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("images "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有 img 元素")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("links "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有带 href 特性的 a元素")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("querySelector 系列是静态的，在获取元素之后新添加的节点不会加进来")]),s._v(" "),t("h3",{attrs:{id:"_2-2-操作节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-操作节点"}},[s._v("#")]),s._v(" 2.2 操作节点")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nodeType "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true 判断是否存在节点 是不是一个元素")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1 元素节点 2 属性节点 3 文本节点")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nodeName\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #text 文本节点的名字")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// P  元素节点的元素名 大写")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #comment 注释节点的名字")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nodeValue "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文本节点的内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必须是文本节点，元素节点会返回 null")]),s._v("\n\n父元素"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children 获取子节点\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// IE9+ 正常")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// IE8-中 会获取 注释和元素节点")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 父节点")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parentNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取直系父元素")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("offsetParent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取上一个带有定位的父元素，position:stalic不算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n兼容方法\n  firstchild 都有值，firstElementChild IE 会 undefined\n  短路运算\n  firstElementChild || firstchild;\n*/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 子节点")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstChild"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标准浏览器获取第一个 文本或换行 节点，IE 只获取第一个元素")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstElementChild"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标准浏览器只获取第一个元素，IE 为 undefined")]),s._v("\nlastElementChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" lastChild"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 最后一个子节点\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兄弟节点")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("previousElementSibling "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("previousSibling"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上一个兄弟节点")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextElementSibling "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextSibling"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下一个兄弟节点")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新建节点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" li "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新建li元素")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createTextNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wenben"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 新建文本")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插入节点")]),s._v("\n父节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("li"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 父节点的末尾插入")]),s._v("\n父节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertBefore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("li"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 参照子节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在参照子节点前插入")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换节点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换之前的文本依然还在 ，但它在文档中已经没了自己的位置")]),s._v("\n父节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replaceChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("新节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 被替换的子节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除节点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 移除的节点仍然为文档所有，只不过没有了自己的位置")]),s._v("\n父节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("子节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除子节点")]),s._v("\n节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自己删除自己")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 克隆节点")]),s._v("\n节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认：只复制本身空标签")]),s._v("\n节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本身与所有子节点都复制")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"_2-3-属性操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-属性操作"}},[s._v("#")]),s._v(" 2.3 属性操作")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"className"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取属性")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ft"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置属性")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeAttribute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除属性")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("attributes "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 div 所有的属性 返回集合")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-4-样式操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-样式操作"}},[s._v("#")]),s._v(" 2.4 样式操作")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兼容所有浏览器")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStyle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cssStyle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// IE获取  标准浏览器")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentStyle\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentStyle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cssStyle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getComputedStyle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cssStyle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getComputedStyle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标准浏览器")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("currentStyle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兼容 IE 浏览器")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// div.style 只能获取到行间的 css 样式")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cssText "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width: 200px;height: 30px;"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置 css 样式")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 200px 取得宽度值")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除 width 属性")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取得计算后的 css 样式")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cssText "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width:200px"')]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPropertyValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取得设置 cssText 的样式")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"_2-5-classlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-classlist"}},[s._v("#")]),s._v(" 2.5 classList")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除 user 类")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"current"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加 current 类")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toggle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 切换 user 类")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断是否有 d 类")]),s._v("\nbtn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onfocus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取焦点")]),s._v("\nbtn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onblur")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取消焦点")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 兼容模式")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compatMode "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标准模式下 CSS1Compat 混杂模式下 BackCompat")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// data- 属性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 123 取得自定义 data 属性的值")]),s._v("\ndiv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"222"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置 data 属性的值")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);