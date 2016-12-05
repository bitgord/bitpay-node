var express = require('express');
var router = express.Router();

/* POST payments notification callbacks. */
exports.notification = function(req, res) {
  console.log(req.body);
  res.status(200);
});

module.exports = router;
