define(['marionette', 'vent', 'i18n', 'views/GenericDialogView'],
function (marionette, vent, i18n, GenericDialogView) {
    return marionette.Controller.extend({
	
		initialize: function(options) {
            this.app = options.app;
			_.bindAll(this, 'genericError', 'unauthenticated', 'unauthorized', 'requestTimeout');
			vent.bind("unauthenticated", this.unauthenticated);
			vent.bind("unauthorized", this.unauthorized);
			vent.bind("genericError", this.genericError);
			vent.bind("requestTimeout", this.requestTimeout);
		},
		
		unauthenticated: function() {
			// pop up dialog asking for login ... or redirect to login page
		},
		
		unauthorized: function() {
			var genericDialogView = new GenericDialogView({
				header: i18n['unauthorized_error_header'],
				messages: i18n['unauthorized_error']
			});
			this.app.dialog.close();
			this.app.dialog.show(genericDialogView);
		},
		
		genericError: function() {
			var genericDialogView = new GenericDialogView({
				header: i18n['generic_error_header'],
				messages: i18n['generic_error']
			});
			this.app.dialog.close();
			this.app.dialog.show(genericDialogView);
		},
		
		requestTimeout: function() {
			var genericDialogView = new GenericDialogView({
				header: i18n['timeout_error_header'],
				messages: i18n['timeout_error']
			});
			this.app.dialog.close();
			this.app.dialog.show(genericDialogView);
		},
		
		
    });
});
