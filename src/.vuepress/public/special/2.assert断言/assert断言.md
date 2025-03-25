# 手工测试

## 1.业务代码

* qs.js

```
//把一个字符串转成对象
function parse(str) {
  let obj = {};
  let arr = str.split("&");
  arr.forEach(item => {
    let [key, value] = item.split("=");
    obj[key] = value;
  });
  return obj;
}

//把一个对象转成字符串
function stringify(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key + "=" + obj[key]);
  }
  return arr.join("&");
}

exports.parse = parse;
exports.stringify = stringify;
```

## 2.测试用例

* qs.test.js

```
let qs = require("./qs");

const assert = require("assert");
assert(qs.parse("name=aaa").name == "aaa", "姓名必须是aaa");
assert(qs.parse("name=aaa&age=9").age == 9, "年龄必须是9");

assert(qs.stringify({ name: "aaa" }) == "name=aaa", "一个字段不同");
assert(
  qs.stringify({ name: "aaa", age: 9 }) == "name=aaa&age=9",
  "两个字段不同"
);
```

### 自己写一个 assert

```
function assert(val, message) {
  if (!val) {
    throw new error(message);
  }
}
```

* 测试用例

```
let qs = require("./qs");

function assert(val, message) {
  if (!val) {
    throw new error(message);
  }
}

assert(qs.parse("name=zpx").name == "zpx", "姓名必须是zpx");
assert(qs.parse("name=zpx&age=9").age == 9, "年龄必须是9");

assert(qs.stringify({ name: "zpx" }) == "name=zpx", "一个字段不同");
assert(
  qs.stringify({ name: "zpx", age: 9 }) == "name=zpx&age=9",
  "两个字段不同"
);
```

## 3.运行 test.js 测试

### 正确没有任何提示

```

```

### 错误提示错误
