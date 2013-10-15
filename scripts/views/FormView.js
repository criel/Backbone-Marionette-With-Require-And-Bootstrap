define(['views/ItemView', 'i18n'],
function (ItemView, i18n) {
    return ItemView.extend({
		
		updateModel: function(e) {
			var fieldName = e.currentTarget.id;
		    var fieldValue = e.currentTarget.value.trim();
			
			this.model.set(fieldName, fieldValue);
			this.validateField(fieldName, fieldValue);
		},
		
		validateField: function(fieldName, fieldValue) {
			var errors = this.model.validate(fieldName, fieldValue);
			
			var helpBox = $(this.el).find('#'+fieldName+'-help');
			this.renderErrors(helpBox, errors);
			this.toggleErrorHighlighting(helpBox.parent(), fieldValue, errors);
		},

		renderErrors: function(helpBox, errors) {
			var htmlErrors = errors.join("<br />");
			helpBox.html(htmlErrors);
		},
		
		toggleErrorHighlighting: function(row, fieldValue, errors) {
			if( errors.length > 0) {
				row.removeClass('has-success');
				row.addClass('has-error');
			} else {
				row.removeClass('has-error');
				if(fieldValue.length > 0) 
					row.addClass('has-success');
			}
		}
		
		
	});
});
