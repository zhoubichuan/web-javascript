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
  - Number:null返回0；undefined：返回NaN；字符串十六进制转换为十进制整数值，其他字符串NaN，对象会调用valueOf,如果转换结果是NaN，则调用toString，然后按照字符串规则转换；
  - parseInt:更专注于字符串是否包含数值模式。字符串最前面的空格会被忽略，从第一个非空格字符开始转换。如果第一个字符不是数值字符、加号、减号，parseInt立即返回NaN。这就意味着字符串也是返回NaN。如果第一个字符为数值字符、加号、减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数值字符。
  - parseFloat:和parseInt函数类似，都是从位置0开始检测每个字符，同样，它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略；它的另一个不同之处在于，它始终忽略字符串开头的零。这个函数能识别前面讨论的所有浮点格式，以及十进制。十六进制数值始终会返回0，因为parseFloat只解析十进制，因此不能指定底数

