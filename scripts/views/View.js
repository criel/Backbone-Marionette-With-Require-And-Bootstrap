define(['views/FormView', 'hbs!../../templates/View'],
function (FormView, viewTemplate) {
    return FormView.extend({
	    template: viewTemplate,
		
		events: {
			'blur input': 'updateModel',
			'click #save': 'save',
			'click #cancel': 'cancel'
		},
		
		init: function(options) {
		},
		
		switchTemplateOnLoad: function () {
		},
		
		save: function() {
			this.model.save({success: this.success});
		},
		
		success: function(model, response, options) {
			alert("Success");
		},
			
		cancel: function() {
		}
	});
});
