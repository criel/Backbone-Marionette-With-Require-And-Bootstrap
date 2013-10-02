define(['backbone',
		'controllers/Controller'
],
 function (backbone,
		   Controller
) {
	var initialize = function(app) {
	    var appRouter = backbone.Router.extend({
	        routes: {
	            '*actions': 'defaultAction'
	        }
	    });
	    
		var controller = new Controller();
		
	    var router = new appRouter();
	    router.on('route:defaultAction', controller.loadView);
		backbone.history.start();
	};
	return {
		initialize : initialize
	};
});
