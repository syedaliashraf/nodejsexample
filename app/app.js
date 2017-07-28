/*eslint-env node*/

/*eslint-disable no-unused-params */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/routing1', function (req, res) {
  res.send('Hello World for routing!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
