var express = require('express');
var expCtrl = require('express-controllers-routes');
var http    = require('http');

var port = '3001';


//express-app
var app = express();

//Setup routing
var router = express.Router();
app.use(router);

expCtrl.bind(router, __dirname + '/controllers/admin', '/admin');
expCtrl.bind(router, __dirname + '/controllers/site');
expCtrl.bind(router, __dirname + '/controllers/api', '/api');


//Start a http-server and listen to the port
http.createServer(app).listen(port).listen(function() {
    console.log('Now running at localhost:'+port);
});