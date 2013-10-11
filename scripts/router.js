define(['backbone',
		'controllers/Controller',
		'controllers/ErrorController'
],
 function (backbone,
		   Controller,
		   ErrorController
) {
	var initialize = function(app) {
	    var appRouter = backbone.Router.extend({
	        routes: {
	            '*actions': 'defaultAction'
	        }
	    });
		
		var options = { app: app };
	    
		var errorController = new ErrorController(options);
		var controller = new Controller(options);
		
	    var router = new appRouter();
		router.on("route:defaultAction", controller.loadView);
		backbone.history.start();
	};
	return {
		initialize : initialize
	};
});
