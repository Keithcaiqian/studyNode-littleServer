var fs = require('fs')
var config = require('./config')
var filterSet = []

var filterFiles = fs.readdirSync(config.filter_path)
for(var i=0;i<filterFiles.length;i++){
    var temp = require('./'+config.filter_path+'/'+filterFiles[i])
    filterSet.push(temp)
}
console.log(filterSet)
module.exports = filterSet