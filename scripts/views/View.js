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
		
		save: function() {
			this.model.save({success: this.success, error: this.error});
		},
		
		success: function() {
			alert("Success");
		},
		
		error: function() {
			alert("Error");
		},
		
		cancel: function() {
		}
	});
});
