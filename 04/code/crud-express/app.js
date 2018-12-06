var express = require('express')
var fs = require('fs')

var app = express()

// 开放资源
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.get('/', function (req, res) { 
    // 传入utf8编码专程我们能够认识的字符
    // 除了这样转换也可以使用data.toString()
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) { 
            return res.status(500).send('Server error')
        }
        // res.send('/')
        
        // 字符串转成json格式
        var students = JSON.parse(data).students

        res.render('index.html', {
            students: students
        })
    })

})


app.listen(3000, function () { 
    console.log('server is running...')
})