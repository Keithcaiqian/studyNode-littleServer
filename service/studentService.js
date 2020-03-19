var studentDao = require('../dao/studentDao')
function queryAllStudent(success){
    studentDao.queryAllStudent(success);
}
function queryStudentById(id,success){
    studentDao.queryStudentById(id,success);
}
module.exports = {
    queryAllStudent,
    queryStudentById
}
