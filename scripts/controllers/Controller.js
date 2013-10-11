define(['marionette', 'app', 
'views/View',
'models/DummyModel',
],
function (marionette, app, 
View,
DummyModel) {
    return marionette.Controller.extend({

		initialize: function(options) {
            this.app = options.app;
			_.bindAll(this, 'loadView');
        },
		
		loadView: function() {
			var model = new DummyModel();
			var view = new View({
				model: model
			});
			model.fetch();
			
			this.app.content.show(view);
		}
		

    });
});
