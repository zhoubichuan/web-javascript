const { assert } = require("chai");
const { add, minus, multiply, devide } = require("../calculator");

describe("calulator", () => {
  it("add", () => {
    assert.equal(add(1, 2), 3);
  });
  it("minus", () => {
    assert.equal(minus(4, 2), 2);
  });
  it("multiply", () => {
    assert.equal(multiply(1, 2), 2);
  });
  it("devide", () => {
    assert.equal(devide(6, 2), 3);
  });
});
