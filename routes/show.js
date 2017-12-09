var express = require('express');
var router = express.Router();
var repo = require("../models/postRepo.js");


// ============= Index:  Show All Posts ===================
router.get(['/', '/:permalink'], (req, res, next) => {
   
    let post = repo.getPost(req.params.permalink);
    console.log("Post Title: " + post.title + " " + post.content);
    res.render("show", {title: post.title, post: post});

});

module.exports = router;
