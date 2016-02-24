var express = require('express');
var router = express.Router();
//leancloud init
var AV = require('leanengine');

/* GET home page. */
router.get('/', function(req, res, next) {
    var obj = {}, ID = req.params.id;
    console.log(ID);
    var query = new AV.Query('Lib');
    query.get(ID).then(function(post) {
        obj = post.toJSON();
        obj.title = obj.brand + " " + obj.top_type + " " + obj.name;
        console.log(obj);
        return res.render('index', obj);
    }, function(error) {
        res.status(error.status || 500);
        res.render('error', {
            code: error.code,
            message: error.message,
            error: {}
        });
    });
    res.render('index', { title: '器材党' , message: '即将隆重上线！'});
});

module.exports = router;
