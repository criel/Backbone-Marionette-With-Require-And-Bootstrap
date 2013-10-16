define(['marionette', 'vent'],
function (marionette, vent) {
    return marionette.Controller.extend({
	
		handleErrors: function(model, response, options) {
			if (response.status == 401)
                vent.trigger('unauthenticated');
			else if (response.status == 403)
                vent.trigger('unauthorized');
			else if (response.status == 408)
                vent.trigger('requestTimeout');
			else if (response.status == 404 ||
				response.status == 400 ||
				response.status == 405)
                vent.trigger('genericError');
			else
				vent.trigger('genericError');
		},
		
		extendModelOptions: function (options) {
            if (options == null)
                return this.genericErrorHandlerOptions();

            var self = this;
            if (options.error != null) {
                var errorHandler = options.error;
                options.error = function (model, response, options) {
                    self.handleErrors(model, response, options);
                    errorHandler(model, response, options);
                }
                return options;
            } else {
                return _.extend(options, this.genericErrorHandlerOptions());
            }
        },
		
		genericErrorHandlerOptions: function() {
			return { error: this.handleErrors };
		},

		
    });
});
