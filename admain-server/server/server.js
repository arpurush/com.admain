var http = require('http')
var express = require('express')
var fs = require('fs')
var app = express()
var path = require("path");
app.use(require('body-parser').urlencoded());

var uriResourceMap = JSON.parse(fs.readFileSync('../metadata/uriResourceMap.json', 'utf8'))
var uriKeys = Object.keys(uriResourceMap)

var hostname;
var user;
var pem_file;

/*
This is extremely bad. Purely for testing
*/

app.post("/ssh_key", function(req, res) {

  //Validate the perm format and store these values in the db
  var ssh_pem_key_value = req.body.private_key
  user = req.body.user
  hostname = req.body.hostname
  pem_file = "../." + user + ".pem"
  console.log(" hostname is " + hostname)

  fs.writeFile(pem_file, ssh_pem_key_value, function(err) {
    if (err) {
      return console.log(err);
    }
  });
  fs.chmodSync('../.user.pem', 0400);

  res.send("Good!")

})

require('./routes')(app);

/*for (var i = 0; i < uriKeys.length; i++) {

    var uriKey = uriKeys[i]
    var uriKeyWithPath = "/" + uriKeys
    var controller = uriResourceMap[uriKey].controller
    console.log(controller)

    //app.get(uriKeyWithPath, function(req, res) {
      //res.send("This will invoke the js - " + resource)
      console.log(" pem file is " + pem_file)
      var dynamicController = require(__dirname + "/controllers/" + controller);
      dynamicController.init(app);
      //res.sendFile(path.join(resourceFileName))
   // })


  }*/

app.listen(process.env.PORT)