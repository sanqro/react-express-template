import express from "express";

const app = express();

// root endpoint
app.get("/", (req, res) => res.send("This is the root endpoint! "));

app.listen(3000, () => {
  console.log("🏃 Running on http://localhost:3000");
});

module.exports = app;
