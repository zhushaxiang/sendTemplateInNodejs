var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log(req);
	var token="cafebabe";
	var echostr = req.params.echostr;
	var nonce = req.params.nonce;
	console.log(echostr);
	console.log(nonce);
  res.send(req.query.echostr);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});