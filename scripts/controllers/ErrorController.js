define(['marionette', 'vent'],
function (marionette, vent) {
    return marionette.Controller.extend({
	
		initialize: function(options) {
            this.app = options.app;
			vent.bind("unauthenticated", this.unauthenticated);
			vent.bind("unauthorized", this.unauthorized);
			vent.bind("genericError", this.genericError);
			vent.bind("requestTimeout", this.requestTimeout);
		},
		
		unauthenticated: function() {
			// pop up dialog asking for login ... or redirect to login page
		},
		
		unauthorized: function() {
			// redirect to login? or to an unauthorized page? ... 
			// this should never happen in production unless it's a coding error, or the user attempted an unauthorized URL
		},
		
		genericError: function() {
			
		},
		
		requestTimeout: function() {
			
		},
		
		
    });
});
