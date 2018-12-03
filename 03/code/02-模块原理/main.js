var fooExports = require('./foo')

console.log(fooExports)

// jQuery 的each 和原声的js 的 forEach
// ES5 提供的 jQuery的each是第三方库提供的 兼容ie8

// jQuery的实例对象不能使用foreach方法 如果想要使用
// [].slice.call(jQuery的实例对象)
