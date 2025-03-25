const fs = require("fs");
const path = require("path");
const ajax = (url, success) => {
  setTimeout(() => {
    success(JSON.stringify([{ name: "aaa1" }, { name: "aaa2" }]));
  }, 1000);
};
module.exports = ajax;
