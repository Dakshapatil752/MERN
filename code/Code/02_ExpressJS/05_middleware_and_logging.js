const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => res.send("Check the terminal for request logs."));

app.listen(5000, () => console.log("Listening on port 5000"));
