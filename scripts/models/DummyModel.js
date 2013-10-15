define([
  'models/GenericModel',
  'i18n'
], function (GenericModel, i18n) {
    return GenericModel.extend({
		url: '/dummy/url',
		
		validate: function(fieldName, fieldValue) {
			var errors = [];
			if(fieldName=='textInputId') {
				if(fieldValue == '') {
					errors[errors.length] = i18n[fieldName + '_required'];
					return errors;
				}
				if(fieldValue != 'Muha') {
					errors[errors.length] = i18n[fieldName + '_error1'];
				}
				if(fieldValue[0] != 'M') {
					errors[errors.length] = i18n[fieldName + '_error2'];
				}
			} 
			
			if(fieldName=='textInputId2') {
				if(this.get('textInputId') == 'Muha' && fieldValue == '') {
					errors[errors.length] = i18n[fieldName + '_required_when_muha'];
					return errors;
				}
			}
			return errors;
		}
	});
});