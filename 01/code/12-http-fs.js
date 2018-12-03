var http = require('http')

var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {

    var url = req.url

    if (url === '/pic') {

        // fs.readFile('./resource/index.html', function (error, data) {
        fs.readFile('./resource/2.jpg', function (error, data) {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败')
            } else {
                // 图片不需要指定编码
                // 字符才需要编码
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else if (url === '/html') {
        fs.readFile('./resource/index.html', function (error, data) {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败')
            } else {
                // 图片不需要指定编码
                // 字符才需要编码
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else { 
        res.end('404 page')
    }

})


server.listen(3000, function () {
    console.log('server is running...')
})