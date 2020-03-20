var fs = require('fs')
var config = require('./config')

var controllerset = []
var pathMap = new Map()


var filesDir = fs.readdirSync(config.web_path)
for(var i=0;i<filesDir.length;i++){
    var temp = require('./'+config.web_path+'/'+filesDir[i])
    if(temp.path){
        for(var [key,value] of temp.path){
            if(pathMap.get(key)){
                throw new Error('url path异常:' + key)
            }else{
                pathMap.set(key,value)
            }
            controllerset.push(temp)
        }
    }
}
module.exports = pathMap