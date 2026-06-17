const express = require("express");
// const cookParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const app = express();

app.use(cookParser());

app.get("/", (req, res) => {
  //   res.cookie("Name", "Ankit");
  res.send("done");
});
app.get("/test", (req, res) => {
  //   res.cookie("Name", "Ankit");
  //   console.log(req.cookies);
  res.send("Test Page");
});
app.listen(3000, () => {
  console.log("I am running on Port 3000");
});
