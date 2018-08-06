'use strict'
MercadoLivreApp.Collections.ProductList = Backbone.Collection.extend({
	url: `${END_POINT}/sites/MLA/search`,
	model: MercadoLivreApp.Models.ProductList,

	sync: function(method, collection, options) {
		return new Promise(resolve => {
			let query = options.data.query;
			let xhr   = new XMLHttpRequest();

			xhr.open('GET', `${collection.url}?q=${query}&limit=4`, true);
			xhr.onloadend = function() {
				resolve(JSON.parse(this.responseText));
			};

			xhr.send();
		});
	}
});