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
server.on('request',function(){
    console.log('收到客户端的请求')
})

// 4 启动服务器 绑定端口号
server.listen(3000,function(){
    console.log('服务器启动成功')
})

