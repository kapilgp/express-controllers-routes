/**
 * Library for setting routes according to controllers
 * @created  August 01, 2016
 * @author Kapil Gupta <kapil.gp@gmail.com>
 * @license https://raw.githubusercontent.com/kapilgp/express-controllers-routes/master/LICENSE
 *
 */

//Require Modules
var fs = require('fs');
var path = require('path');

var _routes = {

	bindRoutes: function(router, dirPath, prefix){
		var self = this;
		
		fs.readdir(dirPath , function(err, list){
			if(err){ console.log(err); return; }
			list.forEach(function(file){

				if (file.indexOf('Controller') == -1 || !self.chkExt(file) ) return;

				var ctrlPath = dirPath + '/' + file;
				var ctrl = require(ctrlPath);

				if (!("name" in ctrl) || (ctrl.name).trim() === "") {
					console.log("ERR: " + file + " Name is not mentioned");
					return;
				}

				// IF Get Key exists
				if ("get" in ctrl) {
					self.setRouter(router, ctrl, "get", prefix);
				}

				if ("post" in ctrl) {
					self.setRouter(router, ctrl, "post", prefix);
				}
			});

			return router;
		});
	},

	setRouter: function(router, ctrl, method, prefix) {
		for (var action in ctrl[method]) {
			
			var ctrlUrl = prefix + '/' + (ctrl.name).trim() + '/';
			var actionUrl = ctrlUrl + action.replace(/_/g, "/");
				
			if (action == 'index') {
				actionUrl = ctrlUrl;
			}
			router[method](actionUrl, ctrl[method][action]);

			//console.log(method, actionUrl);
		}
	},

	chkExt: function(file) {

		var ext = file.split('.')[1];
		
		if (ext !== 'js') return false;

		return true;
	}
}


module.exports = {
	
	bind: function(router, dir, prefix) {
		//console.log(router);
		if (prefix === undefined) prefix = "";

		_routes.bindRoutes(router, dir, prefix);
	}
}