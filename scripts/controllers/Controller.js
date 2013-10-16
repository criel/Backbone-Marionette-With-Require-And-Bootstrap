define(['controllers/BaseController', 
'views/View',
'models/DummyModel',
'models/GenericCollection'
],
function (BaseController, 
View,
DummyModel,
GenericCollection) {
    return BaseController.extend({

		init: function(options) {
			_.bindAll(this, 'loadView');
        },
		
		loadView: function() {
			var options = {
				viewMode: Constants.VIEW_MODE_CREATE,
				model: new DummyModel(),
				collection: null,
				models: {
					checkboxEnums: new GenericCollection({name:'checkboxEnums', url: '/enumerations/test1'})
				}
			};
			
			var view = this.initCreateView(View, options);
			this.app.content.show(view);			
		},
		

    });
});
