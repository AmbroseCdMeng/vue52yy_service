/***
 * MongoDB 连接模块
 */

var mongoose = require('mongoose');
var url = 'mongodb://localhost/vue52yy';

mongoose.connect(url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

//导出模块
module.exports = mongoose;