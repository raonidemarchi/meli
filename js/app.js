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
function ajax(url = '', method = 'GET') {
	return new Promise(resolve => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.onloadend = function() {
            resolve(JSON.parse(this.responseText));
        };

        xhr.send();
    });
}

async function getItem(id = '') {
	let result = await Promise.all([
		ajax(`${END_POINT}/items/${id}`),
		ajax(`${END_POINT}/items/${id}/description`)
	]);
	
	console.log(result);
} */