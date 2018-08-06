'use strict'
MercadoLivreApp.Collections.ProductCategory = Backbone.Collection.extend({
	url: `${END_POINT}/sites/MLA/search?category=`,
	model: MercadoLivreApp.Models.ProductCategory,

	sync: function(method, collection, options) {
		return new Promise(resolve => {
			let category_id = options.data.category_id;
			let xhr         = new XMLHttpRequest();

			xhr.open('GET', `${collection.url}${category_id}`, true);
			xhr.onloadend = function() {
				resolve(JSON.parse(this.responseText));
			};

			xhr.send();
		});
	}
});