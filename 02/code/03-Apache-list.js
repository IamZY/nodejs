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

    fs.readFile('./template.html', function (error, data) {
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
            // console.log(files)

            var content = ''
            files.forEach(function (item) {
                // 在ES6中``字符串中可以使用${}来引用变量
                content += `
                    <script>addRow("${item}", "${item}", 1, 0, "0 B", 1543497211, "2018/11/29 下午9:13:31");</script>
                `
            })
            data = data.toString()
            // 字符串解析替换
            data = data.replace('replacediv',content)
            // console.log(data)
            // 发送解析替换过后的数据
            res.end(data)
        })

        
    })

    // console.log(filePath, wwwDir + filePath)

})


server.listen(3000, function () {
    console.log('server is running...')
})