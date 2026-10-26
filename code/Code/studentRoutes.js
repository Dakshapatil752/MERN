const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to MERN Stack!");
});

app.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "Daksha" },
    { id: 2, name: "Rahul" }
  ]);
});

app.post("/students", (req, res) => {
  res.status(201).json({
    message: "Student added successfully",
    student: req.body
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
