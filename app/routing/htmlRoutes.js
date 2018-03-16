console.log('HTML Route js Connected!');


function htmlRoutes(app, path) {
	// route for survey page
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// route for home page
	app.get("/", function(req, res) {	  
	  	res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

}

module.exports = htmlRoutes;