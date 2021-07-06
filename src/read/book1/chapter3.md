---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 第三章 语言基础
- undefined:
  - 包含undefined值的变量跟未定义变量是有区别的，变量被声明了，只是没有赋值，为undefined;输出一个未声明的变量，会导致报错
  - 无论是声明还是未声明，typeof 返回的都是字符串undefined
- null
  - 在定义将要保存对象值的变量时，建议使用null来初始化，不要使用其他值。这样，只要检查这个变量的值是不是null就可以知道这个变量是否在后来被重新赋予一个对象的引用。
- NaN
  - NaN不等于NaN
  - Number:null返回0，undefined：返回NaN,十六进制转换为十进制整数值，其他字符串NaN，对象会调用valueOf,如果转换结果是NaN，则调用toString

