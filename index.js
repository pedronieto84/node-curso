const express = require("express");
const app = express();
const port = 3000;

app.get("/get", (req, res) => {
  res.send("Això es un GET");
});

app.post("/post", (req, res) => {
  res.send("Això es un POST");
});

app.put("/put", (req, res) => {
  res.send("Això es un PUT");
});

app.delete("/delete", (req, res) => {
  res.send("Això es un delete");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
