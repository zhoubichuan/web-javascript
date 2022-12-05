const { parse, stringify } = require("./qs");

console.log(parse("name=zpx").name == "zpx");
console.log(parse("name=zpx&age=9").age == 9);

console.log(stringify({ name: "zpx" }) == "name=zpx");
console.log(stringify({ name: "zpx", age: 9 }) == "name=zpx&age=9");
