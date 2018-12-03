var url = require('url')

var obj = url.parse('/commentAction?name=eqweqwe&message=qweqweqweqweqwe',true)
//   query: { name: 'eqweqwe', message: 'qweqweqweqweqwe' },
console.log(obj)
