---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---
# 性能优化专题
### content方面
- 减少HTTP请求:合并文件、CSS精灵、inlineImage
- 减少DNS查询:DNS缓存、将资源分布到恰当数量的主机名 - 减少DOM元素数量
### Server方面
- 使用 CDN
- 配置Etag
- 对组件使用Gzip压缩
### Cookie方面
- 减小cookie大小
### css方面
- 将样式表放到页面顶部
- 不使用 CSS 表达式
- 使用 <link> 不使用 @import
### Javascript方面
- 将脚本放到页面底部
- 将 javascript 和 css 从外部引入 - 压缩 javascript 和 css
- 删除不需要的脚本
- 减少 DOM 访问
### 图片方面
- 优化图片:根据实际颜色需要选择色深、压缩 - 优化 css 精灵
- 不要在 HTML 中拉伸图片
