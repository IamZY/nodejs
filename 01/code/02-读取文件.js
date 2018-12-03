// 浏览器中的js市没有文件操作的能力的
// node中的js又操作文件的能力

// fs 是 fileSystem的缩写
// 在node中如果想要进行文件操作 必须入fs核心模块

//  
var fs = require('fs');

// 读取文件
// 读取的文件的路径
// error 读取失败就是错误对象
//          读取成功就是null
// data 读取失败 error就是null data 为undefined
//       读取成功 data就是数据
fs.readFile('./data/hello.txt',function(error,data){
    // console.log(data.toString())
    // console.log(error)
    if(error){
        console.log('读取文件失败')
    }else{
        console.log(data.toString())
    }
})

