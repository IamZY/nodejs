// 如果非路径形式的模块标识 ./foo.js
// 路径形式的模块 ./ ../ /xxx
// 首位的/ 表示当前所属模块磁盘根路径
// require('模块标识符')
require('./foo')


// 第三方模块 npm install xxx
// node_module
// 第三方的报不可能和核心模块相同
var template = require('art-template')
