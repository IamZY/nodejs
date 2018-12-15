var fs = require('fs')

// fs.readFile('./a.txt', 'utf8', function (err, data) {
//     if (err) {
//         // console.log('err')
//         throw err
//     } else {
//         console.log(data)
//     }
// })

// console.log(__dirname + '/a.txt')

fs.readFile(__dirname + '/a.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err)
    }

    console.log(data)
})