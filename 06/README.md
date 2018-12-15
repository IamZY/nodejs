# 总结

## 1.1 path路径操作模块

- path.basename
  - 获取一个路径的文件名（默认包含扩展名）
- path.dirname
  - 获取一个路径的目录部分
- path.extname
  - 获取一个文件的扩展名部分
- path.parse
  - 把一个路径转化为对象
    - root 根目录
    - dir 目录
    - base 包含后缀名的文件名
    - ext 后缀名
    - name 不包含后缀名的文件名
- path.join
  - 当你需要进行路径拼接的时候 推荐按使用
- oath.isAbsolute
  - 判断一个路径是否为绝对路径

## 1.2 Node中的其他成员

在`nodejs`中除了`require` ，`exports`之外的成员：

- `__direname`**动态获取** 可以获取当前文件模块所属目录的绝对路径
- `__filename` 可以用来获取当前文件的绝对路径
- `__dirname`和`__filename`是不受执行node命令所属路径影响的

载文件操作中，使用相对路径是不可靠的，因为在Node文件中操作的路径被设计为相对执行node命令所处的路径

为了解决这个问题，需要把相对路径变为绝对路径就可以

在拼接路径的过程中，为了避免手动拼接带来的一些低级错误 需要i`path.join()`辅助拼接

























