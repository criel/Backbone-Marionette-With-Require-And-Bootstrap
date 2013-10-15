define([
  'backbone', 'controllers/util/FetchController', 'i18n'
], function (backbone, FetchController, i18n) {
    return backbone.Model.extend({
		
		initialize: function(options) {
			this.fetchController = new FetchController();
		},
		
		destroy: function(options) {
			backbone.Model.prototype.destroy.call(this, this.fetchController.extendModelOptions(options));
		},
		
		save: function(options) {
			backbone.Model.prototype.save.call(this, null, this.fetchController.extendModelOptions(options));
		},
	
		fetch: function (options) {
			backbone.Model.prototype.fetch.call(this, this.fetchController.extendModelOptions(options));
		},
		
		set: function (key, value) {
            if (key.length == null || key.indexOf('.') < 0) {
                backbone.Model.prototype.set.call(this, key, value);
                return;
            }

            var firstKey = key.substring(0, key.indexOf('.'));
            var obj = this.get(firstKey);
            return eval('obj' + key.substring(key.indexOf('.')) + "=" + value);
        },
		
		validate: function(fieldName, fieldValue) {
			var messages = {'errors': [], 'warnings': [], 'infos': []};
			this.validateModel(messages, fieldName, fieldValue); 
			return messages;
		},
		
		addMessage: function(messages, fieldName, messageKey) {
			messages[messages.length] = i18n[fieldName + messageKey];
		},

	});
});