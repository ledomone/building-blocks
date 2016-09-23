var express = require('express');
var app = express();

var logger = require('./logger');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// middleware
app.use(logger);
app.use(express.static('public'));

var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

var blocksRoute = app.route('/blocks');

blocksRoute.post(parseUrlencoded, function(request, response) {
	var newBlock = request.body;
	blocks[newBlock.name] = newBlock.description;

	response.status(201).json(newBlock.name);
});

blocksRoute.get(function(request, response) {
	if (request.query.limit >= 0) {
		response.json(Object.keys(blocks).slice(0, request.query.limit));
	} else {
		response.json(Object.keys(blocks));
	}
});

app.param('name', function(request, response, next) {
	var name = request.params.name;
	var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

	request.blockName = block;
	next();
});

var blocksNameRoute = app.route('/blocks/:name');

blocksNameRoute.get(function(request, response) {
	var description = blocks[request.blockName];
	if (!description) {
		// if not found - description is undefined
		response.status(404).json('No description found for ' + request.params.name);
	} else {
		response.json(description);
	}
});

blocksNameRoute.delete(function(request, response) {
	if (blocks[request.blockName]) {
		delete blocks[request.blockName];
		response.sendStatus(200);
	} else {
		response.sendStatus(404);
	}
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
