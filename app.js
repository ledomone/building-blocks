var express = require('express');
var app = express();

var logger = require('./logger');

// middleware
app.use(logger);
app.use(express.static('public'));

var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

app.get('/blocks', function(request, response) {
	if (request.query.limit >= 0) {
		response.json(blocks.slice(0, request.query.limit));
	} else {
		response.json(blocks);
	}
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
