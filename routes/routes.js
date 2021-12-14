const express = require("express");
const router = express.Router();

router.post("/france", (req, res) => {
  console.log("requested users from France");
  res.send({ where: "FRANCE" });
});

router.post("/italy", (req, res) => {
  console.log("requested users from Italy");
  res.send({ where: "ITALY" });
});

module.exports = router;
