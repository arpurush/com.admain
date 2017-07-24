var http = require('http');
var express = require('express');
var app = express();

app.get('/uptime', function (req, res) {
   
   res.json({uptime: "1200ms"})
   
})

app.listen(process.env.PORT)