var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.locals.live = "";
	res.locals.fragments = "";
	res.locals.recipes = "";


	var title = "404!";
	res.locals.title = title;

	// load view
	res.render('wrong.ejs');
});

module.exports = router;