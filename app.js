const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("OEE");
  res.send("Project Deployed Automatically!");
});

app.listen(3000, () => console.log("App running on port 3000"));
