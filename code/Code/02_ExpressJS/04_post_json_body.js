const express = require("express");
const app = express();
app.use(express.json());

app.post("/students", (req, res) => {
  const { name, course } = req.body;
  if (!name || !course) {
    return res.status(400).json({ error: "name and course are required" });
  }
  res.status(201).json({ message: "Student received", student: { name, course } });
});

app.listen(5000, () => console.log("Listening on port 5000"));
