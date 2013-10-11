define([
  'backbone', 'controllers/util/FetchController'
], function (backbone, FetchController) {
    return backbone.Model.extend({
		
		initialize: function(options) {
			this.fetchController = new FetchController();
		},
		
		destroy: function(options) {
			backbone.Model.prototype.destroy.call(this, this.fetchController.extendModelOptions(options));
		},
		
		save: function(options) {
			backbone.Model.prototype.save.call(this, this.fetchController.extendModelOptions(options));
		},
	
		fetch: function (options) {
			backbone.Model.prototype.fetch.call(this, this.fetchController.extendModelOptions(options));
		},
	});
});