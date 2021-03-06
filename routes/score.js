var express = require('express'),
	fs = require('fs');
var router = express.Router();

var liveData = require('../public/data/live-data.json')

var games = require('../public/data/games.json')
var game = games.games[2];

router.get('/', function(req, res, next) {
	res.locals.recipeThumbs = liveData.recipes;
	
	res.locals.title = "score";
	res.render('score');
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