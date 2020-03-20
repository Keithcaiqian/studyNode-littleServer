// npm init
// npm install mysql -save 安装mysql
var mysql = require('mysql')

function myconnection() {
    // 创建连接
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'student'
    })
    return connection
}
module.exports = myconnection

