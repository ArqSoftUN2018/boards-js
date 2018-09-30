var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
    mongoose = require('mongoose'),
    Board = require('./src/models/boardModel'),
    bodyParser = require('body-parser'),
    session  = require('express-session'),
    configDB = require('./config/database.js');

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url, {
    useMongoClient: true
}); // connect to our database

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


var routes = require('./src/routes/boardRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('Board MS, listening on: ' + port);