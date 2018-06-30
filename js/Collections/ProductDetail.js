'use strict'
MercadoLivreApp.Collections.ProductDetail = Backbone.Collection.extend({
	url: `${END_POINT}/items/`,
	model: MercadoLivreApp.Models.ProductDetail,

	sync: function(method, collection, options) {
		return new Promise(resolve => {
			let id 	= options.data.id;
			let xhr = new XMLHttpRequest();

			xhr.open('GET', `${collection.url}${id}`, true);
			xhr.onloadend = function() {
				resolve(JSON.parse(this.responseText));
			};

			xhr.send();
		});
	}
});