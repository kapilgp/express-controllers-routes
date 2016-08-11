/**
 * Test Controller
 */

//Controller Exports
module.exports = {
	name: 'tests',
	get:{
		//Action Index
		index : function(req, res) {
			
			res.send("Tests Admin INDEX GET ACTION");
			
	    },
	    //Action Index
		list : function(req, res) {			
			res.send("Tests Admin LIST GET ACTION");
	    },
	    'list:id': function(req, res) {
	    	res.send('Tests admin list: '+ req.params.id + 'Get Action');
	    },
	    'list_abc': function(req, res) {
	    	res.send("Tests admin list/abc Get Action");
	    }
	},
	//Post Requests
	post: {
		
		add : function(req, res) {			
			res.send("Tests Admin ADD POST ACTION");
	    }		
	} 
}