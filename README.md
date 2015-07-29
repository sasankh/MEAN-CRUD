# MEAN-CRUD

The web application consists of the minimum requirement for the MEAN CRUD function. Duplication, data validation, etc not performed. Simple CRUD

The system uses 'mongojs' for database interaction

1) To start the application install the node modules by typing the command "npm install". It will install nodemon, mongojs, express, and body-parser.

2) Create the mongoDB database and collection.

a) You can restore from the dbDUMP

Go into dbDUMP

Run the command:-  mongorestore --db CRUD CRUD

b)Use the following commands:

For database:- use CRUD

For collection:- db.createCollection("crudCollection")

3) Run the application by entering the command "node server.js" OR "nodemon server.js"

4) Application is running in port '3000' access in browser  at "http://localhost:3000"

Thank you

Note:
There is also a chef cookbook for windows that downloads, install and runs mongodb as service. pulls the git repository. perform mongorestore of the dump and runs the node server. It is available in windows-chef-cookbook.
