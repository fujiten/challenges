var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header["Cache-Control"] = 'no-store'
  res.set('Cache-Control', 'no-store')
  console.log(res)
  console.log('hello')
  res.render('others', { title: 'others' });
});

module.exports = router;
