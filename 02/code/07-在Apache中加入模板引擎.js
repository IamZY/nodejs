var http = require('http')
var fs = require('fs')
var template = require('art-template')

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

    fs.readFile('./template-apache.html', function (error, data) {
        if (error) {
            return res.end('404 Not Found.')
        }
        // 如何得到 wwwDir目录中的文件名和目录名
        // fs.renddir
        // 替换文件名和目录名到Template.html中
        // 模板引擎

        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir.')
            }

            var htmlStr = template.render(data.toString(), {
                title:'hhh'
            })

            res.end(htmlStr)
        })


    })

    // console.log(filePath, wwwDir + filePath)

})


server.listen(3000, function () {
    console.log('server is running...')
})