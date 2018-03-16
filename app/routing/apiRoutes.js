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

		var quesScores = questionnaire.scores;
		
		var bestfriendmatchdifftotal = 100;
		var bestFriend = {
			name:'',
			photo: ''
		}

		for (var i = 0; i < friends.length; i ++) {

			var difftotal = 0;
			for (var k = 0; k < friends[i].scores[k]; k ++)	{

				difftotal += Math.abs(parseInt(quesScores[k]) - parseInt(friends[i].scores[k]));

				if (difftotal < bestfriendmatchdifftotal) {
					bestFriend.name = friends[i].name;
					bestFriend.photo = friends[i].photo;
					bestfriendmatchdifftotal = difftotal;
				}

			}

		}

		friends.push(questionnaire);
		res.json(bestFriend);

	});


}

module.exports = apiRoutes;