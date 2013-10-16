define([
  'models/GenericModel'
], function (GenericModel) {
    return GenericModel.extend({
		name: 'dummyModel',
		url: '/dummy/url',
		
		runFieldValidation: function(messages, fieldName, fieldValue) {
			this.validateTextInput(messages, fieldName, fieldValue); 
			this.validateTextInput2(messages, fieldName, fieldValue); 
		},
		
		validateTextInput: function(messages, fieldName, fieldValue) {
			if(fieldName!='textInputId') 
				return;

			if(fieldValue == '') {
				this.addMessage(messages.errors, fieldName, 'required');
				return;
			}
			if(fieldValue.toUpperCase() != 'MUHA') {
				this.addMessage(messages.errors, fieldName, 'error1');
			}
			if(fieldValue[0] != 'M') {
				this.addMessage(messages.warnings, fieldName, 'warn1');
			}
			if(fieldValue.toUpperCase() == 'MUHA') {
				this.addMessage(messages.infos, fieldName, 'info1');
			}
		},
		
		validateTextInput2: function(messages, fieldName, fieldValue) {
			if(fieldName!='textInputId2') 
				return;

			if(this.get('textInputId').toUpperCase() == 'MUHA' && fieldValue == '') {
				this.addMessage(messages.errors, fieldName, 'required_when_muha');
				return;
			}
		},
		
	});
});