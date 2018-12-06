/**
 * student.js 只处理数据不关心业务
 * 数据操作文件模块
 * 对student对象的增删改查
 */
var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取所有学生列表
 * callback中的参数 
 *     第一个是err
 *         成功是null
 *         错误是错误对象
 *     第二个事data
 *         成功是数组
 *         错误是 undefined
 * return []
 */
exports.find = function (callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data.toString()).students)
        // JSON.parse(data).students
    })
}


exports.findById = function (id, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }

        var students = JSON.parse(data.toString()).students

        var stu = students.find(function (item) { 
            return item.id === id
        })

        callback(null,stu)

        // JSON.parse(data).students
    })
}
 

// find(function (err,data) { 

// })

/**
 * 添加学生
 */
exports.save = function (student, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 处理id唯一 不重复
        student.id = students[students.length - 1].id + 1

        students.push(student)

        var ret = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, ret, function (err) {
            if (err) {
                return callback(err)
            }
            // 成功就没有错 错误对象就是null
            callback(null)
        })
    })
}


/**
 * 更新学生
 */
exports.updateById = function (student,callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data.toString()).students

        // Es6中的数组方法
        // 当某个遍历项符 条件的时候 find会终止遍历 返回遍历项
        var stu = students.find(function (item) {
            return item.id === student.id
        })

        for (var key in student) { 
            stu[key] = student[key]
        }
        

        var ret = JSON.stringify({
            students: students
        })

        fs.writeFile(dbPath, ret, function (err) {
            if (err) {
                return callback(err)
            }
            
            callback(null)
        })

        // JSON.parse(data).students
    })
}
/**
 * 删除学生
 */
exports.delete = function () {

}
