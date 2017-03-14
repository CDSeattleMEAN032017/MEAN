var express = require('express')
var path = require('path')
var app = express()
bodyParser = require('body-parser')
app.use(bodyParser.json());
require('./server/config/1955.js')
var route_setter = require('./server/config/routes.js')
route_setter(app)
app.listen(8000, function(){
})
