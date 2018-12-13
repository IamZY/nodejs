var fs = require('fs')

function pReadFile(filePath) { 
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, data) {
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
}

pReadFile('./data/a.txt')
    .then(function (data) { 
        console.log(data)
        return pReadFile('./data/b.txt')
    })
    .then(function (data) { 
        console.log(data)
        return pReadFile('./data/c.txt')
    })
    .then(function (data) { 
        console.log(data)
    })

// 






