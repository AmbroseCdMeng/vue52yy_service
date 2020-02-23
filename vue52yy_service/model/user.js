/**
 * User 数据结合
 * */

var mongoose = require('../common/db')

/* 用户数据集合 -- 基本属性 */
var user = new mongoose.Schema({
  username: String,
  password: String,
  userEmail: String,
  userPhone: String,
  userAdmin: { type: Boolean, default: false },
  userPower: Number,
  userStop: { type: Boolean, default: false }
})

/* 用户数据集合 -- 常用接口 */

//查询所有用户
// user.statics.findAll = callBack => {
//   find({}, callBack)
// }
user.statics.findAll = function(callBack) {
  console.log(this)
  this.find({}, callBack)
}

//按用户名查找
user.statics.findByUsername = function(name, callBack) {
  this.find({ username: name }, callBack)
}

//登录匹配（用户名、密码、账号状态未停用）
user.statics.findUserLogin = function(name, password, callBack) {
  this.find({ username: name, password: password, userStop: false }, callBack)
}

var userModel = mongoose.model('user', user)
module.exports = userModel
