var express = require('express');
//路由引入
var router = express.Router();
//数据库引入
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* mongoose_test route */
router.get('/mongoose_test', (req, res, next) => {
    mongoose.connect('mongodb://localhost/vue52yy', {useNewUrlParser: true});
    mongoose.Promise = global.Promise;

    /*
     * mongodb/vue52yy/Test 集合测试
     * -- 此处 test 会自动创建对应复数形式的数据库集合
     * -- 如 test --> tests
     * -- person --> people
     * -- cat --> cats
     * */
    var Test = mongoose.model('test', {
        id:Number,   //String, Boolean, Number, DateTime, Double, ObjectId
        userno:String,
        username:String,
    });

    var user = new Test({
        id:0,
        userno:'F1680502',
        username:'MCD',
        email:'mcd.951026@foxmail.com'
    });

    user.save((err)=>{
        if(err)
            console.log(err);
        else
            console.log('success insert');
    });

    res.send('MongoDb Connection Test ... ');
});

module.exports = router;
