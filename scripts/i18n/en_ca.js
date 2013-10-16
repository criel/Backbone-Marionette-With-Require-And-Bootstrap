define([], function () {

    return {
		textInputId: {
			label: "Text Input",
			placeholder: "Enter 'Muha' here",
			required: "Value required!",
			error1: "Value must be 'Muha'!",
			warn1: "Don't forget to capitalize the 'M'.",
			info1: "Another Input is now required.",
		},
		
		textInputId2: {
			label: "Another Input",
			placeholder: "Enter something here",
			required_when_muha: "Value required when Muha.",
		},
		
		checkInputsId: {
			label: "Checkbox Input",			
		},
		
		generic_error_header: "Server Error",
		generic_error: "An error occurred submitting your request. Please try again later. If the problem persists, please contact customer support at 1-800-...",
		
		unauthorized_error_header: "Authorization Error",
		unauthorized_error: "The role assigned to your use does not permit the operation you attempted. If you believe this to be an error, please contact customer support at 1-800-...",

		timeout_error_header: "Timeout Error",
		timeout_error: "The operation you attempted timed out. Please try again later. If the problem persists, please contact customer support at 1-800-...",

		button: {
			save: "Save",
			cancel: "Cancel",
			dismiss: "Dismiss",
		},
		
    };
});