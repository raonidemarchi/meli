'use strict'
MercadoLivreApp.Collections.ProductDescription = Backbone.Collection.extend({
	url: `${END_POINT}/items/`,
	model: MercadoLivreApp.Models.ProductDescription,

	sync: function(method, collection, options) {
		return new Promise(resolve => {
			let id 	= options.data.id;
			let xhr = new XMLHttpRequest();

			xhr.open('GET', `${collection.url}${id}/description`, true);
			xhr.onloadend = function() {
				resolve(this);
			};

			xhr.send();
		});
	}
});