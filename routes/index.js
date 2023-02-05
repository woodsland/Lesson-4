//  File: /route/index.js
//  Name: Wai Lim Leung
//  ID  : 301276989
//  Date: Feb 1, 2023

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Index', { title: 'Index' });
});

router.get('/home', function(req, res, next) {
  res.render('Home', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('About_Me', { title: 'About Me' });
});

router.get('/project', function(req, res, next) {
  res.render('Project', { title: 'Project' });
});

router.get('/services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});

router.get('/library', function(req, res, next) {
  res.render('Library', { title: 'Library' });
});

module.exports = router;
