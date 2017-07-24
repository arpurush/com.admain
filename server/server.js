var http = require('http')
var express = require('express')
var fs = require('fs')
var app = express()

var uriResourceMap = JSON.parse(fs.readFileSync('../metadata/uriResourceMap.json', 'utf8'))
var uriKeys = Object.keys(uriResourceMap)

for (var i = 0; i < uriKeys.length; i++) {
  
  var uriKey = uriKeys[i]
  var uriKeyWithPath = "/"+uriKeys
  var resource = uriResourceMap[uriKey].resource
  console.log(resource)
  
  app.get(uriKeyWithPath, function(req, res){
     res.send("This will invoke the js - " + resource)
     //res.sendFile(path.join(resource));
  })
}

app.get('/test', function (req, res) {
   
   res.json(uriResourceMap)
   
})

/*app.get('/uptime', function (req, res) {
   
   res.json({uptime: "1200ms"})
    
})*/

app.listen(process.env.PORT)