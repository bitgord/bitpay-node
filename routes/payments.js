var express = require('express');
var router = express.Router();

/* GET payments notifications. */
exports.notification = function(req, res) {
  console.log(req.body);
  res.status(200);
});

module.exports = router;
