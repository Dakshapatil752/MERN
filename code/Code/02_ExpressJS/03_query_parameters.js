const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const keyword = req.query.keyword || "";
  res.json({ keyword, message: `Search requested for: ${keyword}` });
});

// Try: http://localhost:5000/search?keyword=react
app.listen(5000, () => console.log("Listening on port 5000"));
