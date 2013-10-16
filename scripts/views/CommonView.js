define(['i18n'],
function (i18n) {
    return {
		initialize: function(options) {
			if (this.init) 
				this.init(options);
			
			this.initModels(options);
			this.registerTranslationHelper();
		},		
		
		initModels: function(options) {
			this.fetchCount = 0;
			
			this.initModel(options);
			this.initCollection(options);
			this.initExtraModels(options);
		},
		
		initModel: function(options) {
			if(!options.model)
				return;

			this.model.on("sync", this.renderWhenLoaded, this);
			if(options.viewMode != Constants.VIEW_MODE_CREATE)
				this.fetchCount++;
		},
		
		initCollection: function(options) {
			if(!options.collection)
				return;

			this.model.on("sync", this.renderWhenLoaded, this);
			this.fetchCount++;
		},
		
		initExtraModels: function(options) {
			if(!options.models)
				return;
			
			var self = this;
			_.each(options.models, function(model) {
				self[model.name] = model;
				self[model.name].on("sync", self.renderWhenLoaded, self);
				self.fetchCount++;
			});
		},
		
		renderWhenLoaded: function() {
			this.fetchCount--;
			if(this.fetchCount > 0) 
				return;
				
			if(this.switchTemplateOnLoad) 
				this.switchTemplateOnLoad();
				
			this.render();
		},
		
		registerTranslationHelper: function() {
			Handlebars.registerHelper('$', function (key) {
				if(key.indexOf('.') > 0) {
					var keyArray = key.split('.');
					var firstKey = keyArray[0];
					var secondKey = keyArray[1];

					if(!i18n[firstKey])
						return "<<" + firstKey + ">>";
					
					if(!i18n[firstKey][secondKey])
						return "<<" + secondKey + ">>";

					return i18n[firstKey][secondKey];
				}
				
				if(!i18n[key])
					return "<<" + firstKey + ">>";
				
				return i18n[key];
			});
		},
	};
});
