/**
 * 2019 新型冠状病毒（2019-nCoV） 路由
 * */

var express = require('express');
var router = express.Router();
var nCoV = require('../model/nCoV');

var common = require('../common/common');

router.get('/', function (req, res, next) {
    res.send('2019nCoV connection');
});

router.get('/insert', (req, res, next) => {
    var record = new nCoV({
        pkid: common.Guid(),//GUID
        provinces: '甘肃',//req.body.provinces,//省份
        date: new Date(),//统计日期
        confirmed_case: 0,//确诊
        suspected_case: 0,//疑似
        death_case: 0,//死亡
        cured_case: 0,//治愈

        isValid: 1,//有效性。1：有效，0：无效
        creater: '52yy',
        createdate: new Date(),
        updater: '52yy',
        updatedate: new Date(),
    });
    record.save((err) => {
        if (err)
            res.json({status:1, message:err});
        else
            res.json({status:0, message:'insert success'})
    });
});

module.exports = router;