var express = require('express');
var router = express.Router();
var repo = require("../models/postRepo.js");


// ============= Index:  Show All Posts ===================
router.get('/', function(req, res, next){
  var posts = repo.getPost();   // but it's sad, because such method does not exist :(  //
  // res.render('posts', { title: 'Express' });
  res.render('posts', { title: 'Express', postsArray: posts });
});

// ============= CREATE: Create New Post in Filesystem ====
// ZZZ -- question for Jeff -- what does the 'next' do below
//   'next' can be a follow-on function that can be called when the
//   present function is finished.  (Express would populate the variables)
//   
router.post('/new', function(req, res, next){

  let id       = req.body.id,  // ZZZ remove when autoID is created
      fname    = req.body.fname,
      title    = req.body.title,
      content  = req.body.content;

  //create a "post-object"
  let newPost = {id: id, fname: fname, title: title, content: content};

  repo.addPost(newPost);

  res.redirect("/posts");
})

// ========== NEW:  Present Form for a NEW Post ======
router.get('/posts/new', function(req, res, next){
    // ZZZ return-to:  write a "New Post Form"
    // res.render("new");
  
      res.render('new', { title: 'Express'});
  
  })

module.exports = router;
