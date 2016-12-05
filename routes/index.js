var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/payments:id', function(req, res) {
  res.render('payments', { title: 'Payments' });
});

module.exports = router;
