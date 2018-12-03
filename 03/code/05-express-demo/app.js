var express = require('express')

// 创建服务器应用程序
// http.createServer()
var app = express()

// 公开指定目录
// 公开public目录下的所有路径
app.use('/public/',express.static('./public/'))

/**
http.on('request',function(req,res) {
})
*/
app.get('/', function (req, res) {
    // 拿到查询字符串的参数
    console.log(req.query)
    res.send('hello world')
})

// 当以get请求about的时候
app.get('/about', function (req, res) {
    res.send('hello about')
})

// 相当于server.listen
app.listen(3000, function () { 
    console.log('app is running...')
})