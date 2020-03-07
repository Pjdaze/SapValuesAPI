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

var whitelist = [
  "https://pjdaze.github.io/simple-lye",
  "https://pjdaze.github.io/simple-lye/#",
  "https://pjdaze.github.io",
  "http://localhost:3000",
  "https://sapvalues-api.herokuapp.com/sap-values"
];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

// Then pass them to cors:
router.get(cors(corsOptions));

router.get("/:oil", (req, res) => {
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
