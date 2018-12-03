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
    
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html', function (error, data) {
            if (error) {
                res.end('404 Not Found.')
                return
                // return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + '/a.txt', function (error, data) {
            if (error) {
                res.end('404 Not Found.')
                return
                // return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (url === '/index.html') {
        fs.readFile(wwwDir + '/index.html', function (error, data) {
            if (error) {
                res.end('404 Not Found.')
                return
                // return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (url === '/apple/login.html') {
        fs.readFile(wwwDir + '/apple/login.html', function (error, data) {
            if (error) {
                res.end('404 Not Found.')
                return
                // return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else { 
        res.end('404 Not Found.')
    }

})


server.listen(3000, function () {
    console.log('server is running...')
})