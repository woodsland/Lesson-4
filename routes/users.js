//  File: /route/users.js
//  Name: Wai Lim Leung
//  ID  : 301276989
//  Date: Feb 1, 2023

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
