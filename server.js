var express = require('express'); //declaring express
var app = express(); //assigning express to app
var bodyParser = require('body-parser'); //declaring body parser
var serverFunction = require('./function_modules/serverSideFunction'); // importing the serverside function module

app.use(express.static(__dirname + "/public"));  // asking express to use the folder
app.use(bodyParser.json());  //asking express to use the body parser

//server ports
app.listen(3000);    //asking express to use port 3000

//server side function
app.post('/createData', serverFunction.createData);   // create data --> input to collection
app.get('/retriveAllData', serverFunction.retriveAllData);   // get one data ---> retrive one data from collection
app.get('/retriveOneData/:id', serverFunction.retriveOneData);   // get one data ---> retrive one data from collection
app.put('/updateData/:id', serverFunction.updateData);    // update data ---> update the data
app.delete('/deleteData/:id',serverFunction.deleteData);   // delere data --> remove data from collection
