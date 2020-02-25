var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var ncovRouter = require('./routes/nCoV')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


/* 跨域配置 start 【此配置需要在所有路由路径配置之前执行，否则代码之前定义的路由不接受此跨域的头部配置】 */

// app.all('/test', function(req, res, next) {
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') //允许任意域名跨域
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild'
  )
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') res.send(200)
  else next()
})
/* end  */


app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/nCoV', ncovRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
