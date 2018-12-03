var http = require('http')
var fs = require('fs')

var server = http.createServer()

// 请求->处理
// 一个请求队医那个过一个响应
// 没有请求就没有响应
// Apache 服务器软件的目录 有一个www的目录
// 存放文件 并且通过nodejs访问文件

// 自定义地址
var wwwDir = './www'

server.on('request', function (req, res) {
    // console.log(req.url)
    var url = req.url

    var filePath = '/index.html'

    if (url !== '/') {
        filePath = url
    }

    fs.readFile(wwwDir + filePath, function (error, data) {
        if (error) {
            return res.end('404 Not Found.')
        }
        res.end(data)
    })

    // console.log(filePath, wwwDir + filePath)

})


server.listen(3000, function () {
    console.log('server is running...')
})