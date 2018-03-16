console.log('apiRoutes js Connected!');

// fake DB
var friends = require('../data/friends.js')

function apiRoutes(app, path) {
	
	app.get("/api/friends", function(req, res) {
	  	res.json(friends);
	});

	// Create New Friend post
	app.post("/api/friends", function(req, res) {

		var questionnaire = req.body;
		
		console.log(questionnaire);
		friends.push(questionnaire);
		res.json(questionnaire);

	});


}

module.exports = apiRoutes;