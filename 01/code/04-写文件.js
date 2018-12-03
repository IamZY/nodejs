var fs = require('fs')

// 第一个参数是要写入的文件的路径
// 要写入的文件内容
// 回调函数
//      -- 接受一个参数 error
//          -- 成功：文件写入成功 error：null
//          -- 失败：错误对象
fs.writeFile('./data/你好.md','大家好',function(error){
    // console.log('文件写入成功')
    if(error){
        console.log("文件写入失败")
    }else{
        console.log('文件写入成功')
    }
})