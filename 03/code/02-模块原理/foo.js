// 在node中 每个模块的内部都有一个自己的module对象
// 该module对象中 有个成员exports
// 也就是说如果需要对外到处成员 只需要把到处的对象挂载到 module。exports中

// var module = {
//     exports: {
//         foo : 'bar'
//     }
// }

// 每次导出成员的方式很麻烦
// exports = module.exports

// module.exports.foo = 'bar'

// exports.foo = 'hello'

// exports.add = function (x, y) {
//     return x + y
// }

// module.exports.b = 123
// 当一个模块需要导出单个成员你的时候
// 直接给exports赋值时不行的
// 
module.exports = 'hello'

// 默认在代码的最后有 return module.exports

module.exports = 'hello'
// 后者覆盖前者
module.exports = function (x, y) {
    return x + y
} 


module.exports = {
    add: function (x, y) {
        return x + y
    },
    foo : 'hello'
}

/**
 * 单个导出对象：
 *      module.exports = 'hello'
 * 多个对象的导出:
 *      module.exports = {
 *          foo:'hello',
 *          add : function(x, y){
 *              return x + y
 *          }
 *      }
 */

