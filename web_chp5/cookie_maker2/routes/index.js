var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('cookie2', 'twooooooooo!', { maxAge: 888888, path:"/", sameSite: 'none', secure: true })

  console.log(res)

  res.render('index', { title: 'Express2' });
});

module.exports = router;
