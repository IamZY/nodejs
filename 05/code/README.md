# day5总结

## 1.1 封装ajax原生方法

```javascript
function get(url, callback) {
    var oReq = new XMLHttpRequest()
    oReq.onload = function () {
        // console.log(oReq.responseText)
        callback(oReq.responseText)
    }
    oReq.open('get', url, true)
    oReq.send()
}

get('data.json', function (data) {
    console.log(data)
})
```

## 1.2 package.json和package-lock.json

在`npm5`之前是没有`package-lock`这个文件的，在`npm5`之后才有的这个文件。

+ 升级npm

  ```shell
  npm install --global npm
  ```

+ `package-lock`的优势

  + 不需要加`--save`就可以自动保存版本信息 

  + `package-lock`这个文件中存着当前依赖包的信息，
  + 当`npm install`的时候，加快安装`npm`安装的速度
  + 从文件来看有一个`lock`
    * 这个`lock`用来锁定安装包的版本的
    * 如果项目依赖了`1.1.1`这个版本。如果重新`install`会下载最新版本 而不是原来的版本
    * 我们的目的就是可以锁住`1.1.1`这个版本
    * 所以`package-lock`可以锁定版本号，防止升级新版

## 1.3 MangoDB

+ 长得最像关系型数据库的非关系型数据库
  + 数据库 -  数据库
  + 数据表 - 集合（数组）
  + 表记录 - 文档对象

+ 一个数据库中可以有多个集合

+ 一个集合中可以有多个文档

  ```json
  {
      qq:{
          user:[
              {
                  name:"tom",
                  age:12
              },
              {
                  name:"tom",
                  age:12
              },
              {
                  name:"tom",
                  age:12
              },
              {
                  name:"tom",
                  age:12
              }
          ],
          product:[
              {
                  
              }
          ]
      }
  }
  ```


+ 安装

  > bin目录需要添加到环境变量中

+ 检测安装成功

  ```shell
  mongod --version
  ```

![1544268770134](C:\Users\IamZY\AppData\Roaming\Typora\typora-user-images\1544268770134.png)

+ 参考菜鸟教程

  + 启动数据库

    ```shell
    # mongodb 默认使用 mongod命令所处盘符下的data/db 作为自己数据库的数据存储目录
    # 第一次执行命令之前 自己手动新建一个data/db
    mongod
    ```

  + 修改默认的存储路径

    ```shell
    mongod --dbpath=数据的额存储目录路径
    ```

  + 停止数据库

    ```shell
    # 在开启服务的控制台 直接ctrl + c
    # 或者关闭开启服务的控制台
    ```

  + 连接和退出数据库

    ```shell
    # 该命令默认连接本机的服务
    mongo
    
    # 退出
    exit
    ```

  + 命令
    * `show dbs` 查看显示数据库
    * `show collections`查询当前数据的集合
    * `db`查看当前连接的数据库
    * `use 数据库名称`切换到指定的数据库（如果没有会新建）
    * 插入数据`db.students.insertOne({"name":"jack"})`
    * 查询数据`db.students.find()`
    * ……

## 1.4通过`Node.js`操作`mongodb`数据库

### 1.4.1 通过官方的`mongodb`包来操作

### 1.4.2 使用第三方的`mongoose`操作数据库

+ 网址

  > https://mongoosejs.com/

+ 安装

  ```shell
  npm install mongoose --save
  ```

+ 实例

  ```javascript
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
  ```

### 1.4.3 数据库操作

 + 发布模型

   ```javascript
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
   
   ```

+ 增加

  ```javascript
  var User = mongoose.model('User', userSchema)
  //当我们有模型架构的之后 就可以使用这个构造函数进行操作
  var admin = new User({
      userName: 'admin',
      passWord: '123456',
      email: 'xx@qq.com'
  })
  
  admin.save(function (err,ret) { 
      if (err) {
          console.log('error')
      } else { 
          console.log('success')
          console.log(ret)
      }
  })
  ```

+ 查询

  ```javascript
  // 查询所有
  User.find(function (err, ret) { 
      if (err) { 
          console.log('查询失败')
      } else { 
          console.log(ret)
      }
  })
  
  
  // 查询一个=>数组
  User.find({
      userName : 'admin'
  }, function (err, ret) { 
      if (err) {
          console.log('error')
      } else { 
          console.log(ret)
      }
  })
  
  // 查询一个=>对象
  User.findOne({
      userName: 'admin'
  }, function (err, ret) {
      if (err) {
          console.log('error')
      } else {
          console.log(ret)
      }
  })
  ```

+ 删除

  ```javascript
  User.remove({
      userName: 'admin'
  }, function (err,  ret) { 
      if (err) {
          console.log('error')
      } else { 
          console.log(ret)
     }
  })
  ```

+ 更新

  ```javascript
  User.findByIdAndUpdate('5c0bc8df0f004911082cc5ce', {
      passWord: '123'
  }, function (err, ret) { 
      if (err) {
          console.log(err)
      } else { 
          console.log(ret)
      }
  })
  ```

## 1.5 node-mysql

+ 安装

  ```shell
  npm install mysql --save
  ```

+ 操作

  ```javascript
  var mysql = require('mysql');
  
  // 连接数据库
  var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'itcast'
  });
  
  connection.connect();
  
  connection.query('select * from users', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
  });
  
  // 关闭连接
  connection.end();
  ```

## 1.6 Promise

+ 回调地狱

  ```javascript
  var fs = require('fs')
  
  fs.readFile('./data/a.txt', 'utf8' ,function (err, data) { 
      if (err) { 
          throw err
      }
      console.log(data)
  })
  
  
  fs.readFile('./data/b.txt', 'utf8', function (err, data) {
      if (err) {
          throw err
      }
      console.log(data)
  })
  
  
  fs.readFile('./data/c.txt', 'utf8', function (err, data) {
      if (err) {
          throw err
      }
      console.log(data)
  })
  ```

+ 回调嵌套
































