var path = require('path'), 
	express = require('express'), 
  session = require('express-session'),
  bodyParser = require('body-parser'),
	ejs = require('ejs'),
	mysql = require('mysql'),
  multer = require('multer'),
  bodyParser = require('body-parser'),
	myConnection = require('express-myconnection'),
  cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var liveRouter = require('./routes/live');
var videoRouter = require('./routes/videos');
var receptenRouter = require('./routes/recepten')
var game1Router = require('./routes/game1');
var game2Router = require('./routes/game2');
var game3Router = require('./routes/game3');
var scoreRouter = require('./routes/score');
var wrongRouter = require('./routes/wrong');

var app = express();

// app.use(myConnection(mysql, {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     port: 8889,
//     database: 'hhh'
// }, 'single'));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Add session support
app.use(session({
  secret: 'hardstikkegeheim', // Customize this string for security!
  cookie: { path: '/', httpOnly: false, secure: false, maxAge: null },
  saveUninitialized: true,
  resave: true
}));

// Game count
app.locals.gameFirst = false;
app.locals.gameSecond = false;
app.locals.gameThird = false;

app.locals.timeNowGameOne = 100;
app.locals.timeNowGameTwo = 100;
app.locals.timeNowGameThree = 100;

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/live', liveRouter);
app.use('/videos', videoRouter);
app.use('/recepten', receptenRouter);
app.use('/signatuur', game1Router);
app.use('/technisch', game2Router);
app.use('/spektakel', game3Router);
app.use('/score', scoreRouter);
app.use('/*', wrongRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});