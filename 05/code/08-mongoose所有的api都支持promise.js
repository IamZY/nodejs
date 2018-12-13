var mongoose = require('mongoose')

//
var Schema = mongoose.Schema

// 链接数据库 不用存在当你插入第一条数据之后会自动创建出来
mongoose.connect('mongodb://localhost/itcast')

//设计集合结构
// 约束的目的就是为了保证数据的完整性
// 不要有脏数据
var userSchema = new Schema({
    userName: {
        type: String,
        required: true // 必须有
    },
    passWord: {
        type: String,
        required: true
    },
    email: {
        type: String,
    }
})

// 将文档的架构发布为模型
// mongoose.model 将一个架构发布为model 
// 第一个参数 传入一个大写名词单数字符串表示你的数据库名称
//              mongoose 会自动将大写名词的字符串生成 小写复数的集合名称
// 第二个参数 结构Schema
// 返回模型对象
var User = mongoose.model('User', userSchema)


//当我们有模型架构的之后 就可以使用这个构造函数进行操作

var admin = new User({
    userName: 'admin',
    passWord: '123456',
    email: 'xx@qq.com'
})

// admin.save(function (err,ret) { 
//     if (err) {
//         console.log('error')
//     } else { 
//         console.log('success')
//         console.log(ret)
//     }
// })


// 查询所有
// 用户注册
// 判断用户是否存在 存在就是结束注册 不存在就注册
// 保存一条用户信息

// User.find()
//     .then(function (data) { 
//         console.log(data)
//     })
User.findOne({
    userName : 'aaa'
}).then(function (user) { 
    // console.log(user)
    if (user) { 
        // 用户已经存在
        console.log('用户已经存在')
    } else {  
        // 用户不存在
        return new User({
            userName: 'aaa',
            passWord: '123',
            email : 'zxx'
        }).save()
    }
    }).then(function* (ret) { 
        
    })




// // 查询一个
// User.find({
//     userName : 'admin'
// }, function (err, ret) { 
//     if (err) {
//         console.log('error')
//     } else { 
//         console.log(ret)
//     }
// })


// User.findOne({
//     userName: 'admin'
// }, function (err, ret) {
//     if (err) {
//         console.log('error')
//     } else {
//         console.log(ret)
//     }
// })

// 删除
// User.remove
// User.remove({
//     userName: 'admin'
// }, function (err, ret) { 
//     if (err) {
//         console.log('error')
//     } else { 
//         console.log(ret)
//     }
// })

// 更新
// User.findByIdAndUpdate('5c0bc8df0f004911082cc5ce', {
//     passWord: '123'
// }, function (err, ret) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(ret)
//     }
// })
