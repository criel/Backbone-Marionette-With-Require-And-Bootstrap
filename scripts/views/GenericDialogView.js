define(['views/ItemView', 'hbs!../../templates/GenericDialog', 'bootstrap'],
function (ItemView, viewTemplate) {
    return ItemView.extend({
	    template: viewTemplate,
		
		events: {
			'click #dismiss': 'dismissDialog',
		},
		
		ui: {
            genericDialog: '#genericDialog',
			header: '#header',
			messages: '#messages'
        },
		
		init: function(options) {
			this.header = options.header;
			this.messages = options.messages;
		},
		
		onRender: function() {
			this.showDialog();
			this.ui.header.html(this.header);
			this.ui.messages.html(this.messages);
		},

		showDialog: function () {
            this.ui.genericDialog.modal('show');
        },
		
		dismissDialog: function() {
			this.ui.genericDialog.modal('hide');
		},
		
	});
});
