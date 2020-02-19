var express = require("express");
var router = express.Router();
var SapValueData = require("../data/sapValueData");

/* GET home page. */
router.get("/", function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.render("index");
});

router.get("/:values", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  if (req.params.values === "sap-values") {
    let data = SapValueData;
    res.json(data);
  } else {
    let data = {
      label: null,
      value: null || { LyeSapValue: null, PotassiumSapValue: null }
    };
    res.json(data);
  }
});

module.exports = router;
