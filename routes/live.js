var express = require('express');
var router = express.Router();

var liveData = require('../public/data/games.json')

router.get('/', function(req, res, next) {
    // menu items
    res.locals.live = "active";
    res.locals.fragments = "";
    res.locals.recipes = "";

    // set title
    title = "Speel mee";
    res.locals.title = title;

    // load view
    res.render('live');

    console.log(req.app.locals.gameFirst);
    console.log(req.app.locals.gameSecond);
    console.log(req.app.locals.gameThird);

    req.app.locals.timeNowGameOne;
    req.app.locals.timeNowGameTwo;
    req.app.locals.timeNowGameThree;

    function timeGameOne() {
        if (req.app.locals.timeNowGameOne > 0) {
            req.app.locals.timeNowGameOne--;
            console.log(req.app.locals.timeNowGameOne);
            setTimeout(timeGameOne, 3000);
        }
    }


    function timeGameTwo() {
        if (req.app.locals.timeNowGameTwo > 0) {
            req.app.locals.timeNowGameTwo--;
            console.log(req.app.locals.timeNowGameTwo);
            setTimeout(timeGameOne, 3000);
        }
    }

    function timeGameThree() {
        if (req.app.locals.timeNowGameThree > 0) {
            req.app.locals.timeNowGameThree--;
            console.log(req.app.locals.timeNowGameThree);
            setTimeout(timeGameOne, 3000);
        }
    }

    timeGameOne()

    setTimeout(function() { timeGameTwo(); }, 30000);
    setTimeout(function() { timeGameThree(); }, 30000);

});

module.exports = router;
