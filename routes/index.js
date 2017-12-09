var express = require('express');
var router = express.Router();

var repo = require("../models/postRepo.js");

// ============ Landing Page =============================
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
