let qs = require("./qs");

const assert = require("assert");
assert(qs.parse("name=zpx").name == "zpx", "姓名必须是zpx");
assert(qs.parse("name=zpx&age=9").age == 9, "年龄必须是9");

assert(qs.stringify({ name: "zpx" }) == "name=zpx", "一个字段不同");
assert(
  qs.stringify({ name: "zpx", age: 9 }) == "name=zpx&age=9",
  "两个字段不同"
);
