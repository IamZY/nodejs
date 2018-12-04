var express = require('express')

var app = express()

app.use('/public/',express.static('./public/'))

app.engine('art', require('express-art-template'))

// 当
app.get('/', function (req, res) { 
    res.send('get')
})

app.post('/post', function (req, res) {
    
})
 
app.listen(3000, function () { 
    console.log('server is running...')
})