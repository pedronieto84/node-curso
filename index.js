const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/routes.js");

// Database Setup

const DataStore = require("nedb"),
  db = new DataStore({
    filename: __dirname + "/data/example.dat",
    autoload: true,
  });

const docs = [
  { name: "one", id: 1 },
  { name: "two", id: 2 },
  { name: "three", id: 3 },
  { name: "four", id: 4 },
  { name: "five", id: 5 },
];

// Insert data
db.insert(docs, (err, response) => {
  if (err) {
    console.log("error", err);
    process.exit(0);
  }
  console.log("RESPONSE OF INSERT", response);
});

// Find certain item
db.find({ id: 3 }, (err, response) => {
  if (err) {
    console.log("error", err);
    process.exit(1);
  }
  console.log("DOCUMENT FOUND", response);
});

// Middleware
app.use(express.json());

// Us de subrutes
app.use("/users", userRoutes);

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
