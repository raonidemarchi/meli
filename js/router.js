'use strict'
MercadoLivreApp.Router = Backbone.Router.extend({
    routes: {
		'': 'productList',
		'items?search=:query': 'teste',
		'*path': 'productList',
    },

    productList: function(options) {
        let productView = new MercadoLivreApp.Views.ProductListView;
    },
	
	teste: function(query) {
		let productView = new MercadoLivreApp.Views.ProductListView({ query: query });
    }
});