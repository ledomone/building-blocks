var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/public/index.html');
});

app.get('/blocks', function(request, response) {
	response.redirect(301, '/parts');
});

app.get('/parts', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
