var express = require('express');
var router = express.Router();

// let lorem = "dolar dollar donuts ipsum sugar salt eggs milk";

// let posts = [
//     {"id": 1, "title": "First Post", "content": "<h1>This is the First Post</h1><p>" + lorem + "</p>"},
//     {"id": 2, "title": "Second Post", "content": '<h1>Look, a Tiger</h1><img src="../images/animal-2923186_340.jpg">'}
// ];

var repo = require("../models/postRepo.js");


// ============= Index:  Show All Posts ===================
router.get('/posts', function(req, res, next){
  var posts = repo.getPost();   // but it's sad, because such method does not exist :(  //
  // res.render('posts', { title: 'Express' });
  res.render('posts', { title: 'Express', postsArray: posts });
});

// ============= CREATE: Create New Post in Filesystem ====
// ZZZ -- question for Jeff -- what does the 'next' do below
router.post('/posts', function(req, res, next){
  // pull parameters from the request.body
  var id       = req.body.id,
      fname    = req.body.fname,
      title    = req.body.title,
      content  = req.body.content;

      // var BillCObj = JSON.parse(data);
      // console.log(BillCObj.id + "<br/>" + BillCObj.name + "<br/>" + BillCObj.post);

  //create a "post-object"
  var newPost = {id: id, fname: fname, title: title, content: content};

  // XXX push newPost into the global array postsArray
  // see link in app.js about app.locals ...
  // want to take the newPost Object and push it into the global array postsArray
  
  postsArray = newPost;

  // ZZZ return-to:  write post to file.
  // res.end(id + "  " + fname + "  " + title + " " + content);
  // this work in rp.js -- passing the newly populated pops array to posts to fully render
  res.render("posts", {postsArray: postsArray});
})


module.exports = router;
