console.log("Connected to newPost.js");

var express = require('express');
var router = express.Router();

// =============== NEW:  Present Form for a NEW Post ======
router.get('/', function(req, res, next){
    res.render('new', { title: 'Express'});
});

module.exports = router;
