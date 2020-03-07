var express = require("express");
var router = express.Router();
var cors = require("cors");
var SapValueData = require("../data/sapValueData");

/* GET home page. */
router.get("/", cors(corsOptions), function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.render("index");
});

router.get("/:values", cors(corsOptions), (req, res) => {
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

router.get("/:oil", cors(corsOptions), (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  if (req.params.oil === "sap-values/oil") {
    let data = SapValueData.map(x => {
      return {
        label: req.params.label
      };
    });
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
