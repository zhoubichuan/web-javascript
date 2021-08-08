---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 第三章: 语言基础
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
- Symbol:for-of循环会在相关对象上使用Symbol.iterator属性，那么可以通过在自定义对象上重新定义Symbol.iterator的值，来改变for-of在迭代该对象时的行为。这些内置符号属性都是不可写、不可枚举、不可配置的。
  - Symbol.asyncIterator：一个方法，该方法返回对象默认的AsyncIterator。由for-await-of语句使用
    ```js
    class Emitter{
      constructor(max){
        this.max = max
        this.asyncIdx = 0
      }
      async *[Symbol.asyncIterator](){
        while(this.asyncIdx < this.max){
          yield new Promise((resolve) => resolve(this.asyncIdx++))
        }
      }
    }
    async function asyncCount(){
      let emitter = new Emitter(5)
      for await(const x of emitter){
        conosle.log(x)
      }
    }
    asyncCount()
    ```
    :::warning
    Symbol.asyncIterator是ES2018 规范定义的，因此只有版本非常新的浏览器支持它。
    :::
  - Symbol.hasInstance：一个方法，该方法决定一个构造器对象是否认可一个对象是他的实例。在ES6中，instanceof操作符会使用 Symbol.hasInstance 函数来确定关系。
    ```js
    function Foo(){
      let f = new Foo()
      console.log(f instanceof Foo) // true
      // console.log(Foo[Symbol.hasInstance](f))
    }
    ```
    这个属性定义在Function 的原型上，因此默认在所有函数和类上都可以调用。由于instanceof操作符会在原型链上寻找这个属性定义，就跟在原型链上寻找其他属性一样，因此可以子啊继承的类上通过静态方法重新定义这个函数。
    ```js
    class Bar {}
    class Baz extends Bar {
      static [Symbol.hasInstance] () {
        return false
      }
    }
    let b = new Baz()
    console.log(b instanceof Bar)  // true
    console.log(Baz[Symbol.hasInstace](b)) //false
    ```
  - Symbol.isConcatSpreadable:一个布尔值，如果是true,则意味着对象应该用Array.prototype.concat()打平其数组元素。
  - Symbol.iterator:一个方法，该方法返回对象默认的迭代器。由for-of语句使用
    ```js
    class Emitter {
      constructor(max){
        this.max = max
        this.idx = 0
      }

      *[Symbol.iterator](){
        while(this.idx < this.max) {
          yield this.idx ++
        }
      }
    }

    function count(){
      let emitter = new Emitter(5)

      for(const x of emitter){
        console.log(x)
      }
    }

    count()
    ```
  - Symbol.match:一个正则表达式方法，该方法用正则表达式去匹配字符串。由String.prototype.match()方法使用
    ```js
    class FooMatcher {
      static [Symbol.match](target) {
        return target.includes('foo')
      }
    }
    console.log('foobar'.match(FooMatcher)) //true

    class StringMatcher {
      constructor(str){
        this.str = str
      }

      [Symbol.match](target){
        return target.includes(this.str)
      }
    }

    console.log('foobar'.match(new StringMatcher('foo'))) //true
    ```
  - Symbol.replace:一个表达式的方法，该方法替换一个字符串中匹配的子串。由String.prototype.replace()方法使用
    ```js
    class StringReplacer {
      constructor(str){
        this.str = str
      }

      [Symbol.replace](target, replacement) {
        return target.split(this.str).join(replacement)
      }
    }

    console.log('barfoobaz'.replace(new StringReplacer('foo'),'qux'))
    ```
  - Symbol.search:一个正则表达式方法，该方法返回字符串中匹配正则表达式的索引。由String.prototype.search(）方法使用
    ```js
    class FooSearcher {
      constructor(str){
        this.str = str
      }

      [Symbol.search](target){
        return target.indexOf('foo')
      }
    }
    console.log('foobar'.search(new StringSearcher('foo'))) // 0
    ```
  - Symbol.species:一个函数值，该函数作为创建派生对象的构造函数
    ```js
    class Baz extends Array {
      static get [Symbol.species](){
        return Array
      }
    }

    console.log(baz instanceof Baz) // false
    ```
  - Symbol.split:一个正则表达式方法，该方法在匹配正则表达式的索引位置拆分字符串。由String.prototype.split()方法使用。
  - Symbol.toPrimitive:一个方法，该方法将对象转换为相应的原始值。由ToPrimitive抽象操作使用
    ```js
    class Bar {
      constructor(){
        this[Symbol.toPrimitive] = function(hint){
          switch(hint){
            case 'number':
              return 3;
            case 'string':
              return 'string bar';
            case 'default':
            default:
              return 'default bar' 
          }
        }
      }
    }
    let bar = new Bar()
    console.log(3 + bar) // "3default bar"
    ```
  - Symbol.toStringTag:一个字符串，该字符串用于创建对象的默认字符串描述。内置方法Object.prototype.toString()使用。
    ```js
    class Bar{
      constructor(){
        this[Symbol.toStringTag] = 'Bar'
      }
    }

    let bar = new Bar()
    conosle,.log(bar.toString()) //[object Bar]
    ```
  - Symbol.unscopables:一个对象，该对象所有的以及继承的属性，都会从关联对象的witch环境绑定中排除。设置这个符号并让其映射对应属性的键值为true,就可以阻止该属性出现在with环境绑定中
    ```js
    let o = { foo: 'bar'}
    
    with (o) {
      console.log(foo) //bar
    }

    o[Symbol.unscopables] = {
      foo: true
    }

    with (o) {
      console.log(foo) // ReferenceError
    }
    ```
    ::: warning
    不推荐使用witch,因此也不推荐使用Symbol.unscopables
    :::
- Object 类型
  - hasOwnProperty:用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如o.hasOwnProperty('name')）或符号。
  - isPrototypeOf:用于判断当前对象是否为另一个对象的原型。
  - propertyIsEnumerable:用于判断给定的属性是否可以使用。与hasOwnProperty一样，属性名必须是字符串。
  - toLocaleString():返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
  - toString():返回对象的字符串表示。
  - valueOf():返回对象对应的字符串、数值或布尔值表示。通常与toSting()的返回值相同。
- 操作符
  - 1.递增/递减操作符
    - 无论使用前缀递增还是前缀递减操作符，变量的值都会在语句被求值之前改变。
    - 前缀递增或递减操作符，在跟其他操作混合时，差异比较明显。
    - 对于字符串，如果是有效数值形式，则转换为数值子再应用改变。变量类型从字符串变为数值。
      ```js
      let s1 = '2'
      s1++ // 值变为数值3
      ```
- 语句
  - for-in语句：一种严格的迭代语句，用于枚举对象中的非符号键属性
  - for-of语句：一种严格的迭代语句，用于遍历可迭代对象的元素
  - 标签语句：用于给语句加上标签
    ```js
    label: statement
    ```
  - with语句：主要场景是针对一个对象反复操作，这时候将代码作用域设置为该对象能提供便利
    ```js
    let qs = location.search.substring(1)
    let hostName = location.hostname
    with(location){
      let qs = search.substring(1)
      let hostName = hostname
    }
    ```
    


