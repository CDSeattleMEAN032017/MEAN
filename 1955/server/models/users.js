var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
  name: {type:String, minlength:1, maxlength:10}

})//schema
mongoose.model('User', UserSchema);
