module.exports = function Route(app,Post, Comment)

{

  app.get('/',function(req,res){

    Post.find()
    .populate('comments')
    .exec(function(err,post){
      if (err){

        res.redirect('/')
      }

      res.render('index', {key:post})
    })

  })
  app.post('/',function(req,res){


    var new_post = new Post({name: req.body.name, text:req.body.message})
    new_post.save(function(err){

      if(err){
        Post.find()
        .populate('comments')
        .exec(function(err,post){
          if (err){

            res.redirect('/')
          }

            res.render('index', {title:'you have errors!',errors:new_post.errors, key:post})
        })

      }
      else
      {
        res.redirect('/')
      }
    })
  })
  app.post('/add_comment/:uid', function(req,res){


    Post.findOne({_id: req.params.uid}, function(err, post){

      var comment = new Comment({name:req.body.name, text:req.body.comment, _post:req.params.uid});
      comment.save(function(err){

        if(err){
          Post.find()
          .populate('comments')
          .exec(function(err,post){
            if (err){

              res.redirect('/')
            }
            console.log('got to the error')
            console.log(comment.errors)
          res.render('index',{key:post,errors:comment.errors })

        })
        }
        post.comments.push(comment);
        post.save(function(err){



            res.redirect('/')

        });
      });
    });
  });
}
