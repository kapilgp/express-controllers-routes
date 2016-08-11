/**
 * Test Controller
 */

//Controller Exports
module.exports = {
	name: 'tests',
	get:{
		//Action Index
		index : function(req, res) {
			
			res.send("Tests Site INDEX GET ACTION");
			
	    }
	},
	//Post Requests
	post: {
		
		index : function(req, res) {
			
			res.send("Tests site INDEX POST ACTION");
			
	    }		
	} 
}