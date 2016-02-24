var express = require('express');
var router = express.Router();

/* GET feedback page. */
// 反馈对象
router.get('/', function(req, res, next) {
  return res.render('feedback', { title: '器材党-意见反馈' , message: '留下意见吧，我们会改的！'});
});

module.exports = router;
