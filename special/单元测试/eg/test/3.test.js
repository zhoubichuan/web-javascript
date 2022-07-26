const { assert } = require("chai");
describe("async", () => {
  it("async add", () => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        assert.equal(4 + 2, 6);
        resolve();
      }, 1000);
    });
  });
  it("async add", async () => {
    await new Promise(function(resolve, reject) {
      setTimeout(() => {
        assert.equal(4 + 2, 6);
        resolve();
      }, 1000);
    });
  });
});
