function ajax(url, success) {
  setTimeout(function() {
    success({
      code: 0,
      users: [{ name: "aaa1" }, { name: "aaa2" }, { name: "aaa3" }]
    });
  }, 1000);
}
module.exports = ajax;
