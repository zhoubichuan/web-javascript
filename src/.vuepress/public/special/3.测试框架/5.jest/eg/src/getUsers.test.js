jest.mock("./ajax");
var getUsers = require("./getUsers");
test("getUsers", function(done) {
  document.body.innerHTML = `<ul id="users"></ul>`;
  let users = document.getElementById("users");
  expect(users.nodeName.toLowerCase()).toBe("ul");
  getUsers("/users.json", "users", () => {
    let lis = users.querySelectorAll("li");
    expect(lis.length).toBe(3);
    expect(lis[0].innerHTML).toBe("aaa1");
    expect(lis[1].innerHTML).toBe("aaa2");
    expect(lis[2].innerHTML).toBe("aaa3");
    done();
  });
});
