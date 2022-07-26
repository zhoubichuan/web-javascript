const request = require("supertest");
const { assert } = require("chai");
const app = require("../server");

describe("test api", () => {
  it("test /", done => {
    request(app)
      .get("/")
      .expect("Content-Type", /text\/html/)
      .expect("Content-Length", 2)
      .expect(200)
      .end((err, response) => {
        // console.log(response);
        assert.equal(response.text, "ok");
        done();
      });
  });
  it("test /post", done => {
    request(app)
      .post("/post")
      .type("form")
      .send({ name: "zpx" })
      .expect("Content-Type", /josn/)
      .expect(200)
      .end((err, response) => {
        // console.log(response);
        assert.equal(response.text, '{"name":"zpx"}');
        assert.equal(response.body.name, "zpx");
        done();
      });
  });
});
