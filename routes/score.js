var express = require('express'),
	fs = require('fs');
var router = express.Router();

var games = require('../public/data/games.json')
var game = games.games[2];

router.get('/', function(req, res, next) {
	res.locals.title = "score";
	res.render('score');
});

module.exports = router;