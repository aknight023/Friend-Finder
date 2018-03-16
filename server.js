var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Link in html and api routes
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');


// Server Routing Mapfuctions
htmlRoutes(app, path); 
apiRoutes(app, path); 



// Listener - Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});