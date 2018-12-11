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
    console.log('The solution is: ', results);
});

// connection.query('insert into users values(null,"admin","123456")', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// 关闭连接
connection.end();