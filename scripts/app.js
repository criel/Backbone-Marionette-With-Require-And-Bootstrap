define([ "marionette" ], function(marionette) {

	var app = new marionette.Application();

	app.addRegions({
	    content: "#content",
	    dialog: "#dialog"
	});

	return app;
});