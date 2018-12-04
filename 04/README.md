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




