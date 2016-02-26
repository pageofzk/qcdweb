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
        obj.title =  '| 摄影器材党聚集地 | 最新摄影器材资讯，器材价格查询，降价推送';
        obj.page = parseInt(page);
        obj.items = [];
        obj.doc_type = 'all';
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
        obj.title =  '| 摄影器材党聚集地 | 最新摄影器材资讯，器材价格查询，降价推送'
        obj.page = 1;
        obj.items = [];
        obj.doc_type = 'all';
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


/* GET news page. */
router.get('/news/p:page', function(req, res, next) {
    var obj = {}, page = req.params.page;
    if (!page || parseInt(page) <= 0) page = 1;
    var query = new AV.Query('Post');
    query.equalTo('doc_type', 'news');
    query.skip(pageNum*(page-1));
    query.limit(pageNum);
    query.addDescending("time");
    query.find().then(function(results) {
        obj.title =  '| 摄影器材党聚集地 | 最新摄影器材资讯'
        obj.page = parseInt(page);
        obj.items = [];
        obj.doc_type = 'news';
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
/* GET news page. */
router.get('/news', function(req, res, next) {
    var obj = {};
    var query = new AV.Query('Post');
    query.equalTo('doc_type', 'news');
    query.limit(pageNum);
    query.addDescending("time");
    query.find().then(function(results) {
        obj.title =  '| 摄影器材党聚集地 | 最新摄影器材资讯'
        obj.page = 1;
        obj.items = [];
        obj.doc_type = 'news';
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

/* GET buy page. */
router.get('/buy/p:page', function(req, res, next) {
    var obj = {}, page = req.params.page;
    if (!page || parseInt(page) <= 0) page = 1;
    var query = new AV.Query('Post');
    query.equalTo('doc_type', 'buy');
    query.skip(pageNum*(page-1));
    query.limit(pageNum);
    query.addDescending("time");
    query.find().then(function(results) {
        obj.title =  '| 摄影器材党聚集地 | 最新摄影器材价格查询，降价推送'
        obj.page = parseInt(page);
        obj.items = [];
        obj.doc_type = 'buy';
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
/* GET buy page. */
router.get('/buy', function(req, res, next) {
    var obj = {};
    var query = new AV.Query('Post');
    query.equalTo('doc_type', 'buy');
    query.limit(pageNum);
    query.addDescending("time");
    query.find().then(function(results) {
        obj.title =  '| 摄影器材党聚集地 | 最新摄影器材价格查询，降价推送'
        obj.page = 1;
        obj.items = [];
        obj.doc_type = 'buy';
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
