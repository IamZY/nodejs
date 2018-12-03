// 构建 web服务器
// 在 Node中提供核心模块 http
// http模块的职责就是创建编写服务器

// 1，加载http黑心模块
var http = require('http')

// 2. 使用http.createServer()创建一盒web服务器
var server = http.createServer()

// 3. 服务器对数据的服务 
//      发请求
//      接受请求
//      处理请求
//      发送响应

// 注册request请求事件
// request请求事件需要接受两个参数
//      request 请求对象
//          获取客端的请求的信息
//      response 响应对象
server.on('request',function(requset,response){
    console.log('收到客户端的请求,请求路径是:' + requset.url)

    // response对象write 给客户端发送响应数据
    // write 可以使用多次 但必须使用end结束
    response.write("hello")
    response.end()  // 告诉客户端结束响应

    // 当请求不同的路径的时候 响应的消息不一样


})

// 4 启动服务器 绑定端口号
server.listen(3000,function(){
    console.log('服务器启动成功')
})
