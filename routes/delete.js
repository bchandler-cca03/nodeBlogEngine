var express = require('express');
var router = express.Router();
var repo = require("../models/postRepo.js");


// ================ Delete  ===================
//   TODO:  Invoke a delete.ejs template to flash an alert
//           are you sure?  
// router.get(['/', '/:permalink'], (req, res, next) => {
   
//     let post = repo.getPost(req.params.permalink);
//     res.render("delete", {title: post.title, post: post});

// });

router.post(['/', '/:permalink'], (req, res, next) => {
    console.log("in router.post delete route");
    // if (req.body.passPhrase != "youbet") {
    //     res.redirect("/posts");
    //   };
    //  QUESTION:  IF ITS A GET, DO I GET A REQ.BODY?  PERMALINK
    //   NOT COMING IN.
      let permalink       = req.body.permalink,
          title           = req.body.title,
          content         = req.body.content;
    
      //create a "post-object"
      let postToDelete = {permalink: permalink, title: title, content: content};
    
      // need to create a method 'deletePost'
      repo.deletePost(postToDelete);

      res.redirect("/posts");

    });


module.exports = router;
