var path = require("path");
var router = require("express").Router()

router.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/table.html"));
  });

  router.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reservation.html"));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  module.exports = router