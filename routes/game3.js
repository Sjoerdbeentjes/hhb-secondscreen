var express = require('express'),
	fs = require('fs');
var router = express.Router();

var games = require('../public/data/games.json')
var game = games.games[2];

router.get('/', function(req, res, next) {
	// menu items
	res.locals.live = "active";
	res.locals.fragments = "";
	res.locals.recipes = "";

	// set title
	var title = "Spektakelstuk";
	res.locals.title = title;

	// make local for game object
	res.locals.game = game;

	// load view
	res.render('game3.ejs');

	req.app.locals.timeNowGameThree;

	function timeGameThree(){
	  if (req.app.locals.timeNowGameThree > 0) {
	      req.app.locals.timeNowGameThree--;
	      console.log(req.app.locals.timeNowGameThree);
	  	  setTimeout(timeGameThree, 100);
	  }
	}

	timeGameThree() 
});

router.post('/', function(req, res, next) {
	req.app.locals.gameThird = true;
	req.app.locals.timeNowGameThree = 0;
	res.redirect('live');
});

module.exports = router;