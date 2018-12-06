


function fn(callback) { 
    // var callback = function(data){}
    setTimeout(function () { 
        var data = 'hello'
        callback(data)
    } ,3000)
}

// 如果需要获取一个函数中异步操作的结果 必须通过回调函数获取
fn(function (data) { 
    console.log(data)
})