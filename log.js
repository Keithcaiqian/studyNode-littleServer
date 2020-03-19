var fs = require('fs')
var config = require('./config')

var fileName = config.log_path + config.log_name

function log(data){
    fs.appendFile(fileName,data + '\n',{flag:'a'},function(){

    })
}
module.exports = log