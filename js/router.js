'use strict'
MercadoLivreApp.Router = Backbone.Router.extend({
    routes: {
        '*path': 'productList'
    },

    productList: function() {
        let productView = new MercadoLivreApp.Views.ProductListView;
    }
});