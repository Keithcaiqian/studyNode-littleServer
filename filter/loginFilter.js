var url = require('url')
function checkLogin(request,response){
    var pathName = url.parse(request.url).pathname;
    if(pathName == '/index.html' || pathName == 'index'){
        return true
    }
    return false
}

module.exports = checkLogin