var dutils = require('./dbutil');
function queryAllStudent(success) {
    var connection = dutils()
    var querySql = 'select * from students;'
    // 连接
    connection.connect()
    connection.query(querySql,function(error,result){
        if(error==null){
            success(result)
        }else{
            console.log(error)
        }
    })
    // 关闭
    connection.end()
}
function queryStudentByClassAndAge(classNum,age){
    var connection = dutils()
    var querySql = 'select * from students where class = ? and age = ?;'
    var queryParams = [classNum,age]
    // 连接
    connection.connect()
    connection.query(querySql,queryParams,function(error,result){
        if(error==null){
            console.log(result)
        }else{
            console.log(error)
        }
    })
    // 关闭
    connection.end()
}
function queryStudentById(id,success){
    var connection = dutils()
    var querySql = 'select * from students where id = ?;'
    // 连接
    connection.connect()
    connection.query(querySql,id,function(error,result){
        if(error==null){
            success(result)
            console.log(result)
        }else{
            console.log(error)
        }
    })
    // 关闭
    connection.end()
}
module.exports = {
    queryAllStudent,
    queryStudentByClassAndAge,
    queryStudentById
}