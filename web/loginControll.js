var queryAllStudent = require('../service/studentService')
var url = require('url')
var path = new Map()
function getData(request,response){
    queryAllStudent.queryAllStudent(function(res){
        console.log(res)
        var arr =[]
        for(var i=0;i<res.length;i++){
            arr.push(res[i].name)
        }
        console.log(arr.toString())
        response.write(arr.toString())
        response.end()
    })
}
path.set('/getData',getData)

function login(request,response){
    var params = url.parse(request.url, true).query
    queryAllStudent.queryStudentById(params.id,function(result){
        var res = ''
        if(result==null||result.length==0){
            res = "fail"
        }else{
            if(result[0].password == params.password){
                res= 'ok'
            }else{
                res = 'fail'
            }
        }
        response.write(res)
        response.end()
    })
}
path.set('/login',login)
module.exports.path = path