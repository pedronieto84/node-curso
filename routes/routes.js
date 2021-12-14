const express = require("express");
const router = express.Router();

router.post("/france", (req, res) => {
  console.log("requested users from France");
  res.send({ where: "FRANCE" });
});

router.post("/italy", (req, res) => {
  const continent = req.query.continent;
  const sea = req.query.sea;
  console.log("requested users from Italy");
  res.send({ where: "ITALY", continent, sea });
});

module.exports = router;
