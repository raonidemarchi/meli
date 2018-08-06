'use strict'
MercadoLivreApp.Router = Backbone.Router.extend({
    routes: {
		'': 'productList',
		'items?search=:query': 'productList',
		'items/:id-*path': 'productDetail', // receive the product description for SEO optimization
		'*path': 'productList',
    },

    productList: function(query) {
        new MercadoLivreApp.Views.ProductList({ query: query });
    },
	
	productDetail: function(id) {
        new MercadoLivreApp.Views.ProductDetail({ id: id });
    },
});