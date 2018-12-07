# day4总结

# 1.1 文件操作路径和模块路径

- 文件操作路径

  ```javascript
  // 缺.  就会去当前磁盘根目录查询
  // 在文件操作的相对路径中
  // .data/a.txt 相对于当前目录
  // data/a.txt 
  // /data/a.txt 当前模块所属磁盘根目录
  // fs.readFile('./data/a.txt', function (err, data) {
  //     if (err) { 
  //         console.log('文件读取失败')
  //     }
  ```

+ 模块操作路径

  ```javascript
  // 这里忽略 . 也是从磁盘根路径找
  // require('/data/foo.js')
  // require('./data/foo.js')
  ```

# 1.2 Express

## 1.2.1 安装

```sh
npm install express --save
```

## 1.2.2 基本路由

请求方法 请求路径 处理函数 

- get

  ```javascript
  // 当以get方法请求/的时候执行处理函数
  app.get('/', function (req, res) { 
      // res.write('hello')
      // res.write('world')
      // res.end()
      res.send('hello world')
      
  })
  ```

- post

  ```javascript
  // 当以post方法请求/的时候执行处理函数
  app.post('/',function(req,res){
       res.send('hello world')
  })
  ```

## 1.2.3 静态服务

```javascript
// 开放公共资源
// 当以/public/ 请求访问的时候 去对应的资源中查找
// 这种方式更容易辨识
app.use('/public/',express.static('./public/'))

// 当省略第一个参数的时候 通过省略/public的时候 直接使用public 下的资源文件就可以了
// 不需要加 localhost:3000/public/login.html => localhost:3000/login.html
// 可以省略/public
app.use(express.static('./public/'))

// a 表示 public的别名
// localhost:3000/a/login.html  访问public 下的资源
app.use('/a/',express.static('./public/'))
```

## 1.2.4 在Express中配置art-template

+ [art-template Github](https://aui.github.io/art-template/)
+ [art-template 官方文档](https://aui.github.io/art-template/docs)

安装：

```shell
npm install art-template --save
npm install express-art-template --save
```

# 1.3 修改完代码自动重启

- 第三方工具	`nodemon`  基于Node.js开发的第三方命令行工具 需要独立安装

  ```shell
  # 在任意目录执行该命令都可以
  npm install --global nodemon
  ```

  安装完毕后使用

  ```shell
  node app.js
  # 
  nodemon app.js
  ```

+ 配置

  ```javascript
  // 当渲染以.art结尾的文件的时候 使用art-template模板引擎
  app.engine('html', require('express-art-template'))
  ```

+ 使用

  ```javascript
  // 去views目录下寻找
  app.get('/admin', function (req, res) {
      // res.render('404.html')
      res.render('admin/index.html', {
          title : 'admin'
      })
  })
  ```

+ 修改视图渲染的存储目录

  ```javascript
  // 修改默认的views目录 
  app.set('views',render函数的默认路径)
  ```

# 1.4 Express中获取表单post请求体数据

+ 安装`body-parser`中间件

  ```shell
  npm install body-parser --save
  ```

+ 配置

  ```javascript
  var express = require('express')
  var bodyParser = require('body-parser')
  
  var app = express()
  
  app.post('/post', function (req, res) { 
      // req.query 只能拿到get的数据
      // 在Express中 获取请求体数据
      // console.log(req.body)
      var comment = req.body
      comment.datetime = Date.now.toString() 
      comments.unshift(comment)
  
      res.redirect('/')
  })
  ```

+ 路由设计

   `router.js`文件单触处理路由信息

  ```javascript
  /**
   * 路由模块
   */
  var fs = require('fs')
  // Express 提供更好的方式
  // 专门封装路由
  var express = require('express')
  // 创建一个路由容器
  var router = express.Router()
  
  router.get('/students', function (req, res) {
      // 传入utf8编码专程我们能够认识的字符
      // 除了这样转换也可以使用data.toString()
      fs.readFile('./db.json', 'utf8', function (err, data) {
          if (err) {
              return res.status(500).send('Server error')
          }
          // res.send('/')
          // 字符串转成json格式
          var students = JSON.parse(data).students
          res.render('index.html', {
              students: students
          })
      })
  })
  
  router.get('/students/new', function (req, res) {
      res.render('new.html')
  })
  
  router.post('/students/new', function (req, res) {
      // 获得前台提交的数据
      // console.log(req.body)
      // 将数据db.json文件中 持久化数据的存储
      
      // 先读取db中的对象 再往对象中插入数据 再将对象写入文件
      
  
  
      // 重定向学生信息列表页
      res.redirect('/students')
  })
  
  router.get('/students/edit', function (req, res) {
  
  })
  
  router.post('/students/edit', function (req, res) {
  
  })
  
  router.get('/students/delete', function (req, res) {
  
  })
  
  router.post('/students/delete', function (req, res) {
  
  })
  
  // 导出router接口
  module.exports = router
  
  
   
  ```

+ 设计数据操作的模块

# 1.5 回调函数:获取异步操作的结果

```javascript
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
```





















