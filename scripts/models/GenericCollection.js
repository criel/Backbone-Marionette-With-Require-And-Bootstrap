define([
  'backbone', 'models/GenericModel', 'controllers/util/FetchController'
], function (backbone, GenericModel, fetchController) {
    return backbone.Collection.extend({
        model: GenericModel,
		
		fetch: function (options) {
			backbone.Model.prototype.fetch.call(fetchController.extendModelOptions(options));
		},

    });
});