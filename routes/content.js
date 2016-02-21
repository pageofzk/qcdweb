var express = require('express');
var router = express.Router();
//leancloud init
var AV = require('leanengine');

/* GET home page. */
// 文档对象
//var Content = require("../models/Content");
router.get('/:id', function(req, res, next) {
  var obj = {}, ID = req.params.id;
  console.log(ID);
  var query = new AV.Query('Post');
  query.get(ID).then(function(post) {
    obj = post.toJSON();
    if (!obj.mall) {
      obj.mall = "";
      obj.price_txt = "";
      obj.buy_url = "";
      obj.content_html = obj.content_html.replace(/<script.*<\/script>/g, "");
      obj.content_html = obj.content_html.replace(/<div class="wp-about-author-containter-top".*<\/div>/, "");
    }
    //console.log(obj);
    return res.render('detail', obj);
  }, function(error) {
    res.status(error.status || 500);
    res.render('error', {
      code: error.code,
      message: error.message,
      error: {}
    });
  });
});

module.exports = router;
