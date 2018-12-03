// 依赖项放在文件模块最上面
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

// Google chrome 查看json的工具 JSON View

var comments = [
    {
        name: '张三',
        message: '今天天气不错',
        datetime: '2018-12-1'
    },
    {
        name: '张三2',
        message: '今天天气不错',
        datetime: '2018-12-1'
    },
    {
        name: '张三3',
        message: '今天天气不错',
        datetime: '2018-12-1'
    },
    {
        name: '张三4',
        message: '今天天气不错',
        datetime: '2018-12-1'
    },
    {
        name: '张三5',
        message: '今天天气不错',
        datetime: '2018-12-1'
    }
]

// /commentAction?name=eqweqwe&message=qweqweqweqweqwe
// 对于这种需要用户填写的 任意的内容 不可能判断完整的url路径
// 只要需要判定 请求的路径是 /commentAction 即可

// 哪些资源可以被用户访问 哪些不可以 可以使用代码进行非常灵活的控制
http.
    createServer(function (req, res) {

        // var url = req.url
        // 使用url.parse 方法将路径解析为一个方便操作的对象 第二个参数为true的时候 格式化传递的参数
        var parseUrl = url.parse(req.url,true)

        // 不包含问号之后的路径
        var pathName = parseUrl.pathname

        if (pathName === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found..')
                }

                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })

                res.end(htmlStr)

            })
        } else if (pathName.indexOf('/public/') === 0) {
            // public 里面的资源请求方式
            //  /public/css/main.css
            // 统一处理 访问public文件夹中的资源 /public/ 开头的
            fs.readFile('.' + pathName, function (err, data) {
                if (err) {
                    res.end('404 Not Found..')
                }
                // console.log(url)
                res.end(data)

            })
        } else if (pathName === '/post') {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    res.end('404 Not Found..')
                }

                res.end(data)
            })
        } else if (pathName === '/commentAction') {

            // 无论问号后面是什么都可以传递进来
            // console.log('收到表单请求...',parseUrl.query)

            // 一次请求对应一次响应 响应结束这次请求也就结束了
            // res.end(JSON.stringify(parseUrl.query))
            
            // 已经收到数据
            // 获取表单提交的数据
            var comment = parseUrl.query
            // 生成日期对象 然后存储到数组中
            comment.datetime = '2018-12-1 21点23分'
            comments.push(comment)
            // 数组往前插
            // comments.unshift()
            
            // 用户重定向到首页
            
            // 如何通过服务器让客户端重定向
            // 状态吗 302 临时重定向 301 永久重定向 statusCode
            //  
            // 在响应头中通过location中 告诉客户端自动跳转 setHeader
            res.statusCode = 302
            res.setHeader('Location', '/')
            // 一定要结束响应
            res.end()

        } else {
            // res.end('404 Not Found..')
            fs.readFile('./views/404.html', function (err, data) {
                if (err) {
                    res.end('404 Not Found..')
                }
                res.end(data)
            })
        }

    })
    .listen(3000, function () {
        console.log('server is running..')
    })