//our routes will connect the get/post requests and functions that are triggered
//we are requiring this page from our server.py, so we have to export
//what is required in this? the controllers
var users = require('../controllers/users.js')
//this will go back a folder, into controllers, and bring in users.js so we can use methods
module.exports = function(app){
  app.get('/', function(req,res){
    users.show(req,res)
  })//app first
  app.get('/new/:name/', function(req,res){

    users.add(req,res)
  })//app /new/name
  app.get('/remove/:name/', function(req,res){
  users.remove(req,res)
  })//app remove/name
  app.get('/:name', function(req,res){
  users.detail(req,res)
  })//app get/name
} //module.exports
