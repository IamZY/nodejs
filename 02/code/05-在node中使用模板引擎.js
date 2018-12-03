// art-template 
// art-template 不仅可以在服务器中使用也可实在node中使用

// 在安装的目录下 安装npm install art-template
// 该命令在哪执行 就在哪边执行
// 会自动生成一个node_template的文件夹

// 安装npm install art-template
// 加载模块 require('art-template')  参数就是下载包的名字
// 引用api

var template = require('art-template')
var fs = require('fs')

var tplStr = `
    // <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <p>hello {{name}}</p>
    //         <p>i am {{age}} years old</p>
    //         i come from {{province}}
    //         {{each hobbies}} {{$value}} {{/each}}
    //     </body>
    //     </html>
`

fs.readFile('./tpl.html', function (err, data) { 

    if (err) { 
        return console.log('文件读取失败..')
    }
    
    // 模板引擎render传入的值是字符串
    var ret = template.render(data.toString(), {
        name: 'jack',
        age: 18,
        province: 'JiangSu',
        hobbies: ['1', '2', '3']
    })

    console.log(ret)
})

// template('')
// template.render('模板字符串',替换对象)





