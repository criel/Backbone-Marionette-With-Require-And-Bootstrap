require.config({
	paths : {
		backbone : 'lib/backbone',
		underscore : 'lib/underscore.min',
		jquery : 'lib/jquery-1.10.2.min', 
		marionette: 'lib/backbone.marionette.min',
		'backbone.wreqr': 'lib/backbone.wreqr.min',
		'backbone.babysitter' : 'lib/backbone.babysitter.min',
		handlebars : 'lib/handlebars',
		text: 'lib/text',
		hbs: 'lib/hbs',
		bootstrap: "lib/bootstrap.min",
},
	pragmasOnSave : {
		excludeTpl : !0
	},
	shim : {
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : [ 'jquery', 'underscore' ],
			exports : 'Backbone'
		},
		handlebars : {
			exports: 'Handlebars'
		},
		bootstrap : {
			deps : [ 'jquery' ],
			exports : '$'
		},
	},
	locale: locale,
});
require(['jquery',
            'app',
            'router',
		  ],
function ($, app, router) {
    $.ajaxSetup({
        headers: {
            'Accept-Language': locale
        },
        cache: false
    });

	app.start();
	router.initialize(app);
});