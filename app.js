var express = require('express');
var app = express();


// middleware
app.use(express.static('public'));

app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
