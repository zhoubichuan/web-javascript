let qs = require("./qs");

describe("parse", () => {
  test("one", () => {
    expect(qs.parse("name=aaa").name).toBe("aaa");
  });
  test("two", () => {
    expect(qs.parse("name=aaa&age=9").age).toBe("9");
  });
});

describe("stringify", () => {
  test("one", () => {
    expect(qs.stringify({ name: "aaa" })).toBe("name=aaa");
  });
  test("two", () => {
    expect(qs.stringify({ name: "aaa", age: "9" })).toBe("name=aaa&age=9");
  });
});
