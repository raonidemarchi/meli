'use strict'
const END_POINT 	  = 'https://api.mercadolibre.com';
const MercadoLivreApp = {
    Models: {},
	Views: {},
    Collections: {},
    Router: {}
}

// focus on the search input
document.querySelector('#formSearch input').focus();

$(function() { 
    MercadoLivreApp.Router.Instance = new MercadoLivreApp.Router();
    Backbone.history.start();
});

/*
async function getItem(id = '') {
	let result = await Promise.all([
		ajax(`${END_POINT}/items/${id}`),
		ajax(`${END_POINT}/items/${id}/description`)
	]);
	
	console.log(result);
} */