var express = require('express');
var router = express.Router();
//leancloud init
var AV = require('leanengine');
var pageNum = 12;
/* GET home page. */
router.get('/p:page', function(req, res, next) {
    var obj = {}, page = req.params.page;
    if (!page || parseInt(page) <= 0) page = 1;
    var query = new AV.Query('Post');
    query.notEqualTo('doc_type', 'test');
    query.skip(pageNum*(page-1));
    query.limit(pageNum);
    query.addDescending("time");
    query.find().then(function(results) {
        obj.title =  '器材党';
        obj.page = parseInt(page);
        obj.items = [];
        // 处理返回的结果数据
        for (var i = 0; i < results.length; i++) {
            var result = results[i].toJSON();
            // 标红内容
            if (!result.price_txt)
                result.price_txt = '资讯';
            obj.items[i]=result;
        }
        return res.render('index', obj);
    }, function(error) {
        console.log('Error: ' + error.code + ' ' + error.message);
    });
});
/* GET home page. */
router.get('/', function(req, res, next) {
    var obj = {};
    var query = new AV.Query('Post');
    query.notEqualTo('doc_type', 'test');
    query.limit(pageNum);
    query.addDescending("time");
    query.find().then(function(results) {
        obj.title =  '器材党';
        obj.page = 1;
        obj.items = [];
        // 处理返回的结果数据
        for (var i = 0; i < results.length; i++) {
            var result = results[i].toJSON();
            // 标红内容
            if (!result.price_txt)
                result.price_txt = '资讯';
            obj.items[i]=result;
        }
        return res.render('index', obj);
    }, function(error) {
        console.log('Error: ' + error.code + ' ' + error.message);
    });
});

module.exports = router;
