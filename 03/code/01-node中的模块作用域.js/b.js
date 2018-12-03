var foo = 'bar'

function add(x, y) {
    return x + y
}

// 如果一个模块需要直接导出某个成员，而非直接赋值
// 那这个时候就需要下面的方式
// 在其他文件中 使用 add = require('./b')   
// add(1,2)即可
module.exports = 'hello'

module.exports = function (x, y) {
    return x + y
}

module.exports = {
    add: function (x,y) { 
        return x + y
    },
    str : 'hello'
}

// require 执行被夹在模块中的代码
// 得到被加载模块中的exports对象

// exports 默认文件中的所有成员只在当前文件模块中有效
// 对于希望可以被其他模块访问的成员 需要将这些公开的成员被挂载到exports对象中