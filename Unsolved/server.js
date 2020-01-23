//Dependencies 

let express = require("express");
let path = require("path");

//set up the express app

let app = express();
let PORT = process.env.PORT || 8181; 

//sets up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//basic routes that sends the user first to the AJAX Page 
require("./api/tables")(app);
require("./api/waitlist")(app);

//lister 
app.listen(PORT, function () {
    console.log("You did it!" + PORT);
});