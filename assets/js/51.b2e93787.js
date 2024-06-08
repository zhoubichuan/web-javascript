(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{461:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"六-异步编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六-异步编程"}},[t._v("#")]),t._v(" 六.异步编程")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),s("p",[t._v("js 代码从上往下执行，遇到"),s("code",[t._v("setTimeout")]),t._v("、"),s("code",[t._v("setInterval")]),t._v("等包裹的代码块会跳过，先将其他代码执行完，然后执行之前跳过的代码")])]),t._v(" "),s("ul",[s("li",[t._v("同步代码在执行栈中执行完毕后")]),t._v(" "),s("li",[t._v("异步队列中的代码进入执行栈中执行")]),t._v(" "),s("li",[t._v("异步队列会分为"),s("code",[t._v("宏任务")]),t._v("队列、"),s("code",[t._v("微任务")]),t._v("队列两种类型")]),t._v(" "),s("li",[t._v("当有"),s("code",[t._v("微任务")]),t._v("队列时，会首先在"),s("code",[t._v("执行栈")]),t._v("中执行"),s("code",[t._v("微任务")]),t._v("队列代码，直至微任务队列没有代码（执行代码期间产生的异步任务也会分别进入"),s("code",[t._v("宏任务")]),t._v("队列和"),s("code",[t._v("微任务")]),t._v("队列），然后执行"),s("code",[t._v("宏任务")]),t._v("队列代码")])]),t._v(" "),s("h2",{attrs:{id:"_1-宏任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-宏任务"}},[t._v("#")]),t._v(" 1.宏任务")]),t._v(" "),s("h3",{attrs:{id:"_1-1-settimeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-settimeout"}},[t._v("#")]),t._v(" 1.1 setTimeout")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"_1-2-setinterval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-setinterval"}},[t._v("#")]),t._v(" 1.2 setInterval")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"_1-3-requestanimationframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-requestanimationframe"}},[t._v("#")]),t._v(" 1.3 requestAnimationFrame")]),t._v(" "),s("h2",{attrs:{id:"_2-微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-微任务"}},[t._v("#")]),t._v(" 2.微任务")]),t._v(" "),s("h2",{attrs:{id:"_3-异步捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-异步捕获"}},[t._v("#")]),t._v(" 3.异步捕获")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.try catch finally")])]),t._v(" "),s("li",[s("p",[t._v("2.throw")])]),t._v(" "),s("li",[s("p",[t._v("3.Error")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);