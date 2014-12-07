var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular Demo w/ Express' });
});

router.get('/page2', function(req, res) {
  res.render('page2', { title: 'Teams' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Log In' });
});

module.exports = router;
