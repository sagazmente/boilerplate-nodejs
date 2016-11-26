var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.json({
    message: 'Welcome to our API.'
  })
});

// app.use('/api', require('./routes/user.mock.js'))

app.listen(80, function () {
  console.log('Listening on port 80');
});
