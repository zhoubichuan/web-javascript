const { assert } = require("chai");
describe("async", () => {
  it("async add", done => {
    setTimeout(() => {
      assert.equal(1 + 2, 3);
      done();
    }, 1000);
  });
});
