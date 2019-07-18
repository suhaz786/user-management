// app.js

var express = require('express');
var bodyParser = require('body-parser');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger/swagger.json')
var user = require('./routes/user'); // Imports routes for the users
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://127.0.0.1:27017/userdb';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
