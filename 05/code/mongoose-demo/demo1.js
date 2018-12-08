var mongoose = require('mongoose')

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

mongoose.Promise = global.Promise

// 创建一个模型
// 就是在创建数据库
var Cat = mongoose.model('Cat', { name: String })

// 实例化一个Cat
var kitty = new Cat({ name: 'Zildjian' })

// 持久化保存这个kitty实例
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else { 
        console.log('meow')
    }
    
})