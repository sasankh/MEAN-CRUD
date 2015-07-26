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
  db.crudCollection.insert(req.body,function(err, docs){
    res.json();
  });
}

// retrive all data from the collection
function retriveAllData(req, res){
  db.crudCollection.find(function(err, docs){    //find returns array
    res.json();
  });
}

// retrive one data from the collection
function retriveOneData(req, res){
  var id = req.params.id;
  db.crudCollection.findOne({_id: mongojs.ObjectId(id)},function(err, docs){    //'findOne' returns single json
    res.json();
  });
}

// Update data in the collection
function updateData(req, res){
  var id = req.params.id;
  db.crudCollection.findAndModify({_id: mongojs.ObjectId(id)},function(err, docs){
    res.json();
  });
}

// Remove data from the collection
function deleteData(req, res){
  var id = req.params.id;
  db.crudCollection.remove({_id: mongojs.ObjectId(id)},function(err, docs){
    res.json();
  });
}

//exporting function from module
module.exports.createData = createData;
module.exports.retriveAllData = retriveAllData;
module.exports.retriveOneData = retriveOneData;
module.exports.updateData = updateData;
module.exports.deleteData = deleteData;
