define(['marionette', 'app'],
function (marionette, app) {
    return marionette.Controller.extend({

		initialize: function(options) {
            this.app = options.app;
			if(this.init)
				this.init(options);
        },
		
		initView: function(ViewClass, options) {
			var view = new ViewClass(options);
			this.fetchModel(options);
			this.fetchCollection(options);
			this.fetchModels(options);
			return view;
		},
		
		initCreateView: function(ViewClass, options) {
			var view = new ViewClass(options);
			this.fetchModels(options);
			return view;
		},
		
		fetchModel: function(options) {
			if(options.model)
				options.model.fetch();
		},
		
		fetchCollection: function(options) {
			if(options.collection)
				options.collection.fetch();
		},

		fetchModels: function(options) {
			_.each(options.models, function(model) {
				model.fetch();
			});
		}
		

    });
});
