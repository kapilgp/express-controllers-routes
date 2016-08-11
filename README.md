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

### Basic Example:

So we create a tests controller for admin
Create a file controllers/admin/testsController.js

```
/**
 * Test Controller
 */

//Controller Exports
module.exports = {
	// Name of the controller by which all actions of it binds
	name: 'tests', 

	// Get Actions
	get:{
		//Action Index
		// Access via /admin/tests
		index : function(req, res) {		
			res.send("Tests Admin INDEX GET ACTION");
	    },
	    //Action List : /admin/tests/list
		list : function(req, res) {			
			res.send("Tests Admin LIST GET ACTION");
	    },

	    // Action for particular list: /admin/list:23
	    'list:id': function(req, res) {
	    	res.send('Tests admin list: '+ req.params.id + 'Get Action');
	    },
	    // Action /admin/list/abc
	    'list_abc': function(req, res) {
	    	res.send("Tests admin list/abc Get Action");
	    }
	},

	//Post Actions
	post: {
		// POST Action for /admin/add
		add : function(req, res) {			
			res.send("Tests Admin ADD POST ACTION");
	    }		
	} 
}
```


### Example: https://github.com/kapilgp/express-controllers-routes/tree/master/example


### Feedback

Pull requests, feature ideas and bug reports are welcome

### License

MIT