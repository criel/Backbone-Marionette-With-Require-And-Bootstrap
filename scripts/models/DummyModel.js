define([
  'models/GenericModel'
], function (GenericModel) {
    return GenericModel.extend({
		url: '/dummy/url',
		
		runFieldValidation: function(messages, fieldName, fieldValue) {
			this.validateTextInput(messages, fieldName, fieldValue); 
			this.validateTextInput2(messages, fieldName, fieldValue); 
		},
		
		validateTextInput: function(messages, fieldName, fieldValue) {
			if(fieldName!='textInputId') 
				return;

			if(fieldValue == '') {
				this.addMessage(messages.errors, fieldName, '_required');
				return;
			}
			if(fieldValue.toUpperCase() != 'MUHA') {
				this.addMessage(messages.errors, fieldName, '_error1');
			}
			if(fieldValue[0] != 'M') {
				this.addMessage(messages.warnings, fieldName, '_warn1');
			}
			if(fieldValue.toUpperCase() == 'MUHA') {
				this.addMessage(messages.infos, fieldName, '_info1');
			}
		},
		
		validateTextInput2: function(messages, fieldName, fieldValue) {
			if(fieldName!='textInputId2') 
				return;

			if(this.get('textInputId').toUpperCase() == 'MUHA' && fieldValue == '') {
				this.addMessage(messages.errors, fieldName, '_required_when_muha');
				return;
			}
		},
		
	});
});