var express = require('express'); //declaring express
var app = express(); //assigning express to app
var bodyParser = require('body-parser'); //declaring body parser

app.use(express.static(__dirname + "/public"));  // asking express to use the folder
app.use(bodyParser.json());  //asking express to use the body parser

//server ports
app.listen(3000);    //asking express to use port 3000
