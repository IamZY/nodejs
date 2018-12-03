// require 有两个作用
//      加载文件模块并执行里面的代码
//      拿到被加载文件模块的接口对象

// 在每个文件模块中都提供了一种对象 exports
// exports 默认是一个空对象
// 需要被外部访问的对象需要挂载到exports中
var ret = require('./b')

console.log(ret.foo)

console.log(ret.add(1,2))