var fs = require("fs")
var globalConf = {}
var conf = fs.readFileSync('server.conf')
var confs = conf.toString().split("\r\n")
for(var i=0;i<confs.length;i++){
    var tempConf = confs[i].split('=')
    globalConf[tempConf[0]] = tempConf[1]
}
globalConf.static_file_type = globalConf.static_file_type.split('|')

module.exports = globalConf