var fs = require('fs')

// 在E6中新增了api Promise
// Promise 就是一个构造函数

// 创建Promise容器
// 一旦创建就立即执行里面的代码
var p1 = new Promise(function (resolve,reject) { 
    fs.readFile('./data/a.txt', 'utf8', function (err, data) { 
        if (err) {
            // 失败了 承诺容器中的任务失败了
            // console.log(err)\
            // 把容器的Pending状态变为Rejected

            // 调用rejected就相当于调用了then中的第二个函数
            reject(err)
        } else { 
            // 承诺容器中的任务成功了
            // console.log(data)
            // 把容器的Pending改为Resolved
            // 这里调用的reslove 就是then方法传递的方法
            resolve(data)
        }
    })
}) 

var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            // 失败了 承诺容器中的任务失败了
            // console.log(err)\
            // 把容器的Pending状态变为Rejected

            // 调用rejected就相当于调用了then中的第二个函数
            reject(err)
        } else {
            // 承诺容器中的任务成功了
            // console.log(data)
            // 把容器的Pending改为Resolved
            // 这里调用的reslove 就是then方法传递的方法
            resolve(data)
        }
    })
}) 

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
        if (err) {
            // 失败了 承诺容器中的任务失败了
            // console.log(err)\
            // 把容器的Pending状态变为Rejected

            // 调用rejected就相当于调用了then中的第二个函数
            reject(err)
        } else {
            // 承诺容器中的任务成功了
            // console.log(data)
            // 把容器的Pending改为Resolved
            // 这里调用的reslove 就是then方法传递的方法
            resolve(data)
        }
    })
}) 

// p1就是那个承诺
// then方法接受的function就是容器中的resolve函数
p1
    .then(function (data) { 
        console.log(data)
        // 当p1读取成功的时候
        // 当前函数中 return的结果 可以在后面then中function中data的结果
        // 没有 return 后面接受的就是undefined
        // 当 return 一个Promise对象的时候 后续的then中的方法中的第一个参数就会作为p2的resolve
        return p2
    }, function (err) { 
        console.log("读取文件失败了", err)
    })
    .then(function (data) { 
        console.log(data)
        return p3
    })
    .then(function (data) { 
        console.log(data)
    })







