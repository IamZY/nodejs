// 再Node中模块有三种
//      具名的核心模块
//      自己编写的文件模块
//      相对路径必须加 ./

// node 中没有全局作用域 只有模块作用于
//      外部访问不了内部
//      内部也访问不了外部

// 模块作用于之间的通信

var foo = 'aaa'

console.log('start a')

function add(x,y) {
    return x + y
}

// 可以不加后缀名
require('./b.js')
console.log('end a')

console.log(foo)