var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('combined'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	res.json({
    message: 'Welcome to our API.'
  })
});

app.use('/api', require(__dirname + '/routes/user.mock.js'))

app.listen(80, function () {
  console.log('Listening on port 80');
});
