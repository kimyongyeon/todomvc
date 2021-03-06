(function () {
	'use strict';

	// Todo Router
	// ----------

	new (Thorax.Router.extend({
		// The module variable is set inside of the file
		// generated by Lumbar
		name: module.name,
		routes: module.routes,

		setFilter: function (param) {
			// Set the current filter to be used
			window.app.TodoFilter = param ? param.trim().replace(/^\//, '') : '';
			// Thorax listens for a `filter` event which will
			// force the collection to re-filter
			window.app.Todos.trigger('filter');
		}
	}));

}());
