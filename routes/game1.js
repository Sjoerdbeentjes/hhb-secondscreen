var express = require('express'),
	fs = require('fs');  
var router = express.Router();

var games = require('../public/data/games.json')
var game = games.games[0];

router.get('/', function(req, res, next) {
	// menu items
	res.locals.live = "active";
	res.locals.fragments = "";
	res.locals.recipes = "";

	// set title
	var title = "Signatuuropdracht";
	res.locals.title = title;

	// make local for game object
	res.locals.game = game;

	// load view
	res.render('game1');

	req.app.locals.timeNowGameOne;

	function timeGameOne(){
	  if (req.app.locals.timeNowGameOne > 0) {
	      req.app.locals.timeNowGameOne--;
	      console.log(req.app.locals.timeNowGameOne);
	  	  setTimeout(timeGameOne, 100);
	  }
	}

	timeGameOne();
});

router.post('/', function(req, res, next) {
	req.app.locals.gameFirst = true;
	req.app.locals.timeNowGameOne = 0;
	res.redirect('live');
});

module.exports = router;