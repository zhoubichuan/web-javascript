const http = require("http");
const querystring = require("querystring");

const app = http.createServer();

app.on("request", (req, res) => {
  console.log(req.method);
  if (req.method === "POST") {
    let data = "";
    console.log(req.headers);
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      data = querystring.parse(data);
      res.write(querystring.stringify(data));
      res.end();
    });
  } else {
    res.write(querystring.stringify({
      name: "zzb"
    }));
    res.end();
  }
});

app.listen(4000, () => {
  console.log("已经连接上了4000");
});