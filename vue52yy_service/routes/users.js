var express = require('express')
var router = express.Router()

var crypo = require('crypo') //加密插件 npm i crypo
var user = require('../model/user')

const init_token = 'TKL02o'

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  user.findAll((err, data)=>{
       res.json({ status: 0, message: 'Success', data: data })
  })
})

/* 新增自定义路由地址 */

//用户登录接口
router.post('/login', (req, res, next) => {})

//用户注册接口
router.post('/register', (req, res, next) => {
  if (!req.body.username) res.json({ status: 1, message: '用户名不能为空' })
  if (!req.body.password) res.json({ status: 1, message: '密码为空' })
  user.findByUsername(req.body.username, (err, userSave) => {
    if (userSave.length !== 0) res.json({ status: 1, message: '用户已注册' })
    else {
      let registerUser = new user({
        username: req.body.username,
        password: req.body.password,
        userMail: req.body.userMail,
        userPhone: req.body.userPhone,
        userAdmin: 0,
        userPower: 0,
        userStop: 0
      })
      registerUser.save(() => {
        res.json({ status: 0, message: '注册成功' })
      })
    }
  })
})

//用户登录接口
router.post('/login', (req, res, next) => {
  if (!req.body.username) res.json({ status: 1, message: '用户名为空' })
  if (!req.body.password) res.json({ status: 1, message: '密码为空' })

  user.findUserLogin(req.body.username, req.body.password, (err, userSave) => {
    if (userSave.length !== 0) {
      let token_after = getMD5Password(userSave[0]._id)
      res.json({
        status: 0,
        data: { token: token_after, user: userSave },
        message: '登录成功'
      })
    } else res.json({ status: 1, message: '用户名或密码错误' })
  })
})

//MD5 加密
function getMD5Password(id) {
  let md5 = crypto.createHash('md5')
  let token_before = id + init_token
  // res.json(userSave[0].id);
  return md5.update(token_before).digest('hex')
}

module.exports = router
