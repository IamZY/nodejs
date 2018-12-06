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
  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  
  // parse application/json
  app.use(bodyParser.json())
  
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




















