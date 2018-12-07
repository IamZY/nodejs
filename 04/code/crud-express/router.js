/**
 * 路由模块
 */

var fs = require('fs')
var Student = require('./student')


// Student.updateById({
//     id: 1,
//     name:'张小三'
// }, function (err) { 
//     if (err) {
//         console.log('err')
//     } else { 
//         console.log('success')
//     }
// })


// module.exports = function (app) { 
// }

// Express 提供更好的方式
// 专门封装路由
var express = require('express')
// 创建一个路由容器
var router = express.Router()

router.get('/students', function (req, res) {
    // 传入utf8编码专程我们能够认识的字符
    // 除了这样转换也可以使用data.toString()

    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error')
        }
        // res.send('/')
        // 字符串转成json格式
        res.render('index.html', {
            students: students
        })           
    })

    // fs.readFile('./db.json', 'utf8', function (err, data) {
    //     if (err) {
    //         return res.status(500).send('Server error')
    //     }
    //     // res.send('/')
    //     // 字符串转成json格式
    //     var students = JSON.parse(data).students
    //     res.render('index.html', {
    //         students: students
    //     })
    // })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})

router.post('/students/new', function (req, res) {
    // 获得前台提交的数据
    // console.log(req.body)
    // 将数据db.json文件中 持久化数据的存储
    
    // 先读取db中的对象 再往对象中插入数据 再将对象写入文件
    var student = req.body
    Student.save(student, function (err) {
        if (err) { 
            return res.status(500).send('Server error')
        }
    })

    // 重定向学生信息列表页
    res.redirect('/students')
})

router.get('/students/edit', function (req, res) {
    // req.query.id
    // res.render('edit.html', {
    //     student : Student.findById(req.query.id)
    // })

    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) { 
            return res.status(500).send("Server error")
        }        
        // console.log(student)
        res.render('edit.html', {
            student : student
        })
    })

})

router.post('/students/edit', function (req, res) {
    // 获取表单数据
    // console.log(req.body)
    var student = req.body
    // 保存更新
    Student.updateById(student, function (err) { 
        if (err) { 
            res.status(500).send('Server error')
        }

        res.redirect('/students')
    })
    // 发送响应
})

router.get('/students/delete', function (req, res) {
    // console.log(req.body)
    Student.deleteById(req.body.id, function (err) { 
        if (err) { 
            res.status(500).send('Server error')
        }

        res.redirect('/students')
    })
})

// 导出router接口
module.exports = router


 