const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Daksha" }, { id: 2, name: "Rahul" }]);
});

app.get("/users/:id", (req, res) => {
  res.json({ requestedId: req.params.id });
});

app.listen(5000, () => console.log("Listening on port 5000"));
