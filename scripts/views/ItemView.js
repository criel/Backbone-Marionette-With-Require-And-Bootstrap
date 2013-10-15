define(['marionette', 'i18n'],
function (marionette, i18n) {
    return marionette.ItemView.extend({
		initialize: function(options) {
			this.init(options);
			this.registerTranslationHelper();
		},		
		
		registerTranslationHelper: function() {
			Handlebars.registerHelper('$', function (key) {
                return i18n[key];
            });
		}
	});
});