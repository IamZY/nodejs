# 1.1 总结

```javascript
module.exports = {
    foo : 'hello',
    add : function(x, y){
        return x + y
    }
}
// 两者不可以同时兼容
exports.foo = 'xxx'

// 除非
exports = module.exports

```
- npm

```shell
npm install art-template --save
npm install --save art-template
```
+ 加入package.json  
  `--save`会保存dependence依赖项  

+ 最好每个项目下面都要创建一个package.json  
  这个文件可以使用`npm init`生成

  + > npm init -y 

- 如果node_module删除了，只需要`npm install` 直接装载依赖项

- `-www.npmjs.com` npm文件大全
- 升级npm

    > npm install --global npm
- npm init
+ npm install
+ npm uninstall 包名
  + 只删除包 不删除依赖
+ npm uninstall 包名 --save
  + 删除包的同时删除依赖
+ npm 命令 --help
  + 查询某个命令的使用帮助

#  1.2 npm被墙问题



+ 淘宝镜像 

  + `http://npm.taobao.org/`

  + 安装淘宝的cnpm

    ```shell
    npm install --global cnpm
    ```

  + 接下来安装npm的时候使用cnpm

  ```shell
  cpm install art-template
  	
  cnpm install art-template
  
  # 全局目录
  cnpm install --global cnpm
  ```

+ 如果不想安装 `cnpm`可以

  ```shell
  npm install art-template --registry=http://registry.npm.taobao.org
  ```

+ 不需要每次手动加

  ```shell
  npm config set registry http://registry.npm.taobao.org
  
  # 查看配置信息
  npm config list
  ```

# 1.3 Express

原生的http不足以应对我们的开发需要 `nodejs`的外部开发框架

+ 安装步骤

  > npm install express --save

+ code

  ```javascript
  var express = require('express')
  
  // 创建服务器应用程序
  // http.createServer()
  var app = express()
  
  // 公开指定目录
  // 公开public目录下的所有路径
  app.use('/public/',express.static('./public/'))
  
  /**
  http.on('request',function(req,res) {
  })
  */
  app.get('/', function (req, res) {
      res.send('hello world')
  })
  
  // 当以get请求about的时候
  app.get('/about', function (req, res) {
      res.send('hello about')
  })
  
  // 相当于server.listen
  app.listen(3000, function () { 
      console.log('app is running...')
  })
  ```




























