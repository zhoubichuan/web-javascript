let qs = require("./qs");

describe("parse", () => {
  test("one", () => {
    expect(qs.parse("name=zfpx").name).toBe("zfpx");
  });
  test("two", () => {
    expect(qs.parse("name=zfpx&age=9").age).toBe("9");
  });
});

describe("stringify", () => {
  test("one", () => {
    expect(qs.stringify({ name: "zfpx" })).toBe("name=zfpx");
  });
  test("two", () => {
    expect(qs.stringify({ name: "zfpx", age: "9" })).toBe("name=zfpx&age=9");
  });
});
