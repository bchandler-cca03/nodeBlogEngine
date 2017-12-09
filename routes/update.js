var express = require('express');
var router = express.Router();
var repo = require("../models/postRepo.js");


// ================ Update  ===================
router.get(['/', '/:permalink'], (req, res, next) => {
   
    let post = repo.getPost(req.params.permalink);
    res.render("update", {title: post.title, post: post});

});

router.post(['/', '/:permalink'], (req, res, next) => {

    if (req.body.passPhrase != "youbet") {
        res.redirect("/posts");
      };
    
      let permalink       = req.body.permalink,
          title           = req.body.title,
          content         = req.body.content;
    
      //create a "post-object"
      let updatePost = {permalink: permalink, title: title, content: content};
    
      // need to create a method 'updatePost'
      repo.updatePost(updatePost);

      res.redirect("/posts");

    });


module.exports = router;
