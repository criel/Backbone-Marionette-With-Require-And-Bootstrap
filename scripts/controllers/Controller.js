define(['marionette', 'app', 'views/View'],
function (marionette, app, View) {
    return marionette.Controller.extend({

		loadView: function() {
			var view = new View();
			app.content.show(view);
		}
		

    });
});
