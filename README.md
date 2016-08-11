# express-controllers-routes

To convert expressjs into a MVC framework by adding controller-support. This module automatically set all routing according to your prefixes for all controllers.

So if we have to set multiple routing according to prefixes and want to setup code more clearly.

Like if we want to sepreate controllers for front site, admin panel and apis: 

For admin: /admin/users
For general Users: /users
For api: /api/users

### Installation
```
npm install --save-dev express-controllers-routes
```

### Usage:
```
var express = require('express');
var expCtrl = require('express-controllers-routes');

//express-app
var app = express();

//Setup routing
var router = express.Router();
app.use(router);

expCtrl.bind(router, __dirname + '/controllers/admin', '/admin'); // For Admin Routing
expCtrl.bind(router, __dirname + '/controllers/site');			  // For Front Site	
expCtrl.bind(router, __dirname + '/controllers/api', '/api');	  // For API routing

```

