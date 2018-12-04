var express = require('express')

var app = express()

// 开放公共资源
// 当以/public/ 请求访问的时候 去对应的资源中查找
// 这种方式更容易辨识
app.use('/public/',express.static('./public/'))

// 当省略第一个参数的时候 通过省略/public的时候 直接使用public 下的资源文件就可以了
// 不需要加 localhost:3000/public/login.html => localhost:3000/login.html
// 可以省略/public
// app.use(express.static('./public/'))

// a 表示 public的别名
// localhost:3000/a/login.html  访问public 下的资源
// app.use('/a/',express.static('./public/'))

app.get('/', function (req, res) { 
    res.send('hello world')
})

app.get('/login', function (req, res) {
    // res.write('hello')
    // res.write('world')
    // res.end()
    res.send('login page')

})

app.listen(3000, function () { 
    console.log('server is running...')
})