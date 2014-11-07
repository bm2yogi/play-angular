var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular Demo w/ Express' });
});

router.get('/page2', function(req, res) {
  res.render('page2', { title: 'Teams' });
});

module.exports = router;
