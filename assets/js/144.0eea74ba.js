(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{548:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"四-浏览器缓存机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-浏览器缓存机制"}},[t._v("#")]),t._v(" 四.浏览器缓存机制")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),s("p",[t._v("缓存可以减少网络 IO 消耗，提高访问速度。浏览器缓存是一种操作简单、效果显著的前端性能优化手段。对于这个操作的必要性，Chrome 官方给出额解释似乎更有说服力一些：")]),t._v(" "),s("blockquote",[s("p",[t._v("通过网络获取内容及速度缓慢有开销巨大。较大的响应需要在客户端与服务器之间进行多次往返通信，这会延迟浏览器获得和处理内容的时间，还会增加访问者的浏览器费用。因此，缓存并重复利用之前获取的资源的能力成为性能优化的一个关键方面。")])])]),t._v(" "),s("h2",{attrs:{id:"_1-缓存位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-缓存位置"}},[t._v("#")]),t._v(" 1.缓存位置")]),t._v(" "),s("p",[t._v("从缓存位置上来说分为四种，并且各自有"),s("code",[t._v("优先级")]),t._v("，当依次查找缓存且都没有命中的时候，才会去请求网络")]),t._v(" "),s("ul",[s("li",[t._v("1.Service Worker")]),t._v(" "),s("li",[t._v("2.Memory Cache")]),t._v(" "),s("li",[t._v("3.Disk Cache")]),t._v(" "),s("li",[t._v("4.Push Cache")]),t._v(" "),s("li",[t._v("5.网络请求")])]),t._v(" "),s("h3",{attrs:{id:"service-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),s("p",[t._v("Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们"),s("strong",[t._v("自由控制")]),t._v("缓存哪些文件、如何匹配缓存、如何读取缓存，并且"),s("strong",[t._v("缓存是持续性的")])]),t._v(" "),s("p",[t._v("当 Service Worker 没有命中缓存的时候，我们需要去调用"),s("code",[t._v("fetch")]),t._v("函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。"),s("strong",[t._v("当时我们是从 Memory Cache 中还是从网络请求中获取的数据，浏览器都会显示我们是从 Service Worker 中获取的内容。")])]),t._v(" "),s("p",[t._v("Service Worker 是一种独立于主线程之外的 Javascript 线程。它脱离于浏览器窗体，因此无法直接访问 DOM。这样独立的个性使得 Service Worker 的“个人行为”无法干扰页面的性能，这个“幕后工作者”可以帮我们实现离线缓存、消息推送和网络代理等功能。我们借助 Service worker 实现的离线缓存就称为 Service Worker Cache。")]),t._v(" "),s("p",[t._v("Service Worker 的生命周期包括 install、active、working 三个阶段。一旦 Service Worker 被 install，它将始终存在，只会在 active 与 working 之间切换，除非我们主动终止它。这是它可以用来实现离线存储的重要先决条件。")]),t._v(" "),s("p",[t._v("下面我们就通过实战的方式，一起见识一下 Service Worker 如何为我们实现离线缓存（注意看注释）： 我们首先在入口文件中插入这样一段 JS 代码，用以判断和引入 Service Worker：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注册成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注册失败"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("在 test.js 中，我们进行缓存的处理。假设我们需要缓存的文件分别是 test.html,test.css 和 test.js：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Service Worker会监听 install事件，我们在其对应的回调里可以实现初始化的逻辑")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitUntil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 考虑到缓存也需要更新，open内传入的参数为缓存的版本号")]),t._v("\n    caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处传入指定的需缓存的文件名")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Service Worker会监听所有的网络请求，网络请求的产生触发的是fetch事件，我们可以在其对应的监听函数中实现对请求的拦截，进而判断是否有对应到该请求的缓存，实现从Service Worker中取到缓存的目的")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fetch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("respondWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试匹配该请求对应的缓存值")]),t._v("\n    caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果匹配到了，调用Server Worker缓存")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没匹配到，向服务端发起这个资源请求")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求成功的话，将请求缓存起来。")]),t._v("\n        caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Server Worker 对协议是有要求的，必须以 https 协议为前提。")])]),t._v(" "),s("h3",{attrs:{id:"memory-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[t._v("#")]),t._v(" Memory Cache")]),t._v(" "),s("p",[t._v("Memory Cache 也就是内存中的缓存，读取内存中的数据肯定比磁盘快。**但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。**一旦我们关闭 Tab 页面，内存中的缓存也就释放了。")]),t._v(" "),s("p",[t._v("当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存。")]),t._v(" "),s("p",[t._v("既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？")]),t._v(" "),s("p",[t._v("先说结论，这是不可能的。首先计算机中的内存一定比硬盘容量小得多，操作系统门需要精打细算内存的使用，所以能让我们的内存必然不多。内存中其实可以存储大部分的文件，比如说 JS、HTML、CSS、图片等等。但是浏览器会把哪些文件丢进内存这个过程就很玄学了，我查阅了很多资料都没有一个定论。")]),t._v(" "),s("p",[t._v("当然，我通过一些实践和猜测也得出了一些结论：")]),t._v(" "),s("ul",[s("li",[t._v("对于大文件来说，大概率是不存储在内存中的，反义优先")]),t._v(" "),s("li",[t._v("当前系统内存使用率高的话，文件优先存储进硬盘")])]),t._v(" "),s("h3",{attrs:{id:"disk-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[t._v("#")]),t._v(" Disk Cache")]),t._v(" "),s("p",[t._v("Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上")]),t._v(" "),s("p",[t._v("在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Header 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。"),s("strong",[t._v("并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。")])]),t._v(" "),s("h3",{attrs:{id:"push-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[t._v("#")]),t._v(" Push Cache")]),t._v(" "),s("p",[t._v("Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。"),s("strong",[t._v("并且缓存时间也很短暂，只在会话(session)中存在，一旦会话结束就会被释放。")])]),t._v(" "),s("p",[t._v("Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及，但是 HTTP/2 将会是日后一个趋势。")]),t._v(" "),s("ul",[s("li",[t._v("所有的资源都能被推送，但是 Edge 和 Safari 浏览器兼容性不怎么好")]),t._v(" "),s("li",[t._v("可以推送"),s("code",[t._v("no-cache")]),t._v("和"),s("code",[t._v("no-story")]),t._v("的资源")]),t._v(" "),s("li",[t._v("一旦连接被关闭，Push Cache 就被释放")]),t._v(" "),s("li",[t._v("多个页面可以使用相同的 HTTP/2 连接，也就是说能使用同样的缓存")]),t._v(" "),s("li",[t._v("Push Cache 中的缓存只能被使用一次")]),t._v(" "),s("li",[t._v("浏览器可以拒绝已经存在的资源推送")]),t._v(" "),s("li",[t._v("你可以给其他域名推送资源")])]),t._v(" "),s("h2",{attrs:{id:"_2-缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存策略"}},[t._v("#")]),t._v(" 2.缓存策略")]),t._v(" "),s("p",[t._v("通常浏览器缓存策略分为两种："),s("strong",[t._v("强缓存")]),t._v("和"),s("strong",[t._v("协商缓存")]),t._v("，并且缓存策略都是通过设置 HTTP Header 来实现的")]),t._v(" "),s("p",[s("strong",[t._v("强缓存")])]),t._v(" "),s("p",[t._v("强缓存可以通过设置两种 HTTP Header 实现："),s("code",[t._v("Expires")]),t._v("和"),s("code",[t._v("Cache-Control")]),t._v("。强缓存表示在缓存期间不需要请求，"),s("code",[t._v("state code")]),t._v("为 200")]),t._v(" "),s("p",[s("strong",[t._v("Expires")])]),t._v(" "),s("p",[s("code",[t._v("Expires")]),t._v("是 HTTP/1 的产物，表示资源会在"),s("code",[t._v("Web，22 Oct 2018 08:41:00 GMT")]),t._v("后过期，需要再次请求。并且"),s("code",[t._v("Expires")]),t._v("受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")]),t._v(" "),s("p",[s("strong",[t._v("Cache-control")]),t._v(" "),s("code",[t._v("Cache-Control")]),t._v("出现于 HTTP/1.1,优先级高于"),s("code",[t._v("Expires")]),t._v("。该属性值表示资源会在 30 秒后过期，需要再次请求。")]),t._v(" "),s("p",[s("code",[t._v("Cache-Control")]),t._v("可以在请求头或者响应头中设置，并且可以组合使用多种指令。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("指令")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("public")]),t._v(" "),s("td",[t._v("表示响应可以被客户端和代理服务器缓存")])]),t._v(" "),s("tr",[s("td",[t._v("private")]),t._v(" "),s("td",[t._v("表示响应只可以被客户端缓存")])]),t._v(" "),s("tr",[s("td",[t._v("max-age=30")]),t._v(" "),s("td",[t._v("缓存 30 秒后就过期，需要重新请求")])]),t._v(" "),s("tr",[s("td",[t._v("s-maxage=30")]),t._v(" "),s("td",[t._v("覆盖 max-age,作用一样，只在代理服务器中生效")])]),t._v(" "),s("tr",[s("td",[t._v("no-store")]),t._v(" "),s("td",[t._v("不缓存任何响应")])]),t._v(" "),s("tr",[s("td",[t._v("no-cache")]),t._v(" "),s("td",[t._v("资源被缓存，但是立即失效，下次会发起请求验证资源是否过期")])]),t._v(" "),s("tr",[s("td",[t._v("max-state=30")]),t._v(" "),s("td",[t._v("30 秒内，即使缓存过期，也使用缓存")])]),t._v(" "),s("tr",[s("td",[t._v("min-fresh=30")]),t._v(" "),s("td",[t._v("希望在 30 秒内获取最新的响应")])])])]),t._v(" "),s("p",[s("strong",[t._v("s-maxage 优先级高于 max-age，两者同时出现时，优先考虑 s-maxage。如果 s-maxage 未过期，则向代理服务器请求其缓存内容。")]),t._v("\n这个 s-maxage 不像 max-age 一样为大家所熟知。的确，在项目不是特别大的场景下，max-age 足够用了。但在依赖各种"),s("strong",[t._v("代理")]),t._v("的大型架构中，我们不得不考虑"),s("strong",[t._v("代理服务器")]),t._v("的缓存问题。s-maxage 就是用于表示 cache 服务器上（比如 cache CDN）的缓存的有效时间的，并只对 public 缓存有效。")]),t._v(" "),s("p",[t._v("(10.24 晚更新。感谢评论区@敖天羽的补充，此处应注意这样一个细节：s-maxage 仅在代理服务器中生效，客户端中我们只考虑 max-age。)")]),t._v(" "),s("p",[t._v("那么什么是 public 缓存呢？说到这里，Cache-Control 中有一些适合放在一起理解的知识点，我们集中梳理一下：")]),t._v(" "),s("h4",{attrs:{id:"public-与-private"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-与-private"}},[t._v("#")]),t._v(" public 与 private")]),t._v(" "),s("p",[t._v("public 与 private 是针对资源是否能够被代理服务缓存而存在的一组对立概念。")]),t._v(" "),s("p",[t._v("如果我们为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存；如果我们设置了 private，则该资源只能被浏览器缓存。private 为"),s("strong",[t._v("默认值")]),t._v("。但多数情况下，public 并不需要我们手动设置，比如有很多线上网站的 cache-control 是这样的：")]),t._v(" "),s("p",[t._v("设置了 s-maxage，没设置 public，那么 CDN 还可以缓存这个资源吗？答案是肯定的。因为明确的缓存信息（例如“max-age”）已表示响应是可以缓存的。")]),t._v(" "),s("h4",{attrs:{id:"no-store-与-no-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-store-与-no-cache"}},[t._v("#")]),t._v(" no-store 与 no-cache")]),t._v(" "),s("p",[t._v("no-cache 绕开了浏览器：我们为资源设置了 no-cache 后，每一次发起请求都不会再去询问浏览器的缓存情况，而是直接向服务端去确认该资源是否过期（即走我们下文即将讲解的协商缓存的路线）。")]),t._v(" "),s("p",[t._v("no-store 比较绝情，顾名思义就是不使用任何缓存策略。在 no-cache 的基础上，它连服务端的缓存确认也绕开了，只允许你直接向服务端发送请求、并下载完整的响应。")]),t._v(" "),s("h3",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),s("p",[t._v("如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现："),s("code",[t._v("Last-Modified")]),t._v("和"),s("code",[t._v("Etag")]),t._v("。")]),t._v(" "),s("p",[t._v("当浏览器发起请求验证资源时，如果资源没有改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。")]),t._v(" "),s("h3",{attrs:{id:"last-modified-和-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since"}},[t._v("#")]),t._v(" Last-Modified 和 If-Modified-Since")]),t._v(" "),s("p",[s("code",[t._v("Last-Modified")]),t._v("表示本地文件最后修改日期，"),s("code",[t._v("If-Modified-Since")]),t._v("会将"),s("code",[t._v("Last-Modified")]),t._v("的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话会将新的资源发送回来，否则返回 304 状态码。")]),t._v(" "),s("p",[t._v("但是"),s("code",[t._v("Last-Modified")]),t._v("存在一些弊端")]),t._v(" "),s("ul",[s("li",[t._v("如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成"),s("code",[t._v("Last-Modified")]),t._v("被修改，服务端不能命中缓存导致发送相同的资源")]),t._v(" "),s("li",[t._v("因为"),s("code",[t._v("Last-Modified")]),t._v("只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源。")])]),t._v(" "),s("h3",{attrs:{id:"etag-和-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match"}},[t._v("#")]),t._v(" ETag 和 If-None-Match")]),t._v(" "),s("p",[s("code",[t._v("ETag")]),t._v("类似于文件指纹，"),s("code",[t._v("If-None-Match")]),t._v("会将当前"),s("code",[t._v("ETag")]),t._v("发送给服务器，询问该资源"),s("code",[t._v("ETag")]),t._v("是否变动，有变动的话就将新的资源发送回来。并且"),s("code",[t._v("ETag")]),t._v("优先级比"),s("code",[t._v("Last-Modified")]),t._v("高")]),t._v(" "),s("p",[t._v("以上就是缓存策略的所有内容了，看到这里，不知道你是否会有这样一个疑问。如果什么缓存策略都没设置，那么浏览器会怎么处理？")]),t._v(" "),s("p",[t._v("对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的"),s("code",[t._v("Date")]),t._v("减去"),s("code",[t._v("Last-Modified")]),t._v("值的 10%作为缓存时间。")]),t._v(" "),s("h2",{attrs:{id:"_3-实际场景应用缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-实际场景应用缓存策略"}},[t._v("#")]),t._v(" 3.实际场景应用缓存策略")]),t._v(" "),s("h3",{attrs:{id:"频繁变动的资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频繁变动的资源"}},[t._v("#")]),t._v(" 频繁变动的资源")]),t._v(" "),s("p",[t._v("对于频繁变动的资源，首先需要使用"),s("code",[t._v("Cache-Control:no-cache")]),t._v("使浏览器每次都请求服务器，然后配合"),s("code",[t._v("ETag")]),t._v("或者"),s("code",[t._v("Last-Modified")]),t._v("来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。")]),t._v(" "),s("h3",{attrs:{id:"代码文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码文件"}},[t._v("#")]),t._v(" 代码文件")]),t._v(" "),s("p",[t._v("这里特这除了 HTML 外的代码文件，因为 HTML 文件一般不换存或者缓存时间很短。")]),t._v(" "),s("p",[t._v("一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年"),s("code",[t._v("Control:max-age=31536000")]),t._v(",这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码，否则就一直使用缓存。")])])}),[],!1,null,null,null);s.default=e.exports}}]);