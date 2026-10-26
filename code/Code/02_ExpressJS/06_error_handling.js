const express = require("express");
const app = express();

app.get("/demo-error", (req, res, next) => {
  next(new Error("Example error for learning"));
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(5000, () => console.log("Listening on port 5000"));
