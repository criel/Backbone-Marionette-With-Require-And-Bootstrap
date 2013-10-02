define(['marionette', 'hbs!../../templates/View'],
function (marionette, viewTemplate) {
    return marionette.ItemView.extend({
	    template: viewTemplate,
	});
});
