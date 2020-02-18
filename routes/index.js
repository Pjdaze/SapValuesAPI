var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/:time", (req, res) => {
  const unixToNatural = unix => {
    let date = new Date(unix * 100);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    let result = `${month} ${day} ${year}`;
    return result;
  };

  if (!isNaN(req.params.time)) {
    let result = unixToNatural(req.params.time);

    let data = { unix: req.params.time, natural: result };

    res.json(data);
  } else {
    let natural = new Date(req.params.time);
    if (!isNaN(natural)) {
      let unix = natural / 1000;
      let data = { unix, natural: req.params.time };
      res.json(data);
    } else {
      res.json({ unix: null, natural: null });
    }
  }
});

module.exports = router;
