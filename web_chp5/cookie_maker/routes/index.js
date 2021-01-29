var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('cookie2222221', 'one', { maxAge: 900000, httpOnly: true })
  res.header["Access-Control-Allow-Origin"] = '*'
  res.header["Access-Control-Allow-Methods"] = '*'
  console.log(res)
  res.render('index', { title: 'Expres s' });
});

module.exports = router;
