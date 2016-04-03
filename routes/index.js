var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// menu items
	res.locals.live = "active";
	res.locals.fragments = "";
	res.locals.recipes = "";


	var title = "Live";
	res.locals.title = title;

	// load view
	res.render('index.ejs');

	req.app.locals.gameFirst = false;
	req.app.locals.gameSecond = false;
	req.app.locals.gameThird = false;

});

module.exports = router;