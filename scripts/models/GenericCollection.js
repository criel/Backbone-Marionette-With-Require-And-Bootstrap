define([
  'backbone', 'models/GenericModel', 'controllers/util/FetchController'
], function (backbone, GenericModel, FetchController) {
    return backbone.Collection.extend({
        model: GenericModel,
		
		initialize: function(options) {
			this.fetchController = new FetchController();
			
			if(!options)
				return;

			this.name = options.name;
			this.url = options.url;
		},

		fetch: function (options) {
			backbone.Model.prototype.fetch.call(this, this.fetchController.extendModelOptions(options));
		},

    });
});