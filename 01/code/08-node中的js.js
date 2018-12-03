// 核心模块
var os = require('os')

var path = require('path')

// 获取哦当前cpu的信息
// console.log(os.cpus())
console.log(os.totalmem())

// 获取文件路径的后缀名
console.log(path.extname())