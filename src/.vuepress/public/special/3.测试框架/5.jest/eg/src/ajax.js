const fs = require("fs");
const path = require("path");
const ajax = (url, success) => {
  setTimeout(() => {
    success(JSON.stringify([{ name: "zfpx1" }, { name: "zfpx2" }]));
  }, 1000);
};
module.exports = ajax;
