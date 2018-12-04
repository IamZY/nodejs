var fs = require('fs')

// 所有文件操作的api都是异步的
// 就像ajax一样
// 文件操作中的相对路径可以省略./
// fs.readFile('data/a.txt', function (err, data) { 
//     if (err) { 
//         console.log('读取失败')
//     }
//     console.log(data.toString())
// })

// 模块加载中的 ./不能省略
// require('data/foo.js')

// 缺.  就会去当前磁盘根目录查询
// 在文件操作的相对路径中
// .data/a.txt 相对于当前目录
// data/a.txt 
// /data/a.txt 当前模块所属磁盘根目录
// fs.readFile('./data/a.txt', function (err, data) {
//     if (err) { 
//         console.log('文件读取失败')
//     }

//     console.log(data.toString())
// })
 
// 这里忽略 . 也是从磁盘根路径找
// require('/data/foo.js')
