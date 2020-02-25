/**
 * 2019 新型冠状病毒（2019-nCoV） Model
 * */

var mongoose = require('../common/db')

/**
 * 基本属性
 * */
var nCoV = new mongoose.Schema({
  pkid: String, //GUID
  provinces: String, //省份
  date: Date, //统计日期
  confirmed_case: Number, //确诊
  suspected_case: Number, //疑似
  death_case: Number, //死亡
  cured_case: Number, //治愈

  isValid: Boolean, //有效性。1：有效，0：无效
  creater: String,
  createdate: Date,
  updater: String,
  updatedate: Date
})

/**
 * 常用方法
 * */

//查询所有
nCoV.statics.findAll = function(callBack) {
  this.find({}, callBack)
}

nCoV.statics.findAll = function(pkid, callBack) {
  this.find({ pkid: pkid }, callBack)
}

nCoV.statics.findByProvinces = function(provinces, callBack){
    this.find({ provinces: provinces }, callBack)
}

var ncovModel = mongoose.model('ncov', nCoV)
module.exports = ncovModel
