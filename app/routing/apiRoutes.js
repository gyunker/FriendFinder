// ===============================================================================
// LOAD DATA
// ===============================================================================
var friends = require('../data/friends.js');
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app){
	// API GET Requests
	// ---------------------------------------------------------------------------
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});
	// API POST Requests
	// ---------------------------------------------------------------------------
	app.post('/api/friends', function(req, res){
		friends.push(req.body);
	});
	// ---------------------------------------------------------------------------
	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		friends = [];
		console.log(friends);
	})
}