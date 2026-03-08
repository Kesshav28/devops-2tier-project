const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps 3-Tier CI/CD Application Working 🚀");
});

app.listen(3000, () => {
  console.log("Hello, Server running on port 3000");
});
