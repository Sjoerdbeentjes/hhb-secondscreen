var express = require('express'),
	fs = require('fs');
var router = express.Router();

var games = require('../public/data/games.json')
var game = games.games[1];

router.get('/', function(req, res, next) {
	// menu items
	res.locals.live = "active";
	res.locals.fragments = "";
	res.locals.recipes = "";

	// set title
	var title = "Technische opdracht";
	res.locals.title = title;

	// make local for game object
	res.locals.game = game;

	// load view
	res.render('game2.ejs');

	req.app.locals.timeNowGameTwo;

	function timeGameTwo(){
	  if (req.app.locals.timeNowGameTwo > 0) {
	      req.app.locals.timeNowGameTwo--;
	      console.log(req.app.locals.timeNowGameTwo);
	  	  setTimeout(timeGameTwo, 100);
	  }
	}

	timeGameTwo()
});

router.post('/', function(req, res, next) {
	req.app.locals.gameSecond = true;
	req.app.locals.timeNowGameTwo = 0;
	res.redirect('live');
});

module.exports = router;