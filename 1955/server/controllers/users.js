//this is where i will pass my functions back to the route in config
//will need to require models eventually
var mongoose = require('mongoose')
var users = mongoose.model('User')


module.exports = {
  show: function(req,res){
    users.find({}, function(err, users) {
      res.json({
        users
      })//json
})

  },//show:
  add: function(req,res){
      user = new users({name: req.params.name});
      user.save(function(err){})
    res.redirect('/')
  }, //add
  remove: function(req,res){
    users.remove({name: req.params.name},function(err){
      res.redirect('/')
    })//error

  }, //remove
  detail: function(req,res){
    users.find({name:req.params.name},function(err,users){
      res.json({
        users
      })//json
    })
  }, //detail
}//module.exports
