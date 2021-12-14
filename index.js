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

// Middleware
app.use(express.json());

// Us de subrutes
app.use("/users", userRoutes);

//Routes
app.get("/get", (req, res) => {
  res.send("Això es un GET");
});

app.post("/user", (req, res) => {
  console.log("vull crear el user", req.body);
  const user = req.body;
  if (user) {
    db.insert(user, (err, response) => {
      if (err) {
        console.log("error", err);
        process.exit(3);
      }
      console.log("user creat", response);
    });
  } else {
    res.send("no has definit cap user");
  }
  res.json(req.body); // res.json es com res.send pero especificant que el content type es JSON a la metadata
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
