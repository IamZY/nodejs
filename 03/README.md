# 总结
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