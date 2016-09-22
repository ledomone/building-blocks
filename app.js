var express = require('express');
var app = express();

var logger = require('./logger');
var onlyGet = require('./only_get');

// middleware
app.use(logger);
app.use(express.static('public'));
app.use(onlyGet);

app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
