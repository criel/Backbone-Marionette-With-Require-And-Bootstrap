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
			var messages = this.model.validate(fieldName, fieldValue);
			
			var helpBox = $(this.el).find('#'+fieldName+'-help');
			this.renderMessages(helpBox, messages);
			this.toggleFieldHighlighting(helpBox.parent(), fieldValue, messages);
		},

		renderMessages: function(helpBox, messages) {
			var htmlMessages = '';
			if(messages.errors.length > 0)
				htmlMessages = messages.errors.join("<br />");
			else if (messages.warnings.length > 0)
				htmlMessages = messages.warnings.join("<br />");
			else if (messages.infos.length > 0)
				htmlMessages = messages.infos.join("<br />");
				
			helpBox.html(htmlMessages);
		},
		
		toggleFieldHighlighting: function(row, fieldValue, messages) {
			row.removeClass('has-success')
			   .removeClass('has-error')
			   .removeClass('has-warning');

			if( messages.errors.length > 0) {
				row.addClass('has-error');
			} else if (messages.warnings.length > 0) {
				row.addClass('has-warning');
			} else if(fieldValue.length > 0) { 
				row.addClass('has-success');
			}
		}
		
		
	});
});
