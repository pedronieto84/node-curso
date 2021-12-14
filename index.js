const express = require("express");
const app = express();
const port = 3000;

// Database Setup

const DataStore = require("nedb"),
  db = new DataStore({
    filename: __dirname + "/data/example.dat",
    autoload: true,
  });

// Middleware
app.use(express.json());

//Routes
app.get("/users", (req, res) => {
  db.find({}, (err, results) => {
    if (err) {
      console.log("error", err);
      process.exit(4);
    }
    res.json(results);
  });
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

app.put("/update-user", (req, res) => {
  const newUser = req.body;
  console.log("new user object", newUser);
  if (newUser) {
    db.update({ name: req.body.name }, newUser, (err, response) => {
      if (err) {
        console.log("error", err);
        process.exit(8);
      }
      res.json(response);
    });
  } else {
    res.send("you forgot to specify a user object");
  }
});

app.delete("/users-delete-by-name", (req, res) => {
  const name = req.body.name;
  console.log("NOM DE PERSONA A ELIMINAR", name);

  db.remove({ nom: name }, {}, (err, response) => {
    if (err) {
      console.error(err);
      process.exit(6);
    }
    res.json(response);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
