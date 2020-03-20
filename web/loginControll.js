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
    request.on("data",function(data){
        var id = data.toString().split('&')[0].split('=')[1]
        var password = data.toString().split('&')[1].split('=')[1]
        queryAllStudent.queryStudentById(id,function(result){
            var res = ''
            if(result==null||result.length==0){
                res = "fail"
                response.writeHead(302,{'location':'/error.html'})
                response.end()
            }else{
                if(result[0].password == password){
                    res= 'ok'
                    response.writeHead(302,{'location':'/main.html','Set-cookie':'id='+result[0].id})
                    response.end()
                }else{
                    res = 'fail'
                    response.writeHead(302,{'location':'/error.html'})
                    response.end()
                }
            }
            // js方式
            // response.write(res)
            // response.end()

            // form方式

        })
    })
}
path.set('/login',login)
module.exports.path = path