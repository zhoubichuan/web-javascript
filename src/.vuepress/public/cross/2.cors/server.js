const http = require("http");
const querystring = require("querystring");

const app = http.createServer();

app.on(
  "request",
  (req, res) => {
    console.log(req.method);
    //   if (req.method === "POST") {
    let data = "";
    console.log(req.headers);
    req.on("data", chunk => {
      data += chunk;
    });
    /* 1.设置4000可以跨域 */
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");

    /* 2.前端发头过来了 */
    res.setHeader("Access-Control-Allow-Headers", "name");
    req.on("end", () => {
      data = querystring.parse(data);
      res.write(querystring.stringify(data));
      res.end();
    });
  }
  // }
);

app.listen(3000, () => {
  console.log("已经连接上了3000");
});
