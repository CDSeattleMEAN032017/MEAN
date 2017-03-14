var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session')
app.use(session({secret: 'codingdojorocks'}))
mongoose.connect('mongodb://localhost/basic_mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  name: {type: String, required: true},
  text: {type: String ,minlength:1, maxlength:10, required:true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

var CommentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  text: {type: String, required:true},
})

//created the blueprints up above.
//istantianted the blueprits in the model
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

//actually made the table
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var route = require("./routes/route.js")(app,Post,Comment)

app.listen(8000, function() {
 console.log("listening on port 8000");
});
