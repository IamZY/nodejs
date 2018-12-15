var express = require('express')
var path = require('path')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public.')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html',require('express-art-template'))

/// 默认./views 目录
app.set('views',path.join(__dirname + '/views'))


app.get('/', function (req,res) { 
    // res.send('hello')
    res.render('index.html', {
        name : 'zhangsan'
    })
})

app.listen(3000, function () { 
    console.log('server is running..')
})



