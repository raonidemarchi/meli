'use strict'
const END_POINT 	  = 'https://api.mercadolibre.com';
const MercadoLivreApp = {
    Models: {},
	Views: {},
    Collections: {},
    Router: {}
}

let PAGE_DESC = document.querySelector('head meta[name=description]');
let PAGE_IMG  = document.querySelector('head meta[property="og:image"]');

// focus on the search input
document.querySelector('#formSearch input').focus();

// form submitting event: redirect to search
$('#formSearch').submit((e) => window.location.hash = 'items?search=' + e.delegateTarget.querySelector('input[name=query]').value.trim());

$(function() { 
    MercadoLivreApp.Router.Instance = new MercadoLivreApp.Router();
    Backbone.history.start();
});