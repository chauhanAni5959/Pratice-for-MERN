const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

// Use the environment variable if it exists, otherwise default to 3000
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("I am Home Page");
});

app.get("/twitter", (req, res) => {
  res.send("I am Twitter Page");
});

// Pass the PORT variable here so your log matches reality
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
