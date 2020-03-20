var http = require('http')
var url = require('url')
var fs = require('fs')
var config = require('./config.js')
var loader = require('./loader')
var filterLoader = require('./filterLoader')
var log = require('./log')
http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname
    var params = url.parse(request.url, true).query
    var isStatic = isStaticRequest(pathName)
    log(pathName.toString())
    for(var i=0;i<filterLoader.length;i++){
        var flag = filterLoader[i](request,response)
        console.log(flag)
        if(!flag){
            return;
        }
    }
    if (isStatic) {
        try {
            var data = fs.readFileSync(config.path + pathName)
            response.writeHead(200)
            response.write(data)
            response.end()
        } catch{
            response.writeHead(404)
            response.write('<html><body><h1>404 Not Found</h1></body></html>')
            response.end()
        }
    } else {
        if (loader.get(pathName)) {
            try {
                loader.get(pathName)(request, response)
            } catch (error) {
                response.writeHead(500)
                response.write('<html><body><h1>500 BadServer</h1></body></html>')
                response.end()
            }

        } else {
            response.writeHead(404)
            response.write('<html><body><h1>404 Not Found</h1></body></html>')
            response.end()
        }
    }


}).listen(config.port)
log('服务已启动')
function isStaticRequest(pathName) {
    for (var i = 0; i < config.static_file_type.length; i++) {
        var temp = config.static_file_type[i]
        if (pathName.indexOf(temp) == pathName.length - temp.length) {
            return true
        }
    }
    return false
}
