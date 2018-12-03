var http = require('http')

// 创建server
var server = http.createServer()

// 
server.on('request',function(request,require){
    console.log('收到请求,请求路径是: '+request.url)
    console.log('端口号: '+request.socket.remotePort)
    // require.write('hello')
    // require.end('hello world')
    // 根据不同的请求路径 发送不同的响应结果

    var url = request.url
    // if(url == '/'){
    //     require.end('index page')
    // } else if(url == '/login'){
    //     require.end('login page')
    // } else if(url == '/register'){
    //     require.end('register page')
    // } else {
    //     require.end('404 Not Found')
    // }
    if(url == '/products'){
        var products = [
            {
                name:'apple',
                price:'8888'
            },
            {
                name:'orangle',
                price:'8888'
            },
            {
                name:'pineapple',
                price:'8888'
            }
        ]
        // 只能传递二进制或者字符串
        // 
        require.end(JSON.stringify(products))
    }


})


server.listen(3000,function(){
    console.log('服务器已经启动...')
})