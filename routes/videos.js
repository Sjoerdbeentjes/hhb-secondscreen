var express = require('express');
var router = express.Router();

var liveData = require('../public/data/live-data.json')

router.get('/', function(req, res, next) {
  // menu items
  res.locals.live = "active";
  res.locals.fragments = "";
  res.locals.recipes = "";

  // set title
  title = "Live";
  res.locals.title = title;

  //set timer 
  req.app.locals.timeNowGameOne = 100;

  res.locals.videoThumbs = liveData.videos;
  res.locals.recipeThumbs = liveData.recipes;

  // load view
  res.render('videos');

  console.log(req.app.locals.gameFirst);
  console.log(req.app.locals.gameSecond);
  console.log(req.app.locals.gameThird);

});

router.get('/video/:index', function(req, res, next) {
  // menu items
  res.locals.live = "active";
  res.locals.fragments = "";
  res.locals.recipes = "";

  // set title
  title = "Live";
  res.locals.title = title;

  res.locals.video = liveData.videos[req.params.index];

  // load view
  res.render('video');

});

router.get('/recipe/:index', function(req, res, next) {
  // menu items
  res.locals.live = "active";
  res.locals.fragments = "";
  res.locals.recipes = "";

  // set title
  title = "Live";
  res.locals.title = title;

  res.locals.recipe = liveData.recipes[req.params.index];

  // load view
  res.render('recipe');
});

module.exports = router;