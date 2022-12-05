## 单元测试

### 1.手工测试

### 2.assert 断言

### chai

## 3.测试框架

### 1.qunit 支持 jQuery

### 2.mocha 支持 Node、Browser express

#### 1.安装

* 全局安装

```
npm install --global mocha
```

* 项目依赖（开发依赖）

```
npm i mocha chai -D
```

#### 2.被测试的代码

* calculator.js

```
exports.add = (a, b) => a + b;
exports.minus = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
```

#### 3.测试用例

* 新建测试文件夹 test
* 新建测试用例 1.test.js

```
const { assert } = require("chai");
const { add, minus, multiply, divide } = require("../calculator");

describe("calulator", () => {
  it("add", () => {
    assert.equal(add(1, 2), 3);
  });
});
```

#### 4.运行测试用例

* 项目根目录

```
mocha
```

* 结果

```
calulator
    √ add


  1 passing (13ms)
```

### 3.jasmine 支持 Node、Browser、Vue

### 4.karma 支持 Angular

### 5.jest 支持 React
