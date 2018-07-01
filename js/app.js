'use strict'
const END_POINT 	  = 'https://api.mercadolibre.com';
const MercadoLivreApp = {
    Models: {},
	Views: {},
    Collections: {},
    Router: {}
}

let PAGE_DESC  = document.querySelector('head meta[name=description]');
let PAGE_IMG   = document.querySelector('head meta[property="og:image"]');
let PAGE_URL   = document.querySelector('head link[rel=canonical]');

// focus on the search input
document.querySelector('#formSearch input').focus();

// form submitting event: redirect to search
$('#formSearch').submit(e => {
    let query = e.delegateTarget.querySelector('input[name=query]').value.trim();

    // cancel if the search is empty
    if(query === '')
        return;

    window.location.hash = 'items?search=' + query;
});

$(function() { 
    MercadoLivreApp.Router.Instance = new MercadoLivreApp.Router();
    Backbone.history.start();
});