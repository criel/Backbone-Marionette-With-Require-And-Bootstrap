define(['views/FormView', 'hbs!../../templates/View'],
function (FormView, viewTemplate) {
    return FormView.extend({
	    template: viewTemplate,
		
		events: {
			'blur input': 'updateModel'
		},
		
		init: function(options) {
		},
	});
});
