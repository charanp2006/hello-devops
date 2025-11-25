const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("OEE");
  res.send("Project deployed Automatically ! Testing ");
});

app.listen(3000, () => console.log("App running on port 3000"));
