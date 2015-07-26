//This section contains the internal server side function
var mongojs = require('mongojs');   //using mongojs for interaction with mongoDB database
var db = mongojs('CRUD',['crudCollection']);    // Opening connection to the mongo database---- mongojs('databaseName',['CollectionName'])

/* Syntax for database interaction
cursor.collection.method({collectionField:searchCondition},{fieldsToReturn},function(err,docs){
  //'docs' is the data returned by the database
});
*/

//search is performed using MongojsID can be search using criteria
// add data to the collection
function createData(req, res){
  db.crudCollection.insert({_id: mongojs.ObjectId(id)},function(err, docs){
    res.json();
  });
}

// retrive data to the collection
function retriveData(req, res){
  db.crudCollection.find({_id: mongojs.ObjectId(id)},function(err, docs){    //find returns and array. Use 'findOne' instead of 'find' for single json
    res.json();
  });
}

// Update data to the collection
function updateData(req, res){
  db.crudCollection.findAndModify({_id: mongojs.ObjectId(id)},function(err, docs){
    res.json();
  });
}

// Delete data to the collection
function deleteData(req, res){
  db.crudCollection.remove({_id: mongojs.ObjectId(id)},function(err, docs){
    res.json();
  });
}

//exporting function from module
module.exports.createData = createData;
module.exports.retriveData = retriveData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
