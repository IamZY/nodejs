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

















