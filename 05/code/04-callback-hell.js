var fs = require('fs')

fs.readFile('./data/a.txt', 'utf8' ,function (err, data) { 
    if (err) { 
        throw err
    }
    console.log(data)
})


fs.readFile('./data/b.txt', 'utf8', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data)
})


fs.readFile('./data/c.txt', 'utf8', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data)
})