var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use('/public/',express.static('./public/'))

// 当渲染以.art结尾的文件的时候 使用art-template模板引擎
app.engine('html', require('express-art-template'))

// 修改默认的views目录 
// app.set('views',render函数的默认路径)

// 配置中间件 解析表单解析体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var comments = [
    {
        name: '张三1',
        message: '今天天气真不错',
        datetime: '2018-11-11'
    },
    {
        name: '张三1',
        message: '今天天气真不错',
        datetime: '2018-11-11'
    },
    {
        name: '张三1',
        message: '今天天气真不错',
        datetime: '2018-11-11'
    },
    {
        name: '张三1',
        message: '今天天气真不错',
        datetime: '2018-11-11'
    },
    {
        name: '张三1',
        message: '今天天气真不错',
        datetime: '2018-11-11'
    }
]

// 当
app.get('/', function (req, res) { 
    // res.render('404.html')
    res.render('index.html', {
        comments: comments
    })
})

app.get('/admin', function (req, res) {
    // res.render('404.html')
    res.render('admin/index.html', {
        title : 'admin'
    })
})


app.get('/post', function (req, res) {
    res.render('post.html')
})

// app.get('/commentAction', function (req, res) {
//     // console.log(req.query)
//     var comment = req.query
//     comment.datatime = '2018-11-12'
//     comments.unshift(comment)

//     // res.status = 302
//     // res.setHeader('Location','/')
//     res.redirect('/')
// })

app.post('/post', function (req, res) { 
    // req.query 只能拿到get的数据
    // 在Express中 获取请求体数据

    // console.log(req.body)
    var comment = req.body
    comment.datetime = Date.now.toString()
    comments.unshift(comment)

    res.redirect('/')
})
 
 
app.listen(3000, function () { 
    console.log('server is running...')
})