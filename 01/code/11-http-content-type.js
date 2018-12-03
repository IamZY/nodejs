// 可以同时开启多个服务 但是端口号不能重复占用

var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    // 再服务器默认发送的数据 其实是utf-8编码的内容
    // 但是浏览器不知道是utf-8的编码的内容
    // 浏览器在不知道服务器相应内容编码的情况下 会按照当前操作系统的默认编码解析
    // 中文操作系统默认的gbk
    // 解决方法 正确的告诉浏览器发送的内容是什么方法
    // require.setHeader('Content-Type','text/plain;charset=utf-8')
    // require.end('hello 世界')

    var url = req.url

    if(url == '/plain'){
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('hello 中国')
    } else if(url == '/html'){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('<p>hello world<a href="">click me</a></p>')
    } else {

    }


})


server.listen(3000,function(){
    console.log('server is running...')
})