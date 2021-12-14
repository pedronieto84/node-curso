const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});

//Routes

app.get("/get", (req, res) => {
  res.send("Això es un GET");
});

app.post("/post", (req, res) => {
  res.send(req.body);
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
