const express = require("express");
const app = express();
const port = 3000;

// Funció
const exempleFuncio = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("estic dins de la promise");
      resolve(true);
    }, 3000);
  });
};
// Middleware
app.use(express.json());

app.use(async (req, res, next) => {
  console.log("middleware 1");
  const awaitRes = await exempleFuncio("aixo ho he passat com a param");
  console.log("await res", awaitRes);
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
