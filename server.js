var net = require('net')
var server = net.createServer();
var fs = require('fs')
var globalConf = require('./config')
server.listen(globalConf.port,'127.0.0.1'); 
server.on('listening',function(){
    console.log('服务器已启动')
})
server.on('connection',function(socket){
    console.log('有新的连接')
    socket.on('data',function(data){
        var url = data.toString().split('\r\n')[0].split(' ')[1]
        console.log(url)
        try{
            var dataFile = fs.readFileSync(globalConf.baseUrl+url)
            socket.write("HTTP/1.1 200OK\r\n\r\n")
            socket.write(dataFile)
        } catch{
            socket.write('HTTP/1.1 404NotFound\r\n\r\n<html><body><p>404Not Found</p></body></html>')
        }
        socket.end()
    })
})
