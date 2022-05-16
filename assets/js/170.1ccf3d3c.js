(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{730:function(t,s,a){"use strict";a.r(s);var n=a(38),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"五-性能监测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-性能监测"}},[t._v("#")]),t._v(" 五.性能监测")]),t._v(" "),a("p",[t._v("性能监测方案主要有两种："),a("strong",[t._v("可视化方案、可编程方案")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1-可视化监测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-可视化监测"}},[t._v("#")]),t._v(" 1.可视化监测")]),t._v(" "),a("h3",{attrs:{id:"_1-1-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-performance"}},[t._v("#")]),t._v(" 1.1 Performance")]),t._v(" "),a("p",[t._v("Performance 是 Chrome 提供给我们的开发者工具，用于记录和分析我们的应用在运行时的所有活动。它呈现的数据具有实时性、多维度的特点，可以帮助我们很好地定位性能问题。")]),t._v(" "),a("ul",[a("li",[t._v("开始记录")])]),t._v(" "),a("p",[t._v("右键打开开发者工具，选中我们的 Performance 面板：")]),t._v(" "),a("p",[t._v("当我们选中图中所标示的实心圆按钮，Performance 会开始帮我们记录我们后续的交互操作；当我们选中圆箭头按钮，Performance 会将页面重新加载，计算加载过程中的性能表现。"),a("br"),t._v("\ntips：使用 Performance 工具时，为了规避其它 Chrome 插件对页面的性能影响，我们最好在无痕模式下打开页面：")]),t._v(" "),a("ul",[a("li",[t._v("简要分析")])]),t._v(" "),a("p",[t._v("这里我打开掘金首页，选中 Performance 面板中的圆箭头，来看一下页面加载过程中的性能表现：")]),t._v(" "),a("p",[t._v("从上到下，依次为概述面板、详情面板。下我们先来观察一下概述面板，了解页面的基本表现：")]),t._v(" "),a("p",[t._v("我们看右上角的三个栏目：FPS、CPU 和 NET。")]),t._v(" "),a("p",[a("strong",[t._v("FPS")]),t._v("：这是一个和动画性能密切相关的指标，它表示每一秒的帧数。图中绿色柱状越高表示帧率越高，体验就越流畅。若出现红色块，则代表长时间帧，很可能会出现卡顿。图中以绿色为主，偶尔出现红块，说明网页性能并不糟糕，但仍有可优化的空间。")]),t._v(" "),a("p",[a("strong",[t._v("CPU")]),t._v("：表示 CPU 的使用情况，不同的颜色片段代表着消耗 CPU 资源的不同事件类型。这部分的图像和下文详情面板中的 Summary 内容有对应关系，我们可以结合这两者挖掘性能瓶颈。")]),t._v(" "),a("p",[a("strong",[t._v("NET")]),t._v("：粗略的展示了各请求的耗时与前后顺序。这个指标一般来说帮助不大。")]),t._v(" "),a("ul",[a("li",[t._v("挖掘性能瓶颈")])]),t._v(" "),a("p",[t._v("详情面板中的内容有很多。但一般来说，我们会主要去看 Main 栏目下的火焰图和 Summary 提供给我们的饼图——这两者和概述面板中的 CPU 一栏结合，可以帮我们迅速定位性能瓶颈（如下图）。")]),t._v(" "),a("p",[t._v("先看 CPU 图表和 Summary 饼图。CPU 图表中，我们可以根据颜色填充的饱满程度，确定 CPU 的忙闲，进而了解该页面的总的任务量。而 Summary 饼图则以一种直观的方式告诉了我们，哪个类型的任务最耗时（从本例来看是脚本执行过程）。这样我们在优化的时候，就可以抓到“主要矛盾”，进而有的放矢地开展后续的工作了。")]),t._v(" "),a("p",[t._v("再看 Main 提供给我们的火焰图。这个火焰图非常关键，它展示了整个运行时主进程所做的每一件事情（包括加载、脚本运行、渲染、布局、绘制等）。x 轴表示随时间的记录。每个长条就代表一个活动。更宽的条形意味着事件需要更长时间。y 轴表示调用堆栈，我们可以看到事件是相互堆叠的，上层的事件触发了下层的事件。")]),t._v(" "),a("p",[t._v("CPU 图标和 Summary 图都是按照“类型”给我们提供性能信息，而 Main 火焰图则将粒度细化到了每一个函数的调用。到底是从哪个过程开始出问题、是哪个函数拖了后腿、又是哪个事件触发了这个函数，这些具体的、细致的问题都将在 Main 火焰图中得到解答。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-lighthouse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-lighthouse"}},[t._v("#")]),t._v(" 1.2 LightHouse")]),t._v(" "),a("blockquote",[a("p",[t._v("Lighthouse 是一个开源的自动化工具，用于改进网络应用的质量。 你可以将其作为一个 Chrome 扩展程序运行，或从命令行运行。 为 Lighthouse 提供一个需要审查的网址，它将针对此页面运行一连串的测试，然后生成一个有关页面性能的报告。")])]),t._v(" "),a("p",[t._v("上述分别是页面性能、PWA（渐进式 Web 应用）、可访问性（无障碍）、最佳实践、SEO 五项指标的跑分。孰强孰弱，我们一看便知。")]),t._v(" "),a("p",[t._v("向下拉动 Report 页，我们还可以看到每一个指标的细化评估：")]),t._v(" "),a("p",[t._v("在“Opportunities”中，LightHouse 甚至针对我们的性能问题给出了可行的建议、以及每一项优化操作预期会帮我们节省的时间。这份报告的可操作性是很强的——我们只需要对着 LightHouse 给出的建议，一条一条地去尝试，就可以看到自己的页面，在一秒一秒地变快。")]),t._v(" "),a("p",[t._v("除了直接下载，我们还可以通过命令行使用 LightHouse：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g lighthouse\nlighthouse https://juejin.im/books\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("同样可以得到掘金小册的性能报告。")]),t._v(" "),a("p",[t._v("此外，从 Chrome 60 开始，DevTools 中直接加入了基于 LightHouse 的 Audits 面板：")]),t._v(" "),a("h2",{attrs:{id:"_2-可编程监测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-可编程监测"}},[t._v("#")]),t._v(" 2.可编程监测")]),t._v(" "),a("h3",{attrs:{id:"_2-1-w3c-性能-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-w3c-性能-api"}},[t._v("#")]),t._v(" 2.1 W3C 性能 API")]),t._v(" "),a("p",[t._v("W3C 规范为我们提供了 Performance 相关的接口。它允许我们获取到用户访问一个页面的每个阶段的精确时间，从而对性能进行分析。我们可以将其理解为 Performance 面板的进一步细化与可编程化。")]),t._v(" "),a("p",[t._v("当下的前端世界里，数据可视化的概念已经被炒得非常热了，Performance 面板就是数据可视化的典范。那么为什么要把已经可视化的数据再掏出来处理一遍呢？这是因为，需要这些数据的人不止我们前端——很多情况下，后端也需要我们提供性能信息的上报。此外，Performance 提供的可视化结果并不一定能够满足我们实际的业务需求，只有拿到了真实的数据，我们才可以对它进行二次处理，去做一个更加深层次的可视化。")]),t._v(" "),a("p",[t._v("在这种需求背景下，我们就不得不祭出 Performance API 了。")]),t._v(" "),a("ul",[a("li",[t._v("访问 performance 对象")])]),t._v(" "),a("p",[t._v("performance 是一个全局对象。我们在控制台里输入 window.performance，就可一窥其全貌：")]),t._v(" "),a("ul",[a("li",[t._v("关键时间节点")])]),t._v(" "),a("p",[t._v("在 performance 的 timing 属性中，我们可以查看到如下的时间戳：")]),t._v(" "),a("p",[t._v("这些时间戳与页面整个加载流程中的关键时间节点有着一一对应的关系：")]),t._v(" "),a("p",[t._v("通过求两个时间点之间的差值，我们可以得出某个过程花费的时间，举个 🌰：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DNS查询耗时")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TCP连接耗时")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectStart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内容加载耗时")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestStart\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("除了这些常见的耗时情况，我们更应该去关注一些"),a("strong",[t._v("关键性能指标")]),t._v("：firstbyte、fpt、tti、ready 和 load 时间。这些指标数据与真实的用户体验息息相关，是我们日常业务性能监测中不可或缺的一部分：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// firstbyte：首包时间")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart – timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fpt：First Paint Time, 首次渲染时间 / 白屏时间")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseEnd – timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tti：Time to Interact，首次可交互时间")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domInteractive – timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ready：HTML 加载完成时间，即 DOM 就位的时间")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domContentLoaded – timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load：页面完全加载时间")]),t._v("\ntiming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadEventStart – timing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("以上这些通过 Performance API 获取到的时间信息都具有较高的准确度。我们可以对此进行一番格式处理之后上报给服务端，也可以基于此去制作相应的统计图表，从而实现更加精准、更加个性化的性能耗时统计。")]),t._v(" "),a("p",[t._v("此外，通过访问 performance 的 memory 属性，我们还可以获取到内存占用相关的数据；通过对 performance 的其它属性方法的灵活运用，我们还可以把它耦合进业务里，实现更加多样化的性能监测需求——灵活，是可编程化方案最大的优点。")])])}),[],!1,null,null,null);s.default=e.exports}}]);