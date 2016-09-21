var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.write('Hello world!');
	response.end();
});

app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.send(blocks);
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
