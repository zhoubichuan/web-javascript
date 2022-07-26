const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("ok");
});
app.post("/post", (req, res) => {
  res.json(req.body);
});
app.listen(8088);
module.exports = app;
