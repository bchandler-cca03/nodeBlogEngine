//  new.js:  "new" route to present a form for a
//    new post.

var express = require('express');
var router = express.Router();
var repo = require("../models/postRepo.js");

// ========== NEW:  Present Form for a NEW Post ======
router.get('/posts/new', function(req, res, next){
  // ZZZ return-to:  write a "New Post Form"
  // res.render("new");

    res.render('new', { title: 'Express'});

})

module.exports = router;
