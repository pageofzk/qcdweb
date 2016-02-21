var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '器材党' , message: '即将隆重上线！'});
});

module.exports = router;
