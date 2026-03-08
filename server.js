const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Guys, I'm Keshav This side and I my DevOps 2-Tier CI/CD Application Working 🚀 and I'm soo happyy now");
});

app.listen(3000, () => {
  console.log("Hello, Server running on port 3000");
});
