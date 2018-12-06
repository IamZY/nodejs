/**
 * app.js就是入口模块
 */

var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')


var app = express()

// 开放资源
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

// 配置模板引擎和body-parser 一定要在app,use(router)之前配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// router(app)
// 把路由容器挂载到app服务中
app.use(router)

app.listen(3000, function () { 
    console.log('server is running...')
})
