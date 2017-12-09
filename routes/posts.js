var express = require('express');
var router = express.Router();
var repo = require("../models/postRepo.js");


// ============= Index:  Show All Posts ===================
router.get('/', function(req, res, next){
  var posts = repo.getPosts();     
  res.render('posts', { title: 'Express', postsArray: posts });
});

// ============= CREATE: Create New Post in Filesystem ====
// ZZZ -- question for Jeff -- what does the 'next' do below
//   'next' can be a follow-on function that can be called when the
//   present function is finished.  (Express would populate the variables)
//   
router.post('/', (req, res, next) => {

  if (req.body.passPhrase != "youbet") {
    res.redirect("/posts");
  };

  let permalink       = req.body.permalink,
      title           = req.body.title,
      content         = req.body.content;

  //create a "post-object"
  let newPost = {permalink: permalink, title: title, content: content};

  repo.addPost(newPost);

  res.redirect("/posts");
})

module.exports = router;
